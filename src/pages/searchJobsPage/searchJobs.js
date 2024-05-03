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
import { convertToRupees } from '../../utils/helper';

const SearchJobs = () => {
  const [jobList, setJobList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const storeData = useSelector((state) => state);

  const fetchJobData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ "limit": 10, "offset": 0 })
      });
      const result = await response.json();
      setJobList(result.jdList);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      fetchJobData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filterJobs = (job) => {
    const { dropdownValues } = storeData;
    if (
      (dropdownValues.location && !job.location.toLowerCase().startsWith(dropdownValues.location)) ||
      (dropdownValues.minimumBaseSalary && job.minJdSalary != null &&
        convertToRupees(job.minJdSalary, job.salaryCurrencyCode) < convertToRupees(dropdownValues.minimumBaseSalary)) ||
      (dropdownValues.experience && job.minExp < dropdownValues.experience) ||
      (dropdownValues.remotePreference && !job.location.toLowerCase().startsWith(dropdownValues.remotePreference)) ||
      (dropdownValues.roles && dropdownValues.roles.length &&
        !dropdownValues.roles.some(role => job.jobRole.toLowerCase().startsWith(role.toLowerCase()))) ||
      (dropdownValues.techStack && job.techStack && dropdownValues.techStack.length &&
        !dropdownValues.techStack.includes(job.techStack.toLowerCase())) ||
      (dropdownValues.searchCompanyName && !job.companyName.toLowerCase().startsWith(dropdownValues.searchCompanyName))
    ) {
      return false;
    }
    return true;
  };

  const filteredJobs = jobList.filter(filterJobs);

  return (
    <div className="container">
      <div className="innerContainer">
        <FilterList />
        {
            filteredJobs.length==0 && <p style={{paddingTop:'250px', textAlign:'center', fontSize:'30px'}}>No data found</p>
        }
        <div className="jobSections">
          {filteredJobs.map((job, index) => (
            <div className="jobCard" key={index}>
              <JobCard
                logoUrl={job.logoUrl}
                companyName={job.companyName}
                title={job.jobRole}
                location={job.location}
                companyDescription={job.jobDetailsFromCompany}
                jdLink={job.jdLink}
                minJdSalary={job.minJdSalary}
                maxJdSalary={job.maxJdSalary}
                salaryCurrencyCode={job.salaryCurrencyCode}
                minimumExperience={job.minExp} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchJobs;