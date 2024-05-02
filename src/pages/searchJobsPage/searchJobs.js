/***********************************************************************************************************************************
 * Name      : searchJobs
 * Date      : May 01
 * Usage: Render the search Jobs Page which includes jobs list and filtering jobs
 ************************************************************************************************************************************/

import React, { useState, useEffect } from 'react';
import './styles.css';
import JobCard from '../../components/jobCardComponent/jobCard';
import FilterList from '../../components/filterComponent/filterLists';
      
const SearchJobs = () => {
  const [jobList, setJobList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

console.log("==>",jobList);
  return (
    <div class="container">
      <div class="innerContainer">
        <FilterList/>
        <div class="jobSections">
          {jobList.length>0 && jobList.map((job,index) => (
            <div class="jobCard" key={index}>
              <JobCard 
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