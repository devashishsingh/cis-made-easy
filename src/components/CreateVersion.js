import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CreateVersion = () => {
  const { fileName } = useParams();
  const [content, setContent] = useState("");
  const [newContent, setNewContent] = useState("");
  const [versionName, setVersionName] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`/api/get_pdf_content?file_name=${fileName}`);
        setContent(response.data.content);
        setNewContent(response.data.content);
      } catch (error) {
        console.error("Error fetching PDF content", error);
      }
    };
    fetchContent();
  }, [fileName]);

  const handleSave = () => {
    // Implement save logic
    console.log("Saving new version:", versionName, newContent);
  };

  return (
    <div>
      <h1>Create Your Own Version</h1>
      <input 
        type="text" 
        placeholder="Version Name" 
        value={versionName} 
        onChange={(e) => setVersionName(e.target.value)} 
      />
      <textarea 
        value={newContent} 
        onChange={(e) => setNewContent(e.target.value)} 
        rows="20" 
        cols="100"
      />
      <button onClick={handleSave}>Save Version</button>
    </div>
  );
};

export default CreateVersion;
