import React, { useState } from 'react';
import './styles.css';
import AboutCompany from '../aboutCompanyComponent/aboutCompany';
import ExperienceInfo from '../experienceInfoComponent/experienceInfo';

const JobCard = ({ title, company, location, description, experience }) => {
  const [expanded, setExpanded] = useState(false);

  console.log("title is ",title);
  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div class="cardContainer">
      <div class="innerCardContainer">
        <div class="sub-container">
        <img class="logo" src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1714542815382_7w5g1.jpg" alt="logo"/>
          <div>
            <div class="inner-header">
              <h3 class="companyName">Syren Cloud Inc</h3>
              <p class="title">Neo4J Developer</p>
            </div>
          <p class="locationExperience">Hyderabad</p>
        </div>
        </div>
        <p class="salary">
        Estimated Salary:
        ₹30 - 60 LPA
        <span aria-label="Offered salary range" class> ✅</span>
        <br/>
        </p>
        <AboutCompany/>
        <ExperienceInfo/>
      </div>
      <div class="button">
        <div class="applyButton">
        <button class="apply" tabindex="0" type="button" id="custom-btn" >⚡ Easy Apply</button>
          </div>
        </div>
    </div>
  );
};

export default JobCard;

// import React, { useState } from 'react';
// import './styles.css';

// const JobCard = ({ title, company, location, description, experience }) => {
//   const [expanded, setExpanded] = useState(false);

//   console.log("title is ",title);
//   const toggleDescription = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div class="card">
//       <div class="outerCardContainer">
//         {/* <div class="innerCardContainer"> */}
//           <div class="companyDetails">
//             <div class="sub-container">
//               <h3 class="companyName"> Syren Cloud Inc</h3>
//               <h2 class="title">Neo4J Developer</h2>
//             </div>
//           </div>
//           <p class="locationExperience">Hyderabad</p>
//         </div>
//       </div>
//             {/* <p class="MuiTypography-root MuiTypography-body2 card-salary css-361mbm">Estimated Salary: ₹32 - 54 LPA<span aria-label="Estimated by Weekday. Not provided by employer" class=""> ⚠️</span><br></p>
//             <div class="jd-link-container">
//               <div class="hard-lang-container"></div>
//               </div><div class="MuiBox-root css-56jvne">
//                 <div class="MuiBox-root css-0">
//                   <p class="MuiTypography-root MuiTypography-body1 css-1hw7dw8">About Company:</p>
//             <div class="MuiBox-root css-1m7bgf1">Syren is a specialist data engineering and supply chain solutions company. With over 400 employees, development centers in USA and India within 3 years of starting operations, Syren serves F500 or high-technology clients such as Johnson &amp; Johnson, eBay, Microsoft, GitHub among others.</div>
//             <p class="MuiTypography-root MuiTypography-body1 css-1yg3a6w">About Role:</p>
//           // <div class="MuiBox-root css-1m7bgf1">SyrenCloud Inc, is a Data Engineering company solving problems for the Supply Chain Management industry. We are a thriving organization with 350+ employees and a robust $25M+ revenue, positioned with strong growth history. We are a team of dedicated engineers committed to designing and delivering cutting-edge supply chain solutions that tackle complex challenges faced by large enterprises. */}
//      {/* <h2>{title}</h2>
//       <h3>{company}</h3>
//       <p>{location}</p>
//       <p>{expanded ? description : `${description.slice(0, 100)}...`} <span onClick={toggleDescription}>{expanded ? 'Show less' : 'Show more'}</span></p>
//       <p>{experience}</p>
//       <button className="apply-button">Apply</button> */}
//     </div>
//   );
// };

// export default JobCard;