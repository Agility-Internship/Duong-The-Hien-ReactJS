import React, { useState } from 'react';

// Components
import FilterCategoryLayout from './components/layout/FilterCategoryLayout';
import ProductList from './components/layout/ListProductsCard';
import FavoriteProductsCard from './components/FavoriteProductsCard';

// Data
import LIST_PRODUCTS from '../database/products.json';

// Filter
import { filterProductsByManufacturer, filterProductsByPrice } from './helper/productHelpers';

const App = () => {
  // Process the product data by adding the 'manufacturer' property to each product
  const allProducts = LIST_PRODUCTS;

  // State for storing the selected filter options
  const [selectedFilter, setSelectedFilter] = useState({
    manufacturer: [], // Array to store selected manufacturer names
    price: [], // Array to store selected price options
  });

  // State for storing the favorite product IDs
  const [favoriteProductIDs, setFavoriteProductIDs] = useState([]);

  // Function to handle toggling a product as favorite
  const toggleProductFavorite = (productID) => {
    setFavoriteProductIDs((prevFavorites) => {
      const isFavorite = prevFavorites.includes(productID);

      // If it's already in the favorites list, remove it
      if (isFavorite) {
        return prevFavorites.filter((id) => id !== productID);
      }

      // If it's not in the favorites list, add it
      return [...prevFavorites, productID];
    });
  };

  // Function to handle the selection of a price filter
  const handlePriceFilter = (selectedID, selectedMin, selectedMax) => {
    setSelectedFilter((prevFilter) => {
      const isPriceOptionSelected = prevFilter.price.some(
        (priceOption) => priceOption.id === selectedID,
      );

      // If the selected price option already exists, remove it from the price filter
      if (isPriceOptionSelected) {
        return {
          ...prevFilter,
          price: prevFilter.price.filter((priceOption) => priceOption.id !== selectedID),
        };
      }

      // If the selected price option does not exist, add it to the price filter
      return {
        ...prevFilter,
        price: [...prevFilter.price, { id: selectedID, min: selectedMin, max: selectedMax }],
      };
    });
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

  // Filter products based on the selected
  const filterProducts = allProducts.filter((product) => {
    const manufacturerFilterMatch =
      filterProductsByManufacturer([product], selectedFilter.manufacturer).length > 0;
    const priceFilterMatch = filterProductsByPrice([product], selectedFilter.price).length > 0;

    return manufacturerFilterMatch && priceFilterMatch;
  });

  return (
    <main className="m-auto p-3 max-w-[1300px] w-full min-w-[980px] gap-6">
      <section className="pt-3 flex gap-4 ">
        <FilterCategoryLayout
          selectedFilter={selectedFilter}
          onManufacturerFilter={handleManufacturerFilter}
          onPriceFilter={handlePriceFilter}
        />
        <FavoriteProductsCard
          products={filterProducts}
          favoriteProductIDs={favoriteProductIDs}
          onToggleProductFavorite={toggleProductFavorite}
        />
      </section>
      <section>
        <ProductList
          products={filterProducts}
          favoriteProductIDs={favoriteProductIDs}
          onToggleProductFavorite={toggleProductFavorite}
        />
      </section>
    </main>
  );
};

export default App;
