import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import AboutUs from './components/AboutUs'
import News from "./components/News"
import Partners from "./components/Partners"
import Support from "./components/support"
import Fotter from "./components/fotter"
import MainRout from "./components/routs"
import MainHead from "./components/mainhead"
import AllNews from "./components/AllNews"
import Donate from "./components/donate"
import MorePartners from "./components/morePartners"
import NewsSlider from "./components/TrySlider"
import ShowMore from "./components/show-more"

function App() {
  return (
    <div className="App">
      <Router>
        <MainHead></MainHead>
      <Routes>
      <Route path="/" element={<MainRout/>} />
      <Route path="/AboutUs" element={<MainRout/>} />
        <Route path="/AllNews" element={<AllNews/>} />
        <Route path="/Donate" element={<Donate/>} />
        <Route path="/MorePartners" element={<MorePartners/>} />
      </Routes>
      <Fotter></Fotter>
      </Router>
    </div>
  );
}
/*
<Partners></Partners>
<Support></Support>
*/
export default App;
