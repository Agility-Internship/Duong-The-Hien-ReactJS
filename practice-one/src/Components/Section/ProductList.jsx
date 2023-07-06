import React from 'react';

// Components
import ServiceCard from '../Common/serviceCard';
import ProductCard from '../Common/productCard';
import HorizontalCard from '../Common/horizontalCard';

const ListCard = () => (
  <main>
    <section className="service mt-32">
      <div className="container flex justify-between mx-auto gap-4">
        <ServiceCard
          headerText="service"
          title="CRM insights: Selecting the Right One for Your Organization"
          date="05 Sep 2022"
          author="by Joshua Nash"
        />
        <div className="service-right w-3/5">
          <img className="w-full" src="src\assets\service__img.png" />
        </div>
      </div>
    </section>

    <section className="product mt-32">
      <div className="container mx-auto flex justify-between gap-y-44 flex-wrap">
        <div className="product-card w-[32%]">
          <ProductCard
            imgSrc="src\assets\product__item1.png"
            headerText="New"
            title="How To Deliver a Successful Product Launch"
            date="29 Jun 2022"
            author="by joshua Nash"
          />
        </div>
        <div className="product-card w-[32%]">
          <ProductCard
            imgSrc="src\assets\product__item2.png"
            headerText="Sales"
            title="The best cities for sales careers in 2022"
            date="20 Mar 2022"
            author="by Bill Holloway"
          />
        </div>
        <div className="product-card w-[32%]">
          <ProductCard
            imgSrc="src\assets\product__item3.png"
            headerText="Sales"
            title="How to use 360 feedback to improve sales performance"
            date="07 Jun 2022"
            author="by Stephen Henderson"
          />
        </div>
        <div className="product-card w-[32%]">
          <ProductCard
            imgSrc="src\assets\product__item4.png"
            headerText="Sales"
            title="The Challenger Sale model: How to lead the conversation"
            date="09 Jan 2022"
            author="by joshua Nash"
          />
        </div>
        <div className="product-card w-[32%]">
          <ProductCard
            imgSrc="src\assets\product__item5.png"
            headerText="Product"
            title="3 ways To automate your lead generation process with Yoora"
            date="08 Jul 2022"
            author="by Leroy Figueroa"
          />
        </div>
        <div className="product-card w-[32%]">
          <ProductCard
            imgSrc="src\assets\product__item6.png"
            headerText="Product"
            title="Marketplace Monthly Apps Spotlight: Aug 2022"
            date="05 Aug 2022"
            author="by joshua Nash"
          />
        </div>
      </div>
    </section>

    <section className="marketing mt-32">
      <div className="container mx-auto">
        <div className="marketing-content gap-4 justify-between flex">
          <div className="content-left w-1/2">
            <ProductCard
              imgSrc="src\assets\marketing__img.png"
              headerText="marketing"
              title="Email marketing best practices: 10 experts share their email tips"
              date="23 Nov 2022"
              author="by joshua Nash"
            />
          </div>
          <div className="content-right flex flex-col justify-between pt-7 gap-16 w-1/2">
            <div className="horizontal-card">
              <HorizontalCard
                headerText="products"
                title="Access Yoora’s leads features on your mobile"
                date="11 Aug 2022"
                author="by joshua Nash"
              />
            </div>
            <div className="horizontal-card">
              <HorizontalCard
                headerText="sales"
                title="Sales presentations: templates, examples and ideas on how to present like a pro"
                date="11 Oct 2022"
                author="by Laura Ryan"
              />
            </div>
            <div className="horizontal-card">
              <HorizontalCard
                headerText="news"
                title="How To Deliver a Successful Product Launch"
                date="30 Jan 2022,"
                author="by Alice Washington"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="BlogArticle mt-32">
      <div className="container mx-auto flex justify-between gap-y-44 flex-wrap">
        <div className="product-card w-[32%]">
          <ProductCard
            imgSrc="src\assets\article__img1.png"
            headerText="service"
            title="Sales Funnels: Definition, Process, Stages and Examples"
            date="29 Jun 2022"
            author="by joshua Nash"
          />
        </div>
        <div className="product-card w-[32%]">
          <ProductCard
            imgSrc="src\assets\article__img2.png"
            headerText="sales"
            title="What is a sales Yoora and how do you build one?"
            date="29 Mar 2022"
            author="by Amanda Brooks"
          />
        </div>
        <div className="product-card w-[32%]">
          <ProductCard
            imgSrc="src\assets\article__img3.png"
            headerText="service"
            title="10 real estate cold calling scripts to increase lead generation"
            date="27 Dec 2022"
            author="by Roxie Sandoval"
          />
        </div>
      </div>
    </section>
  </main>
);

export default ListCard;
