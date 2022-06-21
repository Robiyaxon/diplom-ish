import "./App.css";
import { Footer } from "./component/footer/Footer";
import { MainTopHeader } from "./component/topheader/MainTopHeader";
import Registration from "./component/registration/Registration";
import { Routes, Route } from "react-router-dom";
import Login from './component/login/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="signUp" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route
          path="/*"
          element={
            <>
              <MainTopHeader />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
