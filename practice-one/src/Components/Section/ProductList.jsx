import React from 'react';
import dataCard from '../../../database/productCard.json';

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
      <section className="service mt-32">
        <div className="container flex justify-between mx-auto gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              headerText={service.headerText}
              title={service.title}
              date={service.date}
              author={service.author}
            />
          ))}
          <div className="service-right w-3/5">
            <img
              className="w-full"
              src={services[0].imgSrc.replace(/\\/g, '/')}
              alt="Service right img"
            />
          </div>
        </div>
      </section>

      <section className="product mt-32">
        <div className="container mx-auto flex justify-between gap-y-44 flex-wrap">
          {products.map((product) => (
            <div key={product.id} className="product-card w-[32%]">
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
          <div className="marketing-content gap-4 justify-between flex">
            <div className="content-left w-1/2">
              <ProductCard
                imgSrc={marketing.imgSrc}
                headerText={marketing.headerText}
                title={marketing.title}
                date={marketing.date}
                author={marketing.author}
              />
            </div>
            <div className="content-right flex flex-col justify-between pt-7 gap-16 w-1/2">
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
        <div className="container mx-auto flex justify-between gap-y-44 flex-wrap">
          {blogArticles.map((blogArticle) => (
            <div key={blogArticle.id} className="product-card w-[32%]">
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
