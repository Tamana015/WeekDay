import React from 'react';
import './styles.css';
import { aboutCompany, aboutUs } from '../../locales/locales';
const AboutCompany = ({description, jdLink}) => {
    return (
    <div class="about-company-box">
    <div class="about-company">
      <p class="about-company-header">{aboutCompany}</p>
      <div class="about-us">
        <p>
          <strong>
            {aboutUs}
          </strong>
        </p>
        <p>
          <span style={{fontWeight:400}}>
            {description}
           </span>
        </p>
        <p></p>
      </div>
    </div>
    <div class="viewJobs">
          <a class="viewJobsLink" href={jdLink}>View job</a>
      </div>
    </div>)
 }

 export default AboutCompany;