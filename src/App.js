import './App.css';
import JobCard from './components/jobCardComponent/jobCard';
import SearchJobs from './pages/searchJobsPage/searchJobs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchJobs></SearchJobs>
        {/* <JobCard title='Front-end developer' company='Accolite digital' location='Gurugtam' description='have good experiecnce'
         experience='1.5'></JobCard> */}
      </header>
    </div>
  );
}

export default App;
