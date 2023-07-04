import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const HorizontalCard = ({
  headerText = '',
  title = '',
  date = '',
  author = '',
}) => (
  <Card variant="primary" size="medium">
    <div className="flex justify-between items-end border-t-2 border-t-gray-500">
      <div className="card-horizontal-left pt-5">
        <Card.CardContent>
          <h3 className="text-xl font-bold mb-6">{title}</h3>
        </Card.CardContent>
        <Card.CardFooter>
          <h4>
            {date}
            ,
            {' '}
            <span className="text-gray-500">{author}</span>
          </h4>
        </Card.CardFooter>
      </div>
      <Card.CardHeader>
        <h5 className="text-sm text-gray-500 font-bold uppercase">{headerText}</h5>
      </Card.CardHeader>
    </div>
  </Card>
);

HorizontalCard.propTypes = {
  title: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default HorizontalCard;
