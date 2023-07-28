import React, { useState } from 'react';

// Components
import FilterCategoryLayout from './components/layout/FilterCategoryLayout';
import ProductList from './components/layout/ListProductsCard';

// Data
import LIST_PRODUCTS from '../database/products.json';

/**
 * Filters an array of products based on the selected manufacturer names.
 * @param {Array} products - The array of products to filter.
 * @param {Array} selectedFilter - An array of selected manufacture names to filter.
 * @returns {Array} - An array containing the filtered products based on the selected manufacture.
 */
const filterProductsByManufacturer = (products, selectedFilter) => {
  if (selectedFilter.length === 0) {
    return products; // If no manufacturers are selected, return all products without filter
  }

  // Filter products based on whether their 'manufactory'
  return products.filter((product) => {
    const selectedManufacturerLowerCase = selectedFilter.map((manufacturer) =>
      manufacturer.toLowerCase(),
    );
    const productManufacturerLowerCase = product.manufactory.toLowerCase();

    return selectedManufacturerLowerCase.includes(productManufacturerLowerCase);
  });
};

/**
 * Adds a 'manufactory' property to each product.
 * @param {Array} products - The array of products to add the 'manufactory' property to.
 * @returns {Array} - An array of products with the 'manufactory' property added.
 */
const addManufactoryProperty = (products) => {
  // Map from keyword to manufactory value
  const keywordToManufactory = {
    iphone: 'apple',
    samsung: 'samsung',
    oppo: 'Oppo',
    xiaomi: 'Xiaomi',
    vivo: 'Vivo',
    realme: 'realme',
    nokia: 'nokia',
    masstel: 'masstel',
    itel: 'itel',
    mobell: 'mobell',
  };

  return products.map((product) => {
    // Check if the product name contains any of the keywords
    const name = product.name.toLowerCase();
    const matchedKeyword = Object.keys(keywordToManufactory).find((keyword) =>
      name.includes(keyword),
    );

    // If a matching keyword is found, add the 'manufactory'
    if (matchedKeyword) {
      return { ...product, manufactory: keywordToManufactory[matchedKeyword] };
    }

    // If the name does not contain any keywords, keep the product as it is
    return product;
  });
};

const App = () => {
  // Process the product data by adding the 'manufactory' property to each product
  const allProducts = addManufactoryProperty(LIST_PRODUCTS);

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
