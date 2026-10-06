import React, { useState } from "react";
import "./App.css";

function App() {
  const [showLanding, setShowLanding] = useState(true);

  const handleGetStarted = () => {
    setShowLanding(false);
  };

  return (
    <div className="App">
      {showLanding ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <p className="landing-description">
              Every plant we grow is nurtured with love, care, and
              sustainable practices. Bring home a little piece of paradise
              and let nature breathe life into your space.
            </p>
            <button className="get-started-button" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <div className="product-page">
          {/* Product listing, navbar, and cart components render here
              once the user clicks "Get Started". */}
          <h2>Welcome to the Paradise Nursery shop!</h2>
        </div>
      )}
    </div>
  );
}

export default App;
