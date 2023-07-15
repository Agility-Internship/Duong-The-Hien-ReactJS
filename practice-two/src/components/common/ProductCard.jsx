import React from 'react';

// Component
import Card from './material/Card';
import CardOverflow from './material/CardOverflow';
import CardImage from './material/CardImage';
import CardContent from './material/CardContent';
import Typography from './Typography';
import Link from './Link';

const ProductCard = () => (
  <Card>
    <CardOverflow>
      <div className="card-label ">
        <Typography color="black" level="body1" variant="solid">
          0% installment
        </Typography>
      </div>
      <CardImage
        src="https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg"
        alt=""
      />
      <CardContent>
        <div className="card-name hover:text-secondary">
          <Link href="/product-card" disabled level="body3" variant="custom-variant">
            Samsung Galaxy A24
          </Link>
        </div>
        <div className="card-compare flex gap-2">
          <Typography color="black" level="body1" variant="solid">
            6.5
          </Typography>
          <Typography color="black" level="body1" variant="solid">
            Full HD+
          </Typography>
        </div>
        <Typography color="red" level="body3">
          6.090.000₫
        </Typography>
      </CardContent>
    </CardOverflow>
  </Card>
);

export default ProductCard;
