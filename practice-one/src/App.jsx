import React from 'react';

// Components
import Navbar from './Components/Section/Navbar';
import Header from './Components/Section/Header';
import ListCard from './Components/Section/ProductList';
import CtaSection from './Components/Section/CTA';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <ListCard />
    <CtaSection />
  </div>
);

export default App;
