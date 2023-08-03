import React from 'react';
import PropTypes from 'prop-types';

// Components
import ProductCard from '../ProductCard';
import Typography from '../common/Typography';

/**
 * ProductList Component
 *
 * A component that renders a list of products using a grid layout.
 *
 * @param products - An array of product objects to be displayed.
 * @param favorites - An array of product IDs marked as favorites.
 * @param handleFavoriteToggle - Function to handle the selection/unselection of a favorite product.
 * @returns {JSX.Element} The ProductList Component.
 */
const ProductList = ({ products, handleFavoriteToggle, favorites }) => {
  // Function to handle the click event when a favorite product is selected
  const handleFavoriteSelect = (productId) => {
    handleFavoriteToggle(productId);
  };
  return (
    <div className="mt-8">
      {/* Total Products */}
      <div className="mb-3">
        <Typography size="xl">
          {`${products.length} ${products.length <= 1 ? 'phone' : 'phones'}`}
        </Typography>
      </div>
      {/* List Products */}
      <div className="grid grid-cols-5 border -z-30">
        {products.map((product) => {
          // Check if product.id exists in favorites array
          const isFavoriteProduct = !!favorites.includes(product.id);
          return (
            <div
              key={product.id}
              className="overflow-hidden flex items-center p-2 pt-4 pb-5 border-r border-b relative"
            >
              <ProductCard
                product={product}
                isFavoriteProduct={isFavoriteProduct}
                onSelectFavorite={handleFavoriteSelect}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string),
      name: PropTypes.string.isRequired,
      version: PropTypes.string.isRequired,
      resolution: PropTypes.string.isRequired,
      price: PropTypes.string,
    }),
  ).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFavoriteToggle: PropTypes.func.isRequired,
};

export default ProductList;
