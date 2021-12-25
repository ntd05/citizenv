import TopBar from "./topBar/TopBar";
import SideBar from "./sideBar/sideBar";
import AccessMana from "./Content/AccessMana/AccessMana";
import InputData from "./Content/InputData/InputData";
import News from "./Content/News/News";
import ListData from "./Content/ListData/ListData";
import Contact from "./Page/Contact/Contact"
import Help from "./Page/Help/Help"
import Introduce from "./Page/Introduce/Introduce"
import NewEst from "./Page/newest/NewEst"
import LookUp from "./Content/LookUp/LookUp";
import Home from "./Page/Home/Home"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Menu from "./topBar/Menu";
import Login from "./Login/Login";



function App() {
  return (
    <div className="App">
        <TopBar/>
        <Menu/>
        <Routes>
          <Route exact path='/Home/*' element={<Home/>}/>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/' element={<SideBar/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route exact path='/Ne/*' element={<NewEst/>}/>
        </Routes>  
    </div>
  );
}

export default App;
