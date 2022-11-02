import React from "react";
import './styles/style.css';
import { IconContext } from 'react-icons';
import { RiHomeSmileLine, RiPagesLine, RiDatabase2Line, RiApps2Fill, RiSettings2Line } from "react-icons/ri";
import { MdOutlineQuickreply } from "react-icons/md";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="head-sidebar">
                    <img src="assets/demo6.svg" alt="sidebar-icon" />
                </div>
                <div className="main-div">
                    <IconContext.Provider value={{ size: "30px" }}>
                        <div className="mid-divs">
                            <RiHomeSmileLine />
                            <h6>Home</h6>
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: "30px" }}>
                        <div className="mid-divs">
                            <RiPagesLine />
                            <h6>Pages</h6>
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: "30px" }}>
                        <div className="mid-divs">
                            <RiDatabase2Line />
                            <h6>Utilities</h6>
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: "30px" }}>
                        <div className="mid-divs">
                            <RiApps2Fill />
                            <h6>Apps</h6>
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: "30px" }}>
                        <div className="mid-divs">
                            <RiSettings2Line />
                            <h6>Help</h6>
                        </div>
                    </IconContext.Provider>
                </div>

                <IconContext.Provider value={{ size: "30px", color: '#9CA0B2' }}>
                    <div className="foot-sidebar">
                        <MdOutlineQuickreply />
                    </div>
                </IconContext.Provider>
            </div>
        </>
    )
}

export default Sidebar;