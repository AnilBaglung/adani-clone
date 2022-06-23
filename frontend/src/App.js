import './App.css';
import Home from './Components/Home/Home'
import Aboutus from './Components/About/Aboutus'
import Management from './Components/About/Management/Management'
import Message from './Components/About/Message/Message'
import Timeline from './Components/About/Timeline/Timeline'
import Business from './Components/Business/Business'
import Agro from './Components/Business/agro/Agro'
import Airport from './Components/Business/Airport/Airport'
import Data from './Components/Business/Data/Data'
import Defence from './Components/Business/Defence/Defence'
import Mining from './Components/Business/Mining/Mining'
import Oilfood from './Components/Business/Oilfood/Oilfood'
import Resourse from './Components/Business/Resourse/Resource'
import Road from './Components/Business/Road/Road'
import Solar from './Components/Business/Solar/Solar'
import Water from './Components/Business/Water/Water'
import Contact from './Components/Contact/Contact'
import Sustainability from './Components/Sustainability/Sustainability'
import Communities from './Components/Sustainability/Community/Communities'
import Environment from './Components/Sustainability/Environment/Environment'
import Safety from './Components/Sustainability/Safety/Safety'
import Watermang from './Components/Sustainability/Water/Watermang'
import Investor from './Components/Investor/Investor'
import Board from './Components/Investor/Board/Board'
import Commite from './Components/Investor/committe/Commite'
import Downloads from './Components/Investor/Downloads/Downloads'
import Faq from './Components/Investor/Faq/Faq'
import Managementpersonal from './Components/Investor/Management/Managementpersonal'
import Library from './Components/NewsroomCareer/Library';
import Newsroom from './Components/NewsroomCareer/Newsroom';

import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<Aboutus/>}/>
      <Route path='/about/board' element={<Management/>}/>
      <Route path='/about/chairman-message' element={<Message/>}/>
      <Route path='/about/timeline' element={<Timeline/>}/>
      <Route path='/businesses' element={<Business/>}/>
      <Route path='/businesses/agro' element={<Agro/>}/>
      <Route path='/businesses/airport' element={<Airport/>}/>
      <Route path='/businesses/data' element={<Data/>}/>
      <Route path='/businesses/defence' element={<Defence/>}/>
      <Route path='/businesses/mining' element={<Mining/>}/>
      <Route path='/businesses/oilfood' element={<Oilfood/>}/>
      <Route path='/businesses/resource' element={<Resourse/>}/>
      <Route path='/businesses/road' element={<Road/>}/>
      <Route path='/businesses/solar' element={<Solar/>}/>
      <Route path='/businesses/water' element={<Water/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/sustainability' element={<Sustainability/>}/>
      <Route path='/sustainability/communities' element={<Communities/>}/>
      <Route path='/sustainability/safety' element={<Safety/>}/>
      <Route path='/sustainability/environment' element={<Environment/>}/>
      <Route path='/sustainability/water-management' element={<Watermang/>}/>
      <Route path='/investors' element={<Investor/>}/>
      <Route path='/investors/board' element={<Board/>}/>
      <Route path='/investors/committe' element={<Commite/>}/>
      <Route path='/investors/faq' element={<Faq/>}/>
      <Route path='/investors/downloads' element={<Downloads/>}/>
      <Route path='/investors/management-personal' element={<Managementpersonal/>}/>
      <Route path='/newsroom' element={<Newsroom/>}/>
      <Route path='/newsroom/media-library' element={<Library/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
