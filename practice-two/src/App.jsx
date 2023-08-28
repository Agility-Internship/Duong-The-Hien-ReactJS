import React, { useState } from 'react';

// Components
import FilterCategoryLayout from './components/layout/FilterCategoryLayout';
import ProductList from './components/layout/ListProductsCard';
import FavoriteProductsCard from './components/FavoriteProductsCard';
import ProductDetails from './components/ProductDetails';

// Data
import LIST_PRODUCTS from '../database/products.json';

// Filter
import { filterProductsByManufacturer, filterProductsByPrice } from './helper/productHelpers';
import Message from './components/common/Message';

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

  // State for storing the selected product's ID for details view
  const [selectedProductID, setSelectedProductID] = useState(null);

  // State for storing the IDs of products added to cart
  const [cartProductIDs, setCartProductIDs] = useState([]);

  // State show Message when add to cart
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);

  const closeAddToCartModal = () => {
    setShowAddToCartModal(false);
  };

  // Add a class to the body tag when selectedProductID is not null
  if (selectedProductID !== null) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }

  /**
   * Handle the selection of a product to view its details or close the details view.
   *
   * @param {string} productID - ID of the selected product
   * @return {string} - ID of the selected product for selectedProductID state
   */
  const handleSelectProduct = (productID) => {
    setSelectedProductID(productID);
  };

  /**
   * Handle closing the product details view.
   *
   * @returns {void|null} - No return value (void) or null when product details view is closed
   */
  const handleCloseProductDetails = () => {
    setSelectedProductID(null);
  };

  /**
   * Handle resetting all filters to empty and display the entire product list.
   *
   * @returns return empty options of original selectedFilter
   */
  const handleResetFilters = () => {
    setSelectedFilter({
      manufacturer: [],
      price: [],
    });
  };

  /**
   * Toggle the favorite status of a product.
   *
   * @param {string} productID - ID of the product to toggle favorite status for
   * @returns {Array} - Updated list of favorite product IDs
   */
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

  /**
   * Add a product to the cart.
   *
   * @param {string} productID - ID of the product to add to the cart
   * @returns {Array} - Updated list of products cart IDs
   */
  const addToCart = (productID) => {
    setCartProductIDs((prevCartProducts) => {
      const existingProduct = prevCartProducts.find((item) => item.id === productID);

      if (existingProduct) {
        setShowAddToCartModal(true);
        // If the product already exists in the cart, update its quantity
        return prevCartProducts.map((item) =>
          item.id === productID ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      setShowAddToCartModal(true);

      // If the product is not in the cart, add it with quantity 1
      return [...prevCartProducts, { id: productID, quantity: 1 }];
    });
  };

  /**
   * Remove a product from the cart.
   *
   * @param {string} productID - ID of the product to remove from the cart
   * @returns {Array} - Updated list of products cart IDs
   */
  const removeFromCart = (productID) => {
    setCartProductIDs((prevCartProducts) => {
      const updatedCart = prevCartProducts.filter((item) => item.id !== productID);
      return updatedCart;
    });
  };

  /**
   * Update the quantity of a product in the cart.
   *
   * @param {string} productID - ID of the product to update quantity for
   * @param {number} newQuantity - New quantity value for the product
   */
  const updateQuantity = (productID, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productID); // Remove the product from the cart
    } else {
      setCartProductIDs((prevCartProducts) =>
        prevCartProducts.map((item) =>
          item.id === productID ? { ...item, quantity: newQuantity } : item,
        ),
      );
    }
  };

  /**
   * Handle the selection or deselection of a price filter option.
   *
   * @param {String} selectedID - ID of the selected price filter option
   * @param {String} selectedMin - Minimum price for the selected filter option
   * @param {String} selectedMax - Maximum price for the selected filter option
   * @returns {Object} - Object includes id, minimum value, maximum value of the filter being selected for selectedFilter.price
   */
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

  /**
   * Handle the selection or deselection of a manufacturer filter option.
   *
   * @param {string} selectedManufacturer - Name of the selected manufacturer
   * @returns {Object} - Name of selected manufacturer for selectedFilter.manufacturer
   */
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

  // Filter the products based on the selected filters
  const filterProducts = allProducts.filter((product) => {
    const manufacturerFilterMatch =
      filterProductsByManufacturer([product], selectedFilter.manufacturer).length > 0;
    const priceFilterMatch = filterProductsByPrice([product], selectedFilter.price).length > 0;

    return manufacturerFilterMatch && priceFilterMatch;
  });

  // Find the selected product based on the selectedProductID
  const selectedProduct = allProducts.find((product) => product.id === selectedProductID);

  return (
    <main className="m-auto p-3 max-w-screen-xl w-full min-w-[300px] sm:min-w-[640px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px] gap-6 overflow-hidden">
      <section className="pt-3 flex flex-col sm:flex-row gap-4 ">
        <FilterCategoryLayout
          products={allProducts}
          selectedFilter={selectedFilter}
          cartProductIDs={cartProductIDs}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          onManufacturerFilter={handleManufacturerFilter}
          onPriceFilter={handlePriceFilter}
          onResetFilters={handleResetFilters}
        />
        <FavoriteProductsCard
          products={allProducts}
          favoriteProductIDs={favoriteProductIDs}
          onToggleProductFavorite={toggleProductFavorite}
          onSelectProduct={handleSelectProduct}
        />
      </section>
      <section>
        <ProductList
          products={filterProducts}
          favoriteProductIDs={favoriteProductIDs}
          onToggleProductFavorite={toggleProductFavorite}
          onSelectProduct={handleSelectProduct}
        />
      </section>
      <section>
        {selectedProductID !== null && (
          <ProductDetails
            product={selectedProduct}
            favoriteProductIDs={favoriteProductIDs}
            onClosePopover={handleCloseProductDetails}
            onToggleProductFavorite={toggleProductFavorite}
            onAddToCart={addToCart}
          />
        )}
      </section>
      <section>{showAddToCartModal && <Message onClose={closeAddToCartModal} />}</section>
      <section />
    </main>
  );
};

export default App;
