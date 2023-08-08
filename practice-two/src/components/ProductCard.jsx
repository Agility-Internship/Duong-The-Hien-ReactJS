import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Card, CardOverflow, CardImage, CardContent } from './common/Card';
import Typography from './common/Typography';
import Link from './common/Link';
import FavoriteButton from './common/Button/ButtonFavorite';

/**
 * Product Card Component.
 *
 * A reusable component that displays product information in a card format.
 *
 * @param product - The product data object.
 * @param favoriteProductIDs - An array of product IDs marked as favorites.
 * @param onSelectFavorite - Function to handle the selection/unselection of a favorite product.
 * @param onSelectProduct - Function to handle the selection of a product.
 * @returns {JSX.Element} Product Card content.
 */
function ProductCard({
  product = [],
  favoriteProductIDs = [],
  onSelectFavorite = () => {},
  onSelectProduct = () => {},
}) {
  // Function to handle get ID when a favorite product is selected
  const handleFavoriteToggle = () => {
    onSelectFavorite(product.id);
  };

  // Function to handle get ID when a product card is selected
  const handleSelectProduct = () => {
    onSelectProduct(product.id);
  };
  const firstImage = Object.values(product.images)[0];

  return (
    <Card>
      <CardOverflow>
        <div className="card-label flex justify-end">
          {product.installment && (
            <div className="absolute top-2 left-2">
              <Typography color="black" size="xl" variant="solid">
                {product.installment}
              </Typography>
            </div>
          )}
          <FavoriteButton
            isFavorite={favoriteProductIDs.includes(product.id)}
            onClick={handleFavoriteToggle}
          />
        </div>
        <CardContent onClick={handleSelectProduct}>
          <CardImage src={firstImage} alt="This is a picture of the card-image" />
          <div className="hover:text-blue-700">
            <Link href="/product-card" underline={false} size="xl" variant="custom-variant">
              {product.name}
            </Link>
          </div>
          <div className="card-compare flex gap-2">
            <Typography color="black" size="md" variant="solid">
              {product.version}
            </Typography>
            <Typography color="black" size="md" variant="solid">
              {product.resolution}
            </Typography>
          </div>
          <Typography color="red" size="xl" variant="plain">
            {product.price}
            &#8363;
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}

ProductCard.propTypes = {
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
  onSelectFavorite: PropTypes.func.isRequired,
  onSelectProduct: PropTypes.func.isRequired,
};

export default ProductCard;
