import React from 'react';
import PropTypes from 'prop-types';

// Component
import { Card, CardOverflow, CardImage, CardContent } from './common/Card';
import Typography from './common/Typography';
import Link from './common/Link';

/**
 * Product Card Component.
 * @param label - The label for the card.
 * @param image - The image source for the card.
 * @param name - The name of the product.
 * @param compare - Comparison information for the product.
 * @param resolution - Resolution information for the product.
 * @param prices - The price information for the product.
 * @returns {JSX.Element} Products Card content
 */
function ProductCard({ label, image, name, compare, resolution, prices }) {
  return (
    <Card>
      <CardOverflow>
        <div className="card-label">
          {label ? (
            <Typography color="black" size="xl" variant="solid">
              {label}
            </Typography>
          ) : (
            <Typography color="black" size="xl" variant="soft">
              {undefined}
            </Typography>
          )}
        </div>
        <CardImage src={image} alt="This is a picture of the card-image" />
        <CardContent>
          <div className="hover:text-blue-700">
            <Link
              href="/product-card"
              underline={false}
              size="xl"
              variant="custom-variant"
            >
              {name}
            </Link>
          </div>
          <div className="card-compare flex gap-2">
            <Typography color="black" size="md" variant="solid">
              {compare}
            </Typography>
            <Typography color="black" size="md" variant="solid">
              {resolution}
            </Typography>
          </div>
          <Typography color="red" size="xl" variant="outline">
            {prices}
            &#8363;
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}

ProductCard.propTypes = {
  label: PropTypes.string,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  compare: PropTypes.string,
  resolution: PropTypes.string,
  prices: PropTypes.string.isRequired,
};

export default ProductCard;
