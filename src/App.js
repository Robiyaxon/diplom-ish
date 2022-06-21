import './App.css';
import { Footer } from './component/footer/Footer';
import { MainTopHeader } from './component/topheader/MainTopHeader';
import  { MyBackTop } from './ScrollerOn';
function App() {
  return (
    <div className="App">
      <MainTopHeader />
      <Footer/>
      <MyBackTop />
    </div>
  );
}
export default App;