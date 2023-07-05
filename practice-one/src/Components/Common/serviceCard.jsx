import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const ServiceCard = ({
  headerText = '',
  title = '',
  date = '',
  author = '',
}) => (
  <Card variant="primary" size="small">
    <div className="border-t-2 border-b-2 border-gray-500 pt-5 pb-5">
      <Card.CardHeader>
        <h5 className="text-sm text-gray-500 font-bold uppercase mb-6 ">
          {headerText}
        </h5>
      </Card.CardHeader>
      <Card.CardContent>
        <div className="w-11/12 mb-6">
          <h3 className="text-2xl font-bold mb-8 mt-3">{title}</h3>
        </div>
      </Card.CardContent>
      <Card.CardFooter>
        <h4>
          {date}
          {String.fromCharCode(44)}
          <span className="text-gray-500">{author}</span>
        </h4>
      </Card.CardFooter>
    </div>
  </Card>
);

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default ServiceCard;
