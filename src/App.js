import './App.css';
import { Footer } from './component/footer/Footer';
import { MainTopHeader } from './component/topheader/MainTopHeader';
// import Registration from './component/registration/Registration';
// import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <MainTopHeader />
      <Footer/>
      {/* <Routes> */}
        {/* <Route path='registration' element={<Registration/>} /> */}
      {/* </Routes> */}
    </div>
  );
}
export default App;