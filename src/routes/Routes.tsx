import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routePaths } from './routePaths';
import { NotesView } from '@/views/Notes';

const AppRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    {/* Global Routes */}
                    <Route path={routePaths.global.root} element={<NotesView />} />
                </Routes>
            </Router>
        </>
    );
};

export { AppRoutes as Routes };