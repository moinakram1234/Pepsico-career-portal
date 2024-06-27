// components/ApplicationSubmittedMessage.js

import React from 'react';
import Head from 'next/head';
import { CheckCircleIcon } from '@heroicons/react/solid'; // Using Heroicons for icons
import { CheckCircledIcon } from '@radix-ui/react-icons';

const ApplicationSubmittedMessage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Application Submitted</title>
      </Head>
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg flex items-center space-x-4">
        <CheckCircledIcon className="h-12 w-12 text-green-500" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Application Submitted</h2>
          <p className="text-gray-700">You have already submitted your job application.</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSubmittedMessage;
