/***********************************************************************************************************************************
 * Name      : searchJobs
 * Date      : May 01
 * Usage: Render the search Jobs Page which includes jobs list and filtering jobs
 ************************************************************************************************************************************/

import React, { useState, useEffect } from 'react';
import './styles.css';
import JobCard from '../../components/jobCardComponent/jobCard';
import FilterList from '../../components/filterComponent/filterLists';
import { useSelector } from 'react-redux';
import {convertToRupees } from '../../utils/helper';
      
const SearchJobs = () => {
  const [jobList, setJobList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const storeData = useSelector((state) => state)

  const fetchJobData = async () => {
    setIsLoading(true);
    const myHeaders = new Headers();  
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({
      "limit": 10,
      "offset": 0
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
    };
    
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      .then((response) => response.text())
      .then((result) => setJobList(JSON.parse(result).jdList))
      .catch((error) => console.error(error));
      setIsLoading(false);
  };

  useEffect(() => {
    fetchJobData();
  }, []);
      
const handleScroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop ===
    document.documentElement.offsetHeight
  ) {
    fetchJobData();
  }
};
  
  useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
  window.removeEventListener('scroll', handleScroll);
  };
  }, []);

  const filteredJobs = jobList.filter(job => {  
     if (storeData.dropdownValues.location && 
      (!job.location.toLowerCase().startsWith(storeData.dropdownValues.location))) return false;

     //todo - if we have only maxSalary so how filtering expected
    if (storeData.dropdownValues.minimumBaseSalary && (job.minJdSalary!=null && 
      ( convertToRupees(job.minJdSalary,job.salaryCurrencyCode) <
      convertToRupees(storeData.dropdownValues.minimumBaseSalary)) || job.minJdSalary==null )) return false;
      
    if (storeData.dropdownValues.experience && (job.minExp < storeData.dropdownValues.experience)) return false;
  
    if (storeData.dropdownValues.remotePreference && (
      !job.location.toLowerCase().startsWith(storeData.dropdownValues.remotePreference))) return false;

    if (storeData.dropdownValues.roles) {
      let value = false;
      const result= storeData.dropdownValues.roles.filter(role => {
        if(job.jobRole.toLowerCase().startsWith(role.toLowerCase()))
          {
            value=true;
          }
      });
      return value;
    }

    if (storeData.dropdownValues.techStack) {
      let value = false;
      const result= storeData.dropdownValues.techStack.filter(role => {
        if(role.toLowerCase() == job.techStack.toLowerCase())
          {
            value=true;
          }
      });
      return value;
    }

    if (storeData.dropdownValues.searchCompanyName && (!job.companyName.toLowerCase().startsWith(storeData.dropdownValues.searchCompanyName))) return false;

    return true;

  });

  return (
    <div className="container">
      <div className="innerContainer">
        <FilterList/>
        <div className="jobSections">
          {filteredJobs.length>0 && filteredJobs.map((job,index) => (
            <div className="jobCard" key={index}>
              <JobCard 
              logoUrl={job.logoUrl}
              companyName ={job.companyName}
              title={job.jobRole} 
              location={job.location} 
              companyDescription={job.jobDetailsFromCompany}
              jdLink={job.jdLink}
              minJdSalary={job.minJdSalary}
              maxJdSalary={job.maxJdSalary}
              salaryCurrencyCode={job.salaryCurrencyCode}
              minimumExperience={job.minExp}/>
            </div>
          ))}
      {isLoading && <p>Loading...</p>}
      </div>
      </div>
    </div>
  );
};

export default SearchJobs;