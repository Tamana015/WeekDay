import React from 'react';
import './styles.css';
import AboutCompany from '../aboutCompanyComponent/aboutCompany';
import ExperienceInfo from '../experienceInfoComponent/experienceInfo';
import { easyApply, estimatedSalary, hyphen } from '../../locales/locales';

const JobCard = ({ title, logoUrl, companyName, minimumExperience, location, companyDescription, jdLink, minJdSalary, maxJdSalary, salaryCurrencyCode }) => {

  const renderSalary = () => {
    if (minJdSalary || maxJdSalary) {
      return (
        <p className="salary">
          {estimatedSalary}
          {salaryCurrencyCode} {minJdSalary}{minJdSalary && maxJdSalary && hyphen}{maxJdSalary}
          <span aria-label="Offered salary range" role="img"> ✅</span>
          <br />
        </p>
      );
    }
    return null;
  };

  return (
    <div className="cardContainer">
      <div className="innerCardContainer">
        <div className="sub-container">
          <img className="logo" src={logoUrl} alt="logo" />
          <div>
            <div className="inner-header">
              <h3 className="companyName">{companyName}</h3>
              <p className="title">{title}</p>
            </div>
            <p className="locationExperience">{location}</p>
          </div>
        </div>
        {renderSalary()}
        <AboutCompany description={companyDescription} jdLink={jdLink} />
        <ExperienceInfo minimumExperience={minimumExperience} />
      </div>
      <div className="button">
        <div className="applyButton">
          <a href={jdLink} style={{ width: '96%' }}>
            <button className="apply" tabIndex="0" type="button" id="custom-btn">{easyApply}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;