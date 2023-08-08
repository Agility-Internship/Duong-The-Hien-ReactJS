import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import { CardImage } from './common/Card';
import Link from './common/Link';
import Typography from './common/Typography';
import FavoriteButton from './common/Button/ButtonFavorite';
import Popover from './common/Popover';

/**
 * Product Details components.
 *
 *  A reusable component that displays product information in a details.
 *
 * @param product - The product product object.
 * @param isFavoriteProduct - Boolean value indicating if the product is in favorites list.
 * @param onClose - Callback function to close the product details.
 * @returns {JSX.Element} Product Details content.
 */
const ProductDetails = ({ product = [], isFavoriteProduct = false, onClose = () => {} }) => {
  const selectedProduct = product;

  const imageUrls = Object.values(selectedProduct.images);

  const [isPopoverOpen, setIsPopoverOpen] = useState(true);

  const handleButtonClick = () => {
    setIsPopoverOpen((prevState) => {
      onClose();
      return !prevState;
    });
  };
  return (
    <section
      className={`fixed inset-0 bg-opacity-70 backdrop-filter backdrop-blur-lg flex items-center justify-center z-50 ${
        isPopoverOpen ? 'bg-gray-800' : 'hidden'
      }`}
    >
      <div className="container min-h-screen w-[40%] h-[30%] flex justify-center items-center">
        <Popover
          closeButtonoo
          isOpen={isPopoverOpen}
          onClose={handleButtonClick}
          popoverClassName="relative bg-white rounded-2xl max-h-[700x] overflow-x-auto shadow-2xl p-10 m-2 "
          arrowPopover={false}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-none items-center">
            <div className="grid grid-cols-3 grid-rows-auto gap-3 mr-5">
              {imageUrls.map((imageUrl, index) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className={`border rounded-2xl ${index === 0 ? 'active col-span-3' : ''}`}
                >
                  <CardImage src={imageUrl} alt={`Product Image ${index + 1}`} />
                </div>
              ))}
            </div>
            <div>
              <div className="basic-info flex flex-col gap-4 relative">
                <div className="flex justify-between">
                  <Typography level={3} className="text-4xl" size="xl">
                    {selectedProduct.name}
                  </Typography>
                  <FavoriteButton isFavorite={isFavoriteProduct} />
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
                <Typography size="xl" color="red" variant="plain">
                  {selectedProduct.price}
                  &#8363;
                </Typography>
                <Typography className="leading-6" color="gray-300" size="md" variant="plain">
                  {selectedProduct.description}
                </Typography>
                <Link
                  href="/shopping-cart"
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
  isFavoriteProduct: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default ProductDetails;
