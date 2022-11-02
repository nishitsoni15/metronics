import React from "react";
import './styles/style.css';
import { MdShoppingBasket } from "react-icons/md";
import { RiBuilding4Fill } from "react-icons/ri";
import { ImStatsBars2 } from "react-icons/im";
import { IconContext } from 'react-icons';
import { AiOutlineAppstore } from "react-icons/ai";

const Info = () => {
    return (
        <>
            <section className="info">
                <div className="container">
                    <div className="all-divs shopping-cart">
                        <IconContext.Provider value={{ size: "30px" }}>
                            <div className="info-icons"><MdShoppingBasket /></div>
                        </IconContext.Provider>

                        <h2 className="all-h2s">Shopping Cart</h2>
                        <p className="all-ps">Lands, Houses, Ranchos, Farms</p>
                    </div>
                    <div className="all-divs appartment">
                        <IconContext.Provider value={{ size: "30px" }}>
                            <div className="info-icons"><RiBuilding4Fill /></div>
                        </IconContext.Provider>
                        <h2 className="all-h2s">Appartments</h2>
                        <p className="all-ps">Lands, Houses, Ranchos, Farms</p>
                    </div>
                    <div className="all-divs sales-stats">
                        <IconContext.Provider value={{ size: "30px" }}>
                            <div className="info-icons"><ImStatsBars2 /></div>
                        </IconContext.Provider>
                        <h2 className="all-h2s">Sales Stats</h2>
                        <p className="all-ps">Lands, Houses, Ranchos, Farms</p>
                    </div>
                </div>

                <div className="container">
                    <div className="all-divs-2 sales-overview">
                        <div className="sales-head-div">
                            <div className="overview-div">
                                <h2>
                                    Sales Overview
                                </h2>
                                <p>Recent sales statistics</p>
                            </div>
                            <div>
                                <AiOutlineAppstore />
                            </div>
                        </div>
                        <div className="sales-main-div">
                            <div className="inner-divs average-sale">
                                <p className="main-p">Average Sale</p>
                                <p className="second-p">$650</p>
                            </div>
                            <div className="inner-divs commission">
                                <p className="main-p">Commission</p>
                                <p className="second-p">$233,600</p>
                            </div>
                            <div className="inner-divs annual-tax">
                                <p className="main-p">Annual Taxes 2019</p>
                                <p className="second-p">$29,004</p>
                            </div>
                            <div className="inner-divs income">
                                <p className="main-p">Annual Income</p>
                                <p className="second-p">$14800</p>
                            </div>
                        </div>
                        <div className="sale-foot-div">
                            <img src="assets/WRPum.png" alt="sales-chart" />
                        </div>
                    </div>
                    <div className="all-divs-2 action-needed">
                        <div className="action-head-div">
                            <div className="needed-div">
                                <h2>
                                    Action Needed
                                </h2>
                                <p>Complete your profile setup</p>
                            </div>
                            <div>
                                <AiOutlineAppstore />
                            </div>
                        </div>
                        <div className="action-main-div">
                            <img src="assets/ProgressCircle-04.png" alt="progress-img" width={180} />
                            <p>
                                <span>Notes:</span>Current sprint requires stakeholders
                                to approve newly amended policies
                            </p>
                            <button>Take Action</button>
                        </div>
                    </div>
                    <div className="all-divs-2 trends">
                        <div className="trends-head-div">
                            <div className="trends-div">
                                <h2>
                                    Trends
                                </h2>
                                <p>Latest trends</p>
                            </div>
                            <div>
                                <AiOutlineAppstore />
                            </div>
                        </div>
                        <div className="trends-main-div">
                            <div className="img-trends">
                                <img src="assets/gFdef89.png" alt="trends-chart" width={290} />
                            </div>

                            <div className="trends-second-div">
                                <div className="top-author">
                                    <div className="icon">
                                        <img src="assets/plurk.svg" alt="plurk" width={25} />
                                    </div>
                                    <div className="mid-para">
                                        <p className="main">Top Authors</p>
                                        <p className="second">Ricky Hunt, Sandra Trepp</p>
                                    </div>
                                    <div className="dollars">
                                        +82$
                                    </div>
                                </div>
                                <div className="top-sale">
                                    <div className="icon">
                                        <img src="assets/figma-1.svg" alt="figma" width={20} />
                                    </div>
                                    <div className="mid-para">
                                        <p className="main">Top Sales</p>
                                        <p className="second">PitStop Emails</p>
                                    </div>
                                    <div className="dollars">
                                        +82$
                                    </div>
                                </div>
                                <div className="top-engagement">
                                    <div className="icon">
                                        <img src="assets/vimeo.svg" alt="vimeo" width={25} />
                                    </div>
                                    <div className="mid-para">
                                        <p className="main">Top Engagement</p>
                                        <p className="second">KT.com</p>
                                    </div>
                                    <div className="dollars">
                                        +82$
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Info;