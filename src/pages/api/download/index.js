// pages/api/download-zip.js
import { promises as fs } from 'fs';
import path from 'path';
import archiver from 'archiver';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Adjust the size limit as needed
    },
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { files } = req.body; // Expecting an array of file paths and IDs

    if (!files || !Array.isArray(files)) {
      return res.status(400).json({ error: 'Invalid files data' });
    }

    const archive = archiver('zip', { zlib: { level: 9 } });

    res.setHeader('Content-Disposition', 'attachment; filename=files.zip');
    res.setHeader('Content-Type', 'application/zip');
    archive.pipe(res);

    for (const { path: filePath, id } of files) {
      const fullPath = path.resolve('.', 'public', 'uploads', filePath);
      const fileExtension = path.extname(filePath);
      const newFileName = `${id}${fileExtension}`;

      console.log(`Attempting to read file from: ${fullPath}`);

      try {
        const fileContent = await fs.readFile(fullPath);
        archive.append(fileContent, { name: newFileName });
      } catch (error) {
        console.error(`Error reading file ${fullPath}:`, error);
      }
    }

    archive.finalize();
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
