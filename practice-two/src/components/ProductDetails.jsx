import React from 'react';
import PropTypes from 'prop-types';

// Components
import { CardImage } from './common/Card';
import Link from './common/Link';
import Typography from './common/Typography';
import FavoriteButton from './common/Button/ButtonFavorite';

/**
 * Product Details components.
 *
 *  A reusable component that displays product information in a details.
 *
 * @param product - The product product object.
 * @param isFavoriteProduct - Boolean value indicating if the product is in favorites list.
 * @returns {JSX.Element} Product Details content.
 */
const ProductDetails = (products = [], isFavoriteProduct = []) => {
  const product = products.products;
  return (
    <div className="container min-h-screen flex justify-center items-center">
      <div className="box bg-white rounded-2xl shadow-2xl p-10 m-2 w-96 grid grid-cols-1 lg:grid-cols-2 grid-rows-auto md:w-3/4 md:grid-rows-auto items-center">
        {/* Images list */}
        <div className="grid grid-cols-3 grid-rows-auto gap-3 mr-5">
          <div className="border rounded-2xl active col-span-3">
            <CardImage src={product.image} alt="This is a picture of the product" />
          </div>
          <div className="border rounded-2xl">
            <CardImage src={product.image} alt="This is a picture of the product" />
          </div>
          <div className="border rounded-2xl">
            <CardImage src={product.image} alt="This is a picture of the product" />
          </div>
          <div className="border rounded-2xl">
            <CardImage src={product.image} alt="This is a picture of the product" />
          </div>
        </div>
        <div>
          <div className="basic-info flex flex-col gap-4 relative">
            <div className="flex justify-between">
              <Typography level={3} className="text-4xl" size="xl">
                {product.name}
              </Typography>
              <div className="flex justify-between">
                {products.installment && (
                  <div className="absolute top-2 left-2">
                    <Typography color="black" size="xl" variant="solid">
                      {product.installment}
                    </Typography>
                  </div>
                )}
                <FavoriteButton isFavorite={isFavoriteProduct} />
              </div>
            </div>
            <div className="card-compare flex gap-2">
              <Typography color="black" size="md" variant="solid">
                {product.version}
              </Typography>
              <Typography color="black" size="md" variant="solid">
                {product.resolution}
              </Typography>
            </div>
            <Typography size="xl" color="red" variant="plain">
              {product.price}
              &#8363;
            </Typography>
            <Typography className="leading-6" color="gray-300" size="md" variant="plain">
              {/* {product.description} */}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, dolore. Illum, architecto
              voluptas ipsam sapiente necessitatibus, nobis id perferendis totam expedita asperiores
              labore saepe! Corrupti quibusdam eligendi placeat nemo molestias vel maiores velit labore?
              Facilis recusandae cupiditate esse quia possimus, doloribus voluptate earum voluptatum
              ipsam, quos
            </Typography>
            <Link
              href="/products-card-ddetails"
              variant="bg-secondary py-2 px-4 rounded font-semibold text-sm"
              disabled
              color="white"
              underline={false}
              size="xl"
            >
              Buy It Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  products: PropTypes.shape({
    installment: PropTypes.string,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    version: PropTypes.string,
    resolution: PropTypes.string,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductDetails;
