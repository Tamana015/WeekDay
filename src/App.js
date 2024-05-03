import './App.css';
import SearchJobs from './pages/searchJobsPage/searchJobs';
import { Provider } from "react-redux";
import store from './store/Redux/store';

function App() {
  return (
    <Provider store={store}>
        <SearchJobs/>
    </Provider>
  );
}

export default App;
