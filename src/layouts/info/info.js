import React from "react";
import './styles/style.css';
import { MdHeight, MdShoppingBasket } from "react-icons/md";
import { RiBuilding4Fill } from "react-icons/ri";
import { ImStatsBars2 } from "react-icons/im";
import { IconContext } from 'react-icons';
import { AiOutlineAppstore } from "react-icons/ai";
import { Chart, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(
 Tooltip, Title, ArcElement, Legend
);

const Info = () => {

 const array = [
  {
   id: 1,
   className: 'all-divs shopping-cart',
   icon: <MdShoppingBasket />,
   name: 'Shopping Cart',
   descp: 'Lands, Houses, Ranchos, Farms'
  },
  {
   id: 2,
   className: 'all-divs appartment',
   icon: <RiBuilding4Fill />,
   name: 'Appartments',
   descp: 'Flats, Shared Rooms, Duplex'
  },
  {
   id: 3,
   className: 'all-divs sales-stats',
   icon: <ImStatsBars2 />,
   name: 'Sales Stats',
   descp: '50% Increased for FY20'
  }
 ]

 const data = {

  datasets: [{

   data: [12, 7],
   backgroundColor: [
    '#24ACF8',
    '#F3FBFF'
   ],

  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [

  ]

 };

 const centerText = {
  id: 'centerText',
  afterDatasetsDraw(chart, args, pluginOptions) {
   const { ctx } = chart;
   ctx.save();
   console.log(chart.getDatasetMeta())
  }
 }
 return (
  <>
   <section className="info">
    <div className="container">
     {
      array.map((item) => {
       return (
        <div className={item.className}>
         <IconContext.Provider value={{ size: "30px" }}>
          <div className="info-icons">{item.icon}</div>
         </IconContext.Provider>

         <h2 className="all-h2s">{item.name}</h2>
         <p className="all-ps">{item.descp}</p>
        </div>
       )
      })
     }


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
       <div style={{ width: "50%" }}>
        <Doughnut data={data} options={{ cutout: 65 }} config={centerText} />
       </div>



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