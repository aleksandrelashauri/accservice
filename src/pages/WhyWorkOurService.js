import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';

// Import the styles of react-pdf-viewer
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

const WhyWorkOurService = () => {
    const zoomPluginInstance = zoomPlugin();
    const { ZoomInButton, ZoomOutButton } = zoomPluginInstance;

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    რატომ გჭირდება ჩვენი სერვისი
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                        <div className="flex justify-center mb-4">
                            <ZoomInButton />
                            <ZoomOutButton />
                        </div>
                        <div className="border">
                            <Viewer fileUrl="/Assets/manual.pdf" plugins={[zoomPluginInstance]} />
                        </div>
                    </Worker>
                </div>
            </div>
        </section>
    );
};

export default WhyWorkOurService;
