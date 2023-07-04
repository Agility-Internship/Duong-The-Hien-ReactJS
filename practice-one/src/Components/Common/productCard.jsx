import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const MyCard = ({
  imgSrc, headerText, title, author, date,
}) => (
  <Card variant="secondary" size="large">
    <Card.CardHeader className="relative">
      <h5 className="text-sm text-gray-500 font-bold uppercase pb-5">{headerText}</h5>
      <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gray-500" />
    </Card.CardHeader>
    <Card.CardImage src={imgSrc} alt="Here is a photo of the product title above" />
    <Card.CardContent>
      <h3 className="pb-5 pt-5">
        <a className="text-xl text-black-500" href="#">
          {title}
          {' '}
        </a>
      </h3>
    </Card.CardContent>
    <Card.CardFooter>
      <h4>
        {date}
        ,
        {' '}
        <span className="text-gray-500">{author}</span>
        {' '}
      </h4>
    </Card.CardFooter>
  </Card>
);

MyCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default MyCard;
