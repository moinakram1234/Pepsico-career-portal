import React, { useEffect, useState } from 'react';
import Appform from "@/components/NextGen/app_form";
import parseJwt from '@/components/parsetoken';

const Index = () => {
  const [tokenData, setTokenData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const tokenData = parseJwt(token);
      setTokenData(tokenData);
    }
  }, []);

  if (!tokenData) {
    // Handle the case where tokenData is not available, e.g., show a loading spinner or a message
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Appform email={tokenData.email} />
    </div>
  );
};

export default Index;
