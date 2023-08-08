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
  /**
   * Handle the click event when a favorite product is selected
   * @param productId - ID of the product to toggle favorite status
   */
  const handleFavoriteSelect = (productId) => {
    onToggleProductFavorite(productId);
  };

  /**
   * Handle the click event when a product card is selected
   * @param productID - ID of the product selected
   */
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
      <ul className="grid grid-cols-5 -z-30 gap-2 ">
        {products.map((product) => (
          <li
            key={product.id}
            className="overflow-hidden flex items-center p-2 pt-4 pb-5 border rounded-xl relative"
          >
            <ProductCard
              product={product}
              favoriteProductIDs={favoriteProductIDs}
              onSelectFavorite={handleFavoriteSelect}
              onSelectProduct={handleSelectProduct}
            />
          </li>
        ))}
      </ul>
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
