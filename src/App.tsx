import React from 'react';
import './App.css';
import Header from './app/components/Header';
import SpaceDetails from './app/components/SpaceDetails';
import Banner from './app/components/Banner';
import Services from './app/components/Services';
import FooterAppDownload from './app/components/FooterAppDownload';
import Footer from './app/components/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <Banner />
     <Services />
     <SpaceDetails />
     <FooterAppDownload />
     <Footer />
    </div>
  );
}

export default App;
