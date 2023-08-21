import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import { CardImage } from './common/Card';
import Button from './common/Button';
import Typography from './common/Typography';
import FavoriteButton from './ButtonFavorite/ButtonFavorite';
import Popover from './common/Popover';

/**
 * Product Details components.
 *
 * A reusable component that displays product information in a details.
 *
 * @param product - The product product object.
 * @param favoriteProductIDs - An array of product IDs marked as favorites.
 * @param onToggleProductFavorite - Function to handle toggling a product as favorite
 * @param onClosePopover - Callback function to close the product details.
 * @param onAddToCart - Function to handle adding a product to the cart
 * @returns {JSX.Element} Product Details content.
 */
const ProductDetails = ({
  product = {},
  favoriteProductIDs = [],
  onToggleProductFavorite = () => {},
  onClosePopover = () => {},
  onAddToCart = () => {},
}) => {
  const selectedProduct = product;

  const imageUrls = Object.values(selectedProduct.images);

  const [isPopoverOpen, setIsPopoverOpen] = useState(true);

  const handleButtonClick = () => {
    setIsPopoverOpen((prevState) => {
      onClosePopover();
      return !prevState;
    });
  };

  const handleFavoriteToggle = () => {
    onToggleProductFavorite(product.id);
  };

  const handleAddToCart = () => {
    onAddToCart(product.id);
  };

  return (
    <section className="fixed inset-0 bg-opacity-70 backdrop-filter backdrop-blur-lg flex items-center justify-center z-50">
      <div className="container min-h-screen lg:w-[70%] md:w-[50%] flex justify-center items-center">
        <Popover
          closeButton
          isOpen={isPopoverOpen}
          onClosePopover={handleButtonClick}
          isFixed
          popoverClassName="relative bg-white rounded-2xl max-h-auto max-w-[800px] max-h-[90vh] overflow-y-auto shadow-2xl p-10 m-2 "
          arrowPopover={false}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-none items-center pt-5">
            <div className="grid grid-cols-3 grid-rows-auto gap-3 mr-5 ">
              {imageUrls.map((imageUrl, index) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className={`border rounded-2xl ${index === 0 ? 'active col-span-3' : ''}`}
                >
                  <CardImage src={imageUrl} alt={`Color ${index + 1} styles for phones `} />
                </div>
              ))}
            </div>
            <div>
              <div className="basic-info flex flex-col gap-4 relative mt-5 ">
                <div className="flex justify-between items-center hover:text-blue-700 lg:w-[90%] ">
                  <Typography level={3} size="xxl" variant="plain">
                    {selectedProduct.name}
                  </Typography>
                  <FavoriteButton
                    isFavorite={favoriteProductIDs.includes(product.id)}
                    onClick={handleFavoriteToggle}
                  />
                </div>
                <div className="inline-block">
                  {selectedProduct.installment && (
                    <Typography color="black" size="md" variant="solid">
                      {selectedProduct.installment}
                    </Typography>
                  )}
                </div>
                <div className="card-compare flex gap-2">
                  <Typography color="black" size="md" variant="solid">
                    {selectedProduct.version}
                  </Typography>
                  <Typography color="black" size="md" variant="solid">
                    {selectedProduct.resolution}
                  </Typography>
                </div>
                <Typography size="xl" color="text-primary" variant="plain">
                  {selectedProduct.price}
                  &#8363;
                </Typography>
                <Typography className="leading-6" color="gray-300" size="md" variant="plain">
                  {selectedProduct.description}
                </Typography>
                <div className="flex flex-col lg:flex-row gap-5">
                  <Button
                    variant="custom"
                    customClass="bg-secondary hover:bg-blue-800 focus:bg-blue-800"
                  >
                    Buy It Now
                  </Button>
                  <Button
                    variant="custom"
                    customClass="bg-gray-400 hover:bg-gray-600 focus:bg-gray-600"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Popover>
      </div>
    </section>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.shape({
    installment: PropTypes.string,
    id: PropTypes.string.isRequired,
    images: PropTypes.objectOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    version: PropTypes.string,
    resolution: PropTypes.string,
    price: PropTypes.string.isRequired,
  }).isRequired,
  favoriteProductIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClosePopover: PropTypes.func,
  onToggleProductFavorite: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
