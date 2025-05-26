import React, { useState } from 'react';
import DocumentUpload from '../components/DocumentUpload';
import DocumentList from '../components/DocumentList';
import QuestionAnswer from '../components/QuestionAnswer';

function Dashboard({ onLogout }) {
  const [documents, setDocuments] = useState([]);

  const handleAddDocument = (doc) => {
    setDocuments((prevDocs) => [...prevDocs, doc]);
  };

  const handleDeleteDocument = (id) => {
    setDocuments((prevDocs) => prevDocs.filter((doc) => doc.id !== id));
  };

  const handleUpdateDocument = (updatedDoc) => {
    setDocuments((prevDocs) =>
      prevDocs.map((doc) => (doc.id === updatedDoc.id ? updatedDoc : doc))
    );
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <button onClick={onLogout}>Logout</button>
      <DocumentUpload onAddDocument={handleAddDocument} />
      <DocumentList
        documents={documents}
        onDeleteDocument={handleDeleteDocument}
        onUpdateDocument={handleUpdateDocument}
      />
      <QuestionAnswer documents={documents} />
    </div>
  );
}

export default Dashboard;
