import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import SimpleComponent from './SimpleComponent';

const App = () => (
    <div>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/simple" element={<SimpleComponent />} />
            <Route path="/" element={<Navigate to="/simple" />} />
        </Routes>
    </div>
);

export default App;
