import React from 'react';
import AppRoutes from './routes.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <>
            <Toaster position="top-right" />
            <AppRoutes />
        </>
    );
}

export default App;


