import React, { useState } from 'react';

// Components
import FilterCategoryLayout from './components/layout/FilterCategoryLayout';
import ProductList from './components/layout/ListProductsCard';

// Data
import LIST_PRODUCTS from '../database/products.json';

// Filter
import filterProductsByManufacturer from './helper/productHelpers';

const App = () => {
  // Process the product data by adding the 'manufacturer' property to each product
  const allProducts = LIST_PRODUCTS;

  // State for storing the selected filter options
  const [selectedFilter, setSelectedFilter] = useState({
    manufacturer: [], // Array to store selected manufacturer names
    price: [], // Array to store selected price options
  });

  // Function to handle the selection of a price filter
  const handlePriceFilter = (selectedPrice) => {
    setSelectedFilter((prevFilter) => ({
      ...prevFilter,
      price: [selectedPrice],
    }));
  };

  // Function to handle the selection of a manufacturer filter
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
  const filterProducts = filterProductsByManufacturer(allProducts, selectedFilter.manufacturer);

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
        <ProductList products={filterProducts} />
      </section>
    </main>
  );
};

export default App;
