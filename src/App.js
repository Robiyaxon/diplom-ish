import './App.css';

import { MainTopHeader } from './component/topheader/MainTopHeader';
import { TopHeader } from './component/top_header/TopHeader';

import WeeklyDoctors from './component/weeklyDoctors/WeeklyDoctors';

function App() {
  return (
    <div className="App">
      <MainTopHeader />
      <TopHeader/>
      <WeeklyDoctors/>
    </div>
  );
}
export default App;