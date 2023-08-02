import React, { useState, useRef } from 'react';

// Components
import Button from '../common/Button/Button';
import Popover from '../common/Popover';
import { Card, CardOverflow, CardImage, CardContent } from '../common/Card';
import Typography from '../common/Typography';
import Link from '../common/Link';
import FavoriteButton from '../common/Button/ButtonFavorite';

// Hook
import useClickOutside from '../../hook/useClickOutside';

/**
 * FavoriteProductsCard Component
 *
 * A popover component for displaying favorite products.
 * When the button is clicked, a popover with a list of favorite products is displayed.
 * The popover automatically closes when clicking outside of it.
 *
 * @param {Object} props - The props object
 * @param {Array} props.favoriteProductIds - An array of favorite product IDs
 * @param {Array} props.products - An array of all products
 * @returns {JSX.Element} The FavoriteProductsCard Component
 */
const FavoriteProductsCard = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  useClickOutside(popoverRef, () => setIsPopoverOpen(false));

  const handleButtonClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className="" ref={popoverRef}>
      <Button onClick={handleButtonClick}>Favorite Products</Button>
      {isPopoverOpen && (
        <div className="fixed inset-0 bg-opacity-70 backdrop-filter backdrop-blur-sm flex items-center justify-center z-50">
          <Popover
            closeButton
            isOpen={isPopoverOpen}
            onClose={handleButtonClick}
            popoverClassName="relative bg-white p-8 rounded border border-gray-300 max-h-100 overflow-y-auto"
            arrowPopover={false}
            transitionDuration={300}
          >
            <div className="mb-4">
              <h2 className="text-2xl text-center pb-4">My Favorite List</h2>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardOverflow>
                    <div className="card-label flex">
                      <Typography color="black" size="xl" variant="solid">
                        0% installment
                      </Typography>

                      <FavoriteButton />
                    </div>
                    <CardImage
                      src="https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg"
                      alt="This is a picture of the card-image"
                    />
                    <CardContent>
                      <div className="hover:text-blue-700">
                        <Link href="/product-card" underline={false} size="xl" variant="custom-variant">
                          Samsung Galaxy A24
                        </Link>
                      </div>
                      <div className="card-compare flex gap-2">
                        <Typography color="black" size="md" variant="solid">
                          6.5
                        </Typography>
                        <Typography color="black" size="md" variant="solid">
                          Super Retina XDR
                        </Typography>
                      </div>
                      <Typography color="red" size="xl" variant="outlined">
                        6.090.000 &#8363;
                      </Typography>
                    </CardContent>
                  </CardOverflow>
                </Card>
              </div>
            </div>
          </Popover>
        </div>
      )}
    </div>
  );
};

export default FavoriteProductsCard;
