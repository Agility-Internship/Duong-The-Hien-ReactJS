import React from 'react';
import PropTypes from 'prop-types';

// Component
import Card from './material/Card';
import CardOverflow from './material/CardOverflow';
import CardImage from './material/CardImage';
import CardContent from './material/CardContent';
import Typography from './Typography';
import Link from './Link';

/**
 * Product Card Component.
 * @param {string} label - The label for the card.
 * @param {string} image - The image source for the card.
 * @param {string} name - The name of the product.
 * @param {string} compare - Comparison information for the product.
 * @param {string} resolution - Resolution information for the product.
 * @param {string} prices - The price information for the product.
 * @returns {JSX.Element} Products Card contetn
 */
function ProductCard({ label, image, name, compare, resolution, prices }) {
  return (
    <Card>
      <CardOverflow>
        <div className="card-label ">
          <Typography color="black" level="body1" variant="solid">
            {label}
          </Typography>
        </div>
        <CardImage src={image} alt="This is a picture of the card-image" />
        <CardContent>
          <div className="card-name hover:text-secondary">
            <Link
              href="/product-card"
              disabled
              level="body3"
              variant="custom-variant"
            >
              {name}
            </Link>
          </div>
          <div className="card-compare flex gap-2">
            <Typography color="black" level="body1" variant="solid">
              {compare}
            </Typography>
            <Typography color="black" level="body1" variant="solid">
              {resolution}
            </Typography>
          </div>
          <Typography color="red" level="body3">
            {prices}
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}

ProductCard.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  compare: PropTypes.string.isRequired,
  resolution: PropTypes.string.isRequired,
  prices: PropTypes.string.isRequired,
};

export default ProductCard;
