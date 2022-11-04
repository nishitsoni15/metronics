import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, Help, Notfound } from './pages';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route exact path="/help" element={<Help />} />
                    <Route exact path="*" element={<Notfound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router;