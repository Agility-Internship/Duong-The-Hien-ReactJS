import React from 'react';

// Import Card data from the database
import dataCard from '../../database/productCard';

// Components
import ServiceCard from '../Common/serviceCard';
import ProductCard from '../Common/productCard';
import HorizontalCard from '../Common/horizontalCard';

const ListCard = () => {
  const {
    services, products, marketing, horizontalCards, blogArticles,
  } = dataCard;

  return (
    <main>
      <section className="service mt-20 lg:mt-32">
        <div className="container flex flex-col lg:flex-row justify-between mx-auto gap-5">
          <div className="lg:w-1/2 flex flex-col">
            <div className="w-full h-full">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  headerText={service.headerText}
                  title={service.title}
                  date={service.date}
                  author={service.author}
                />
              ))}
            </div>
          </div>
          <div className="service-right lg:w-1/2 ">
            <img
              className="w-full lg:h-full object-cover"
              src={services[0].imgSrc.replace(/\\/g, '/')}
              alt="Service right img"
            />
          </div>
        </div>
      </section>

      <section className="product mt-32">
        <div className="container mx-auto grid sm:gap-y-20 lg:gap-y-44 sm:grid-cols-2 lg:grid-cols-3 gap-20 sm:gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <ProductCard
                imgSrc={product.imgSrc}
                headerText={product.headerText}
                title={product.title}
                date={product.date}
                author={product.author}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="marketing mt-32">
        <div className="container mx-auto">
          <div className="marketing-content gap-4 justify-between flex flex-col lg:flex-row">
            <div className="content-left lg:w-1/2">
              <ProductCard
                imgSrc={marketing.imgSrc}
                headerText={marketing.headerText}
                title={marketing.title}
                date={marketing.date}
                author={marketing.author}
              />
            </div>
            <div className="content-right flex flex-col justify-between pt-7 gap-16 lg:w-1/2">
              {horizontalCards.map((horizontalCard) => (
                <div key={horizontalCard.id} className="horizontal-card">
                  <HorizontalCard
                    headerText={horizontalCard.headerText}
                    title={horizontalCard.title}
                    date={horizontalCard.date}
                    author={horizontalCard.author}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="BlogArticle mt-32">
        <div className="container mx-auto grid sm:gap-y-20 lg:gap-y-44 sm:grid-cols-2 lg:grid-cols-3 gap-20 sm:gap-6">
          {blogArticles.map((blogArticle) => (
            <div key={blogArticle.id} className="product-card">
              <ProductCard
                imgSrc={blogArticle.imgSrc}
                headerText={blogArticle.headerText}
                title={blogArticle.title}
                date={blogArticle.date}
                author={blogArticle.author}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ListCard;
