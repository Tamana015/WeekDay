/***********************************************************************************************************************************
 * Name      : searchJobs
 * Date      : May 01
 * Usage: Render the search Jobs Page which includes jobs list and filtering jobs
 ************************************************************************************************************************************/

import React, { useState, useEffect } from 'react';
import './styles.css';
import JobCard from '../../components/jobCardComponent/jobCard';
      
const SearchJobs = () => {
  const [jobList, setJobList] = useState([1,2,8,4,5,1,3,4,5,6,4,3,4,2,2,4,6,5,3,2,6,5,4,3,3]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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
        .then((result) => setJobList(result))
        .catch((error) => console.error(error));
        setIsLoading(false);
    };

    // fetchJobData();
  }, []);

         console.log("Result is ",jobList);
      
const handleScroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop ===
    document.documentElement.offsetHeight
  ) {
    // fetchJobData();
  }
};
  
useEffect(() => {
window.addEventListener('scroll', handleScroll);
return () => {
  window.removeEventListener('scroll', handleScroll);
};
}, []);

  return (
    <div class="container">
      <div class="innerContainer">
        <div class="jobSections">
          {jobList.length>0 && jobList.map((job,index) => (
            <div class="jobCard" key={index}>
              <JobCard/>
            </div>
          ))}
      {isLoading && <p>Loading...</p>}
      </div>
      </div>
    </div>
  );
};

export default SearchJobs;