import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";

const Form = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [warningMessage, setWarningMessage] = useState("");

  const onDrop = (acceptedFiles) => {
    const ttfFiles = acceptedFiles.filter((file) => file.name.endsWith(".ttf"));

    if (ttfFiles.length === 0) {
      setWarningMessage("Select valid TTF file to continue.");
    } else {
      setSelectedFiles(ttfFiles);
      setWarningMessage("");

      const formData = new FormData();
      ttfFiles.forEach((file) => {
        formData.append("fonts[]", file);
      });
    }
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: true,
    accept: ".ttf",
  });

  console.log(selectedFiles);

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
          <h1>Click the button to upload or drag and drop.</h1>
          <button
            className="btn btn-wide my-5 hover:bg-blue-500  hover:text-white"
            type="button"
            onClick={open}
          >
            Open
          </button>
          <h1 className="text-xs font-extrabold">
            Only TTF format files are allowed.
          </h1>
        </div>
        <p className="text-xs font-bold text-red-600 ">{warningMessage}</p>
      </form>
    </div>
  );
};

export default Form;
