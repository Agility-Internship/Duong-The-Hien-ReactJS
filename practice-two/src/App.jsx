import React, { useState } from 'react';

// Components
import FilterCategoryLayout from './components/layout/FilterCategoryLayout';
import ProductList from './components/layout/ListProductsCard';

// Data
import LIST_PRODUCTS from '../database/products.json';

/**
 * Filters an array of products based on the selected manufacture names.
 * @param {Array} products - The array of products to filter.
 * @param {Array} selectedManufacture - An array of selected manufacture names to filter.
 * @returns {Array} - An array containing the filtered products based on the selected manufacture.
 */
const filterProductsByName = (products, selectedManufacture) => {
  if (selectedManufacture.length === 0) {
    return products; // Return all products if no manufactures are selected
  }

  const filteredResults = selectedManufacture.reduce((acc, manufacture) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(manufacture.toLowerCase()),
    );

    // Concatenate the filtered products to maintain the original order
    return acc.concat(filteredProducts);
  }, []);

  return filteredResults;
};

const App = () => {
  const allProducts = LIST_PRODUCTS;
  const [selectedFilter, setSelectedFilter] = useState({
    manufacturer: [],
    price: [],
  });

  const handlePriceFilter = (selectedPrice) => {
    setSelectedFilter((prevFilter) => ({
      ...prevFilter,
      price: [selectedPrice],
    }));
  };

  const handleManufacturerFilter = (selectedManufacturer) => {
    setSelectedFilter((prevFilter) => {
      const isAlreadySelected = prevFilter.manufacturer.includes(selectedManufacturer);

      // If the selectedManufacturer is already in the manufacturer array, delete it
      if (isAlreadySelected) {
        return {
          ...prevFilter,
          manufacturer: prevFilter.manufacturer.filter(
            (manufacturer) => manufacturer !== selectedManufacturer,
          ),
        };
      }

      // If the selectedManufacturer is not already in the manufacturer array, add it
      return {
        ...prevFilter,
        manufacturer: [...prevFilter.manufacturer, selectedManufacturer],
      };
    });
  };

  // Apply filtering logic to get the list of products to display
  const filteredProducts = filterProductsByName(allProducts, selectedFilter.manufacturer);

  return (
    <main className="m-auto p-3 max-w-[1300px] w-full min-w-[980px] gap-6">
      <section className="pt-3 flex gap-4 relative">
        <FilterCategoryLayout
          selectedFilter={selectedFilter}
          handleManufacturerFilter={handleManufacturerFilter}
          handlePriceFilter={handlePriceFilter}
        />
      </section>
      <section>
        <ProductList products={filteredProducts} />
      </section>
    </main>
  );
};

export default App;
