import React from 'react';

// Components
import ProductCard from '../ProductCard';
import Typography from '../common/Typography';

// data
import LIST_PRODUCTS from '../../../database/products.json';

const ProductList = () => {
  const productData = LIST_PRODUCTS.map((product) => ({
    id: product.id,
    image: product.images,
    name: product.name,
    version: product.version,
    resolution: product.resolution,
    price: product.price,
    installment: product.installment,
  }));

  const totalProducts = productData.length;

  // Check plural singular
  // prettier-ignore
  const pluralize = (count, singular, plural) => (count === 1 ? `${count} ${singular}` : `${count} ${plural}`);

  return (
    <div className="mt-8">
      {/* Total Products */}
      <div className="mb-3">
        <Typography size="xl" variant="outline">
          {pluralize(totalProducts, 'phone', 'phones')}
        </Typography>
      </div>
      {/* List Products */}
      <div className="grid grid-cols-5  border">
        {productData.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden flex items-center p-2 pt-4 pb-5 border-r border-b "
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
export default ProductList;
