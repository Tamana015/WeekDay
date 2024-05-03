import React from 'react';
import './styles.css';
import AboutCompany from '../aboutCompanyComponent/aboutCompany';
import ExperienceInfo from '../experienceInfoComponent/experienceInfo';
import { easyApply, estimatedSalary, hyphen } from '../../locales/locales';

const JobCard = ({ title, 
  company,
  minimumExperience, 
  location,
  companyDescription,
  jdLink,
  minJdSalary,
  maxJdSalary,
  salaryCurrencyCode }) => {

  return (
    <div className="cardContainer">
      <div className="innerCardContainer">
        <div className="sub-container">
        {/* company logo is not in api data so using default company logo */}
        <img className="logo" src="https://bookface-images.s3.amazonaws.com/logos/017257ba9b6f2ef9437d4228ef09c47656b900da.png" alt="logo"/>
          <div>
            <div className="inner-header">
              {/* company name is not in api data so using default company name */}
              <h3 className="companyName">{company || 'WeekDay'}</h3>
              <p className="title">{title}</p>
            </div>
          <p className="locationExperience">{location}</p>
        </div>
        </div>
        {(minJdSalary || maxJdSalary) && <p className="salary">
        {estimatedSalary}
        {salaryCurrencyCode} {minJdSalary}{minJdSalary && maxJdSalary && hyphen}{maxJdSalary}
        <span aria-label="Offered salary range" class> ✅</span>
        <br/>
        </p>}
        <AboutCompany description={companyDescription} jdLink={jdLink}/>
        <ExperienceInfo minimumExperience={minimumExperience}/>
      </div>
      <div className="button">
        <div className="applyButton">
        <a href={jdLink} style={{width:'96%'}}>
            <button className="apply" tabindex="0" type="button" id="custom-btn">{easyApply}</button>
        </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;