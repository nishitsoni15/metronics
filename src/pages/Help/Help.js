import React from "react";
import { Navbar, Sidebar } from "../../components";
import './styles/style.css';

const Help = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="helpPage">
                <h1>Help Page! Ask me What you Want...</h1>
            </div>

        </>
    )
}

export default Help;