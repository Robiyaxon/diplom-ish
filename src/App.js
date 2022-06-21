import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './component/footer/Footer';
import { MainTopHeader } from './component/topheader/MainTopHeader';
import { MyBackTop } from './ScrollerOn';
import Login from './component/login/Login';
function App() {
  return (
    <div className="App">
      <MainTopHeader />
      <Footer />
      <MyBackTop />
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;