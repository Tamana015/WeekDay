import React from 'react';
import './styles.css';
import { aboutCompany, aboutUs } from '../../locales/locales';

const AboutCompany = ({ description, jdLink }) => {
  return (
    <div className="about-company-box">
      <div className="about-company">
        <p className="about-company-header">{aboutCompany}</p>
        <div className="about-us">
          <p>
            <strong>{aboutUs}</strong>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>{description}</span>
          </p>
        </div>
      </div>
      <div className="viewJobs">
        <a className="viewJobsLink" href={jdLink}>View job</a>
      </div>
    </div>
  );
};

export default AboutCompany;