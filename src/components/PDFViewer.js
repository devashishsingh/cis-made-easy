import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Container, Typography, TextField, Box, Paper } from '@mui/material';

const PDFViewer = () => {
    const [pdfUrl, setPdfUrl] = useState('');
    const [pdfFile, setPdfFile] = useState(null);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const handleUrlChange = (event) => {
        setPdfUrl(event.target.value);
        setPdfFile(null); // Clear file input when URL is entered
    };

    const handleFileChange = (event) => {
        setPdfFile(event.target.files[0]);
        setPdfUrl(''); // Clear URL input when file is selected
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                CIS Benchmark Viewer
            </Typography>
            <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
                <Box mb={2}>
                    <TextField
                        label="Enter PDF URL"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleUrlChange}
                        value={pdfUrl}
                    />
                    <Typography align="center" variant="body1">OR</Typography>
                    <input type="file" accept="application/pdf" onChange={handleFileChange} />
                </Box>
            </Paper>
            <div
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    height: '750px',
                    marginTop: '20px',
                }}
            >
                {pdfUrl ? (
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
                        <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
                    </Worker>
                ) : pdfFile ? (
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
                        <Viewer fileUrl={URL.createObjectURL(pdfFile)} plugins={[defaultLayoutPluginInstance]} />
                    </Worker>
                ) : (
                    <Typography align="center" variant="h6">No PDF Selected</Typography>
                )}
            </div>
        </Container>
    );
};

export default PDFViewer;
