// frontend/src/components/FileUpload.js

import React, { useState } from 'react';

function FileUpload() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null); 
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.type === 'application/pdf') {
      setLoading(true);
      setFile(selectedFile);
      setDownloadUrl(''); 

      let totalChunks = 100; 

      const interval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === totalChunks) {
            clearInterval(interval);
            setLoading(false);
            return 0; 
          }
          return Math.min(oldProgress + 10, totalChunks);
        });
      }, 100); // Adjust time interval as necessary

      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate processing time

      const url = URL.createObjectURL(selectedFile);
      setDownloadUrl(url);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <label className="flex flex-col items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-lg shadow-md cursor-pointer transition duration-200">
        <span>Upload your PDF</span>
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="hidden" 
          accept="application/pdf"
        />
      </label>
      <p className="text-gray-500 mt-2">Drag and drop your file here or click to upload.</p>

      {/* display loading bar */}
      {loading && (
        <div className="w-full max-w-md mt-4">
          <div className="bg-gray-300 h-2 rounded-full">
            <div
              className="bg-blue-600 h-full rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-gray-700">{`Processing... ${progress}%`}</p>
        </div>
      )}

      {/* provide a download link after processing */}
      {downloadUrl && !loading && (
        <a 
          href={downloadUrl} 
          download={file.name} 
          className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Download Your Processed File
        </a>
      )}
    </div>
  );
}

export default FileUpload;
