import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import About from './pages/About';
import Policy from './pages/Policy';
import WhyWorkOurService from "./pages/WhyWorkOurService";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/why" element={<WhyWorkOurService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;