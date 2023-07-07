import React from 'react';
import PropTypes from 'prop-types';

// Components
import Card from './Card';

const ProductCard = ({
  imgSrc = '',
  headerText = '',
  title = '',
  author = '',
  date = '',
}) => (
  <div className="flex h-full flex-col">
    <Card.CardHeader className="relative">
      <h5 className="text-sm text-gray-500 font-bold uppercase pb-2">
        {headerText}
      </h5>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-500" />
    </Card.CardHeader>
    <Card.CardImage
      src={imgSrc}
      alt="Here is a photo of the product title above"
    />
    <Card.CardContent>
      <h3 className="pb-6 pt-1">
        <a href="/" className="text-2xl font-bold text-black-500">
          {title}
        </a>
      </h3>
    </Card.CardContent>
    <Card.CardFooter>
      <h4>
        {date}
        {String.fromCharCode(44)}
        <span className="text-gray-500">{author}</span>
      </h4>
    </Card.CardFooter>
  </div>
);

ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ProductCard;
