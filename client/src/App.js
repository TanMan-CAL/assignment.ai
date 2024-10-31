// frontend/src/App.js

import React from 'react';
import './App.css';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-6 text-center animate-fade-in">
        SayNoToAnswers: <span className="text-gray-800">the MUCH-NEEDED study solution</span>
      </h1>
      
      <div className="text-center max-w-2xl space-y-6">

        <p className="text-xl text-gray-700 mb-6 font-semibold">
        Tired of answers cluttering your practice exams and homework? Quickly transform any assignment into a distraction-free study tool!</p>

        <p className="text-xl text-gray-700 mb-10">
          Drop your document below, and let’s get you ready for success!
        </p>
      </div>
      
      <div className="w-full max-w-md mt-10">
        <FileUpload />
      </div>

    
    </div>
  );
}

export default App;
