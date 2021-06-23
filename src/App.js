import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SingIn from './components/SingIn';
import Home from './pages';




function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  const handleToggleMenu = () => {
    setMenuToggle(!menuToggle);
    console.log(menuToggle);
  };

  const handleClose = () => {
    if (window.innerWidth >= 760) {
      setMenuToggle(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleClose);
    return () => {
      window.removeEventListener("resize", handleClose);
    };
  }, []);
  const [showModal, setShowModal] = useState(false);
  const handleModal = () =>{
    setShowModal(prev=> !prev);
  }

 
  return (
    <>
    <Router>
      <Sidebar menuToggle={menuToggle} handleToggleMenu={handleToggleMenu} handleModal={handleModal} />
      <Navbar handleToggleMenu={handleToggleMenu} menuToggle={menuToggle} handleModal={handleModal} />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
      {showModal ?  <SingIn setShowModal={setShowModal} showModal={showModal} /> : null}
    </Router>
    </>
  );
}

export default App;
