import './App.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import ScrollToElement from './component/common/ScrollTo/ScrollTo';
import Header from './component/Header/Header';
import AboutLaser from './component/Content/AboutLaser/AboutLaser';
import Contacts from './component/Content/Contacts/Contacts';
import Basement from './component/Basement/Basement';
import ExamplesWorks from './component/Content/ExamplesWorks/ExamplesWorks';
import CoverImage from './component/Content/CoverImage/CoverImage';

function App() {

  const { pathname } = useLocation; //получаем url страницы

  useEffect(() => {
    ScrollToElement(); //при изменении url скролим к якорю с определенной скоростью
  }, [pathname])

  return (
    <div className="App">
      <Header />
        <CoverImage />
        <div className="Element" id='aboutLaser' >
          <AboutLaser />
        </div>
        <div className="Element" id='examples'>
          <ExamplesWorks  />
        </div>
        <div className="Element" id='contacts'>
          <Contacts  />
        </div>
      <Basement />
    </div>
  );
}

export default App;
