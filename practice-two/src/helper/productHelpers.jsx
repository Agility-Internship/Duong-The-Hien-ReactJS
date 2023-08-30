/**
 * Filters products based on selected manufacturer names.
 * @param {Array} products - The array of products to filter.
 * @param {Array} selectedManufacturer - An array of selected manufacturer names to filter.
 * @returns {Array} - An array containing the filtered products based on the selected manufacturer.
 */
const filterProductsByManufacturer = (products, selectedManufacturer) => {
  if (selectedManufacturer.length === 0) {
    return products;
  }

  const selectedManufacturerObject = selectedManufacturer.map((manufacturer) =>
    manufacturer.toLowerCase(),
  );

  return products.filter((product) => {
    const productManufacturer = product.manufactory.toLowerCase();

    return selectedManufacturerObject.includes(productManufacturer);
  });
};

/**
 * This function is used to convert price string to a numeric value
 * @param {string} price - The price string to convert.
 * @returns {number} The numeric value of the price.
 */
const convertPriceToNumber = (price) => {
  const numericString = price.replace(/[.]+/g, '');

  return parseInt(numericString, 10);
};

/**
 * Converts an amount to currency format in VND (Vietnamese Dong).
 * @param {number} amount - The amount to be converted.
 * @returns {string} - Formatted currency string.
 */
const formatCurrency = (amount) =>
  amount.toLocaleString('vi-VN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

/**
 * Calculate total prices for products in the cart.
 * @param {Array} products - Array of all available products
 * @param {Array} cartProductIDs - Array of objects with product IDs and quantities
 * @returns {Array} Array of objects with calculated total prices
 */
const calculateTotalPrices = (products, cartProductIDs) =>
  cartProductIDs.map((item) => {
    const productIDs = products.find((p) => p.id === item.id);

    const productPrices = convertPriceToNumber(productIDs.price);

    if (productIDs) {
      const totalPrice = productPrices * item.quantity;

      return { id: item.id, totalPrice };
    }

    return null;
  });

/**
 * Filters products based on selected price options.
 * @param {Array} products - The array of products to filter.
 * @param {Array} selectedPrice - An array of selected price options to filter.
 * @returns {Array} - An array containing the filtered products based on the selected price options.
 */
const filterProductsByPrice = (products, selectedPrice) => {
  if (selectedPrice.length === 0) {
    return products;
  }

  return products.filter((product) => {
    const price = convertPriceToNumber(product.price);

    return selectedPrice.some((priceOption) => {
      const { min, max } = priceOption;

      return (min === undefined || price >= min) && (max === undefined || price <= max);
    });
  });
};

export {
  filterProductsByManufacturer,
  filterProductsByPrice,
  convertPriceToNumber,
  formatCurrency,
  calculateTotalPrices,
};
