import React, { useState } from 'react';

function DocumentUpload({ onAddDocument }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;
    // Simulate document upload by creating a document object
    const newDoc = {
      id: Date.now(),
      name: file.name,
      content: '', // content extraction to be implemented later
    };
    onAddDocument(newDoc);
    setFile(null);
  };

  return (
    <div className="document-upload">
      <h3>Upload Document</h3>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>
        Upload
      </button>
    </div>
  );
}

export default DocumentUpload;
