import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { TreeView, TreeItem } from '@mui/lab';
import { Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ChecklistTree = () => {
  const { fileName } = useParams();
  const [checklist, setChecklist] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/get_checklist?file_name=${fileName}`);
        setChecklist(response.data);
      } catch (error) {
        console.error("Error fetching checklist content", error);
      }
    };
    fetchContent();
  }, [fileName]);

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={String(nodes.id)} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  if (!checklist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Typography variant="h4">{checklist.name}</Typography>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {checklist.settings.map((setting) => renderTree(setting))}
      </TreeView>
    </div>
  );
};

export default ChecklistTree;
