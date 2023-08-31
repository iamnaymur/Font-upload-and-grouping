import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";

const Form = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [warningMessage, setWarningMessage] = useState("");

  const onDrop = (acceptedFiles) => {
    const ttfFiles = acceptedFiles.filter((file) => file.name.endsWith(".ttf"));

    if (ttfFiles.length === 0) {
      setWarningMessage("Please select a valid TTF file.");
    } else {
      setSelectedFiles(ttfFiles);
      setWarningMessage("");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".ttf",
  });

  return (
    <div className="h-screen flex items-center justify-center ">
      <form
        {...getRootProps()}
        className="w-3/4 p-8 bg-white rounded shadow-black shadow-2xl"
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-7xl">
            <FaCloudUploadAlt />
          </h1>
          <h1>Click to upload or drag and drop.</h1>
          <h1 className="text-xs bold">Only TTF File Allowed.</h1>
        </div>
      </form>
    </div>
  );
};

export default Form;
