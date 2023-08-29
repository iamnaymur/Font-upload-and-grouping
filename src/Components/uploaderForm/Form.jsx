import React from "react";
import { FaCloudUploadAlt } from 'react-icons/fa';

const Form = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-white rounded shadow-md">
      <h1 className="flex items-center justify-center"><FaCloudUploadAlt/></h1>
        <h1>Click to upload or drag and drop.</h1>
        <h1 className="text-xs">Only TTF File Allowed.</h1>
      </div>
    </div>
  );
};

export default Form;
