import React from 'react';
import ProductCard from './Components/Common/productCard';
import ServiceCard from './Components/Common/serviceCard';
import HorizontalCard from './Components/Common/horizontalCard';
import Link from './Components/Common/Links';

const App = () => (
  <div>
    <div className="flex gap-1">
      <ProductCard
        headerText="News"
        imgSrc="src\assets\products_1.svg"
        title="How To Deliver a Successful Product Launch"
        author="Joshua Nash"
        date="29 Jun 2022"
      />
      <ProductCard
        headerText="sales"
        imgSrc="src\assets\products_1.svg"
        title="How To Deliver a Successful Product Launch"
        author="Joshua Nash"
        date="29 Jun 2022"
      />
      <ProductCard
        headerText="News"
        imgSrc="src\assets\products_1.svg"
        title="How To Deliver a Successful Product Launch"
        author="Joshua Nash"
        date="29 Jun 2022"
      />
    </div>
    <div className="w-1/2">
      <ProductCard
        headerText="News"
        imgSrc="src\assets\products_1.svg"
        title="Email marketing best practices: 10 experts share their email tips"
        author="Joshua Nash"
        date="29 Jun 2022"
      />
    </div>
    <div className="w-1/2">
      <ServiceCard
        headerText="Service"
        title="CRM Insights: Selecting the Right One for Your Organization"
        author=" by Joshua Nash"
        date="05 Sep 2022"
      />
    </div>
    <div className="flex w-1/2">
      <HorizontalCard
        title="Access Yoora’s leads features on your mobile"
        date="11 Aug 2022"
        author="Joshua Nash"
        headerText="products"
      />
    </div>
    <div>
      <Link
        href="/"
      >
        isInternal
      </Link>
      <Link
        href="/"
      >
        isInternal
      </Link>
    </div>
  </div>
);

export default App;
