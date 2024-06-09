import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ChecklistContent = () => {
  const { fileName } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/get_pdf_content?file_name=${fileName}`);
        setContent(response.data.content);
      } catch (error) {
        console.error("Error fetching PDF content", error);
      }
    };
    fetchContent();
  }, [fileName]);

  return (
    <div>
      <h1>Checklist Content</h1>
      <pre>{content}</pre>
    </div>
  );
};

export default ChecklistContent;
