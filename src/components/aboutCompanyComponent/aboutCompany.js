import React from 'react';
import './styles.css';
const AboutCompany = () => {
    return (
    <div class="about-company-box">
    <div class="about-company">
      <p class="about-company-header">About Company:</p>
      <div class="about-us">
        <p>
          <strong>
            About us
          </strong>
        </p>
        <p>
          <span style={{fontWeight:400}}>
           Flex Wash is an operating system for the car wash industry. Our solutions help owners manage their operations and grow revenue.
          </span>
        </p>
        <p>
          <span style={{fontWeight:400}}>
          Our POS has a built-in CRM, allowing car washes to take advantage of their customer transaction history in order to funnel customers into subscriptions and higher margin wash packages.
          </span>
        </p>
        <p></p>
        <p>
          <strong>
          Founder/Recruiter profiles:
          </strong>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/chirag-singh-toor-94713aa7/">
          <span style={{fontWeight:400}}>Chirag Singh Toor</span>
          </a>
        </p>
      </div>
    </div>
    <div class="viewJobs">
          <a class="viewJobsLink" href="https://jobs.weekday.works/flexwash-technologies-founding-engineer?candidateId=U2FsdGVkX19g6bpedO/qCLmxWoM7lJQaP4qPPFXaEZs25XZxS+ZQShkpqB7xVIGd">View job</a>
      </div>
    </div>)
 }

 export default AboutCompany;