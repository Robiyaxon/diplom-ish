import './App.css';
import { Doctors } from './component/doctors/Doctors';
import { Footer } from './component/footer/Footer';
import { Service } from './component/serveices/Service';

import { MainTopHeader } from './component/topheader/MainTopHeader';

function App() {
  return (
    <div className="App">
      <MainTopHeader />
   
      <Footer/>
    </div>
  );
}
export default App;