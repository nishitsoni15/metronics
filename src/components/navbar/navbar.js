import React from 'react';
import './styles/style.css';
import { CiSearch, CiBellOn, CiSquareCheck } from "react-icons/ci";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineLightMode } from "react-icons/md";
import { IconContext } from 'react-icons';
import { BsFileEarmarkPlus } from "react-icons/bs";

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='container'>
                    <div className='navDiv-1'>
                        <a href='/dashboard'>Dashboard</a>
                        <a href='/pages'>Pages</a>
                        <a href='/apps'>Apps</a>
                        <a href='/help'>Help</a>
                    </div>
                    <div className='navDiv-2'>
                        <IconContext.Provider value={{ color: "#A1A5B7", size: "30px" }}>
                            <div className='icon-div'>
                                <CiSearch />
                            </div>

                        </IconContext.Provider>
                        <IconContext.Provider value={{ color: "#A1A5B7", size: "30px" }}>
                            <div className='icon-div'>
                                <CiBellOn />
                            </div>

                        </IconContext.Provider>
                        <IconContext.Provider value={{ color: "#A1A5B7", size: "30px" }}>
                            <div className='icon-div'>
                                <CiSquareCheck />
                            </div>

                        </IconContext.Provider>
                        <IconContext.Provider value={{ color: "#A1A5B7", size: "30px" }}>
                            <div className='icon-div'>
                                <BiLinkExternal />
                            </div>

                        </IconContext.Provider>
                        <IconContext.Provider value={{ color: "#A1A5B7", size: "30px" }}>
                            <div className='icon-div'>
                                <AiOutlineAppstore />
                            </div>

                        </IconContext.Provider>
                        <IconContext.Provider value={{ color: "#A1A5B7", size: "30px" }}>
                            <div className='icon-div'>
                                <MdOutlineLightMode />
                            </div>

                        </IconContext.Provider>
                        <div className='nav-img'>
                            <img src='assets/300-1.jpg' alt='nav-profile-img' width={40} />
                        </div>

                    </div>
                </div>
            </nav>
            <nav className='navbar2'>
                <div className='container'>
                    <div className='div1'>
                        <ul>
                            <li className='li-1'>Dashboard</li>
                            <li className='li-2'>#XRS-45670</li>
                        </ul>
                    </div>
                    <div className='div2'>
                        <ul>
                            <li>Day</li>
                            <li>Week</li>
                            <li>Year</li>
                            <li>Today: Oct31</li>
                            <IconContext.Provider value={{ color: "#B1DEFA" }}>
                                <li><BsFileEarmarkPlus /></li>
                            </IconContext.Provider>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar;