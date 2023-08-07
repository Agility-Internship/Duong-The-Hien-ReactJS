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
    <section className="container min-h-screen flex justify-center items-center">
      <div className="box bg-white rounded-2xl shadow-2xl p-10 m-2 w-96 grid grid-cols-1 lg:grid-cols-2 grid-rows-auto md:w-3/4 md:grid-rows-auto items-center">
        {/* Images list */}
        <div className="grid grid-cols-3 grid-rows-auto gap-3 mr-5">
          {/* Displaying multiple images */}
          <div className="border rounded-2xl active col-span-3">
            <CardImage src={product.image} alt="This is a picture of the product" />
          </div>
          {/* Additional images */}
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
              {/* Displaying product name and favorite button */}
              <Typography level={3} className="text-4xl" size="xl">
                {product.name}
              </Typography>
              <div className="flex justify-between">
                {/* Displaying installment info (if available) */}
                {products.installment && (
                  <div className="absolute top-2 left-2">
                    <Typography color="black" size="xl" variant="solid">
                      {product.installment}
                    </Typography>
                  </div>
                )}
                {/* Displaying the favorite button */}
                <FavoriteButton isFavorite={isFavoriteProduct} />
              </div>
            </div>
            {/* Displaying product version and resolution */}
            <div className="card-compare flex gap-2">
              <Typography color="black" size="md" variant="solid">
                {product.version}
              </Typography>
              <Typography color="black" size="md" variant="solid">
                {product.resolution}
              </Typography>
            </div>
            {/* Displaying product price */}
            <Typography size="xl" color="red" variant="plain">
              {product.price}
              &#8363;
            </Typography>
            {/* Displaying product description */}
            <Typography className="leading-6" color="gray-300" size="md" variant="plain">
              {product.description}
            </Typography>
            {/* Buy button */}
            <Link
              href="/products-card-details"
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
    </section>
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
