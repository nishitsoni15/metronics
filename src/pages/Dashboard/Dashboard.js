import React from "react";
import { Navbar, Sidebar } from "../../components";
import { Compititors, Info } from "../../layouts";


const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <Navbar />
            <Compititors />
            <Info />
        </>
    )
}

export default Dashboard;