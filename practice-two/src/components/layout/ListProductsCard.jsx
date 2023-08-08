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
 * @param favoriteProductIDs - An array of product IDs marked as favorites.
 * @param onToggleProductFavorite - Function to handle the selection/unselection of a favorite product.
 * @param onSelectProduct - Function to handle the selection of a product.
 * @returns {JSX.Element} The ProductList Component.
 */
const ProductList = ({
  products = [],
  favoriteProductIDs = [],
  onToggleProductFavorite = () => {},
  onSelectProduct = () => {},
}) => {
  // Function to handle the click event when a favorite product is selected
  const handleFavoriteSelect = (productId) => {
    onToggleProductFavorite(productId);
  };

  // Function to handle the click event when a product card is selected
  const handleSelectProduct = (productID) => {
    onSelectProduct(productID);
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
          const isFavoriteProduct = !!favoriteProductIDs.includes(product.id);
          return (
            <div
              key={product.id}
              className="overflow-hidden flex items-center p-2 pt-4 pb-5 border-r border-b relative"
            >
              <ProductCard
                product={product}
                isFavoriteProduct={isFavoriteProduct}
                onSelectFavorite={handleFavoriteSelect}
                onSelectProduct={handleSelectProduct}
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
      images: PropTypes.objectOf(PropTypes.string).isRequired,
      name: PropTypes.string.isRequired,
      version: PropTypes.string.isRequired,
      resolution: PropTypes.string.isRequired,
      price: PropTypes.string,
    }),
  ).isRequired,
  favoriteProductIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggleProductFavorite: PropTypes.func.isRequired,
  onSelectProduct: PropTypes.func.isRequired,
};

export default ProductList;
