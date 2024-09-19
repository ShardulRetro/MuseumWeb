import React, { useState, useEffect } from 'react';
import './App.css';
import Menubar from './MenuBar.js';
import Footer from './Footer.js';
import artifact1 from './assets/artifact1.jpg';
import artifact2 from './assets/artifact2.jpg';
import artifact3 from './assets/artifact3.jpg';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import TableauEmbed from "./TableauEmbed";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import NewPage from './NewPage.js';
import BotpressChat from './BotPressChat.js';
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Get navigate function from useNavigate hook
  const navigate = useNavigate();

  // Define the function that redirects to the new page
  const goToNewPage = () => {
    navigate('/newpage');  // Redirect to the new page
  };

  useEffect(() => {
    const scrollItems = document.querySelectorAll('.scroll-item');

    function updateScrollItems() {
      scrollItems.forEach((item, index) => {
        item.classList.remove('prev', 'next', 'active');

        if (index === currentIndex) {
          item.classList.add('active');
        } else if (index === (currentIndex - 1 + scrollItems.length) % scrollItems.length) {
          item.classList.add('prev');
        } else if (index === (currentIndex + 1) % scrollItems.length) {
          item.classList.add('next');
        }
      });
    }

    function nextImage() {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % document.querySelectorAll('.scroll-item').length);
    }

    updateScrollItems();
    const interval = setInterval(nextImage, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <Menubar />
      <div className="Content">
        
        <div className="video-container">
          <video autoPlay muted controls>
            <source src={require('./assets/museumvideo.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content-overlay">
            <h1>Welcome to CSMVS</h1>
          </div>
        </div>

        

        {/* Horizontal Scroll Menu for Museum Artifacts */}
        <div className="scroll-container">
          <img src={artifact1} alt="Artifact 1" className="scroll-item" />
          <img src={artifact2} alt="Artifact 2" className="scroll-item" />
          <img src={artifact3} alt="Artifact 3" className="scroll-item" />
        </div>
      </div>
      <BotpressChat/>
      <Footer />
    </div>
  );
}

// MainPage component to render the main content
const MainPage = () => <div>Main Page</div>;

// Main App with routing
const MainApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/newpage" element={<NewPage />} />
      </Routes>
    </Router>
  );
};

export default MainApp;
