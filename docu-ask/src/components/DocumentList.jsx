import React, { useState } from 'react';

function DocumentList({ documents, onDeleteDocument, onUpdateDocument }) {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');

  const startEditing = (doc) => {
    setEditId(doc.id);
    setEditName(doc.name);
  };

  const cancelEditing = () => {
    setEditId(null);
    setEditName('');
  };

  const saveEditing = () => {
    if (editName.trim() === '') return;
    onUpdateDocument({ id: editId, name: editName });
    setEditId(null);
    setEditName('');
  };

  return (
    <div className="document-list">
      <h3>Uploaded Documents</h3>
      {documents.length === 0 ? (
        <p>No documents uploaded yet.</p>
      ) : (
        <ul>
          {documents.map((doc) => (
            <li key={doc.id}>
              {editId === doc.id ? (
                <>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  <button onClick={saveEditing}>Save</button>
                  <button onClick={cancelEditing}>Cancel</button>
                </>
              ) : (
                <>
                  <span>{doc.name}</span>
                  <button onClick={() => startEditing(doc)}>Edit</button>
                  <button onClick={() => onDeleteDocument(doc.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DocumentList;
