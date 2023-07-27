import React, { useState, useEffect } from 'react';

// Components
import FilterCategoryLayout from './components/layout/FilterCategoryLayout';
import ProductList from './components/layout/ListProductsCard';

// Data
import LIST_PRODUCTS from '../database/products.json';

/**
 * Filters an array of products based on the selected brand names.
 * @param {Array} products - The array of products to filter.
 * @param {Array} selectedBrands - An array of selected brand names to filter the products.
 * @returns {Array} - An array containing the filtered products based on the selected brand names.
 */
const filterProductsByName = (products, selectedBrands) => {
  const filteredResults = [];

  // Filter products by selected brand names
  // prettier-ignore
  selectedBrands.forEach((brand) => {
    const filteredProducts = products.filter(
      (product) => product.name.toLowerCase().includes(brand.toLowerCase()),
    );
    // Unshift the filtered products to maintain the original order
    filteredResults.unshift(...filteredProducts);
  });

  return filteredResults;
};

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState({
    manufacturer: [],
    price: [],
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

  // prettier-ignore
  const handleManufacturerFilter = (selectedManufacturer) => {
    setSelectedFilter((prevFilter) => {
      const isAlreadySelected = prevFilter.manufacturer.includes(selectedManufacturer);

      if (isAlreadySelected) {
        // If the selectedManufacturer is already in the manufacturer array, delete it
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

  // InProcess
  const handlePriceFilter = (selectedPrice) => {
    setSelectedFilter((prevFilter) => ({
      ...prevFilter,
      price: [selectedPrice],
    }));
  };

  useEffect(() => {
    const filterProducts = () => {
      const { manufacturer, price } = selectedFilter;
      const selectedBrands = [...manufacturer, ...price];

      // Use the filterProductsByName function to filter products by names
      const filtered = filterProductsByName(allProducts, selectedBrands);

      setFilteredProducts(filtered);
    };

    // Update the filtered products whenever the selectedFilter or allProducts change
    filterProducts();
  }, [selectedFilter, allProducts]);

  useEffect(() => {
    // Set the initial value of allProducts using data from LIST_PRODUCTS
    setAllProducts(LIST_PRODUCTS);
  }, []);

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
