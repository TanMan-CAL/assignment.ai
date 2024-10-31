    // frontend/src/components/FileUpload.js

    import React from 'react';

    function FileUpload() {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // Handle file upload logic here
        console.log(file);
    };

    return (
        <div className="flex flex-col items-center mt-4">
        <label className="flex flex-col items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-lg shadow-md cursor-pointer transition duration-200">
            <span>Upload your PDF </span>
            <input 
            type="file" 
            onChange={handleFileChange} 
            className="hidden" // Hide the default input
            />
        </label>
        <p className="text-gray-500 mt-2">Drag and drop your file here or click to upload.</p>
        </div>
    );
    }

    export default FileUpload;
