import React from 'react';
import PropTypes from 'prop-types';

// Components
import ProductCard from '../ProductCard';
import Typography from '../common/Typography';

/**
 * ProductList Component
 *
 * A component that render a list of products using a grid layout.
 *
 * @param products - An array of product objects to be displayed.
 * @returns {JSX.Element} The ProductList Component.
 */
const ProductList = ({ products }) => {
  // Calculate the total number of products
  const totalProducts = products.length;

  // Check plural singular
  // prettier-ignore
  const pluralize = (count, singular, plural) => (count <= 1 ? `${count} ${singular}` : `${count} ${plural}`);

  return (
    <div className="mt-8">
      {/* Total Products */}
      <div className="mb-3">
        <Typography size="xl" variant="outline">
          {pluralize(totalProducts, 'phone', 'phones')}
        </Typography>
      </div>
      {/* List Products */}
      <div className="grid grid-cols-5 border">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden flex items-center p-2 pt-4 pb-5 border-r border-b"
          >
            {/* TODO: Update image transition */}
            <ProductCard
              label={product.installment ? product.installment : undefined}
              image={product.image}
              name={product.name}
              compare={product.version}
              resolution={product.resolution}
              prices={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      name: PropTypes.string.isRequired,
      version: PropTypes.string.isRequired,
      resolution: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default ProductList;
