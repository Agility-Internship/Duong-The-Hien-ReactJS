import React from 'react';

// Components
import Navbar from './Components/Section/Navbar';
import Header from './Components/Section/Header';
import ListCard from './Components/Section/ProductList';
import CtaSection from './Components/Section/CTA';
import Footer from './Components/Section/Footer';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <ListCard />
    <CtaSection />
    <Footer />
  </div>
);

export default App;
