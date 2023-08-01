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

  // Convert the selectedFilter array to lowercase for case-insensitive comparison
  const selectedManufacturerObject = selectedFilter.map((manufacturer) => manufacturer.toLowerCase());

  // Filter products based on whether their 'manufactory' is in the selectedManufacturerObject
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
 * This function is used to filter products by price
 * @param {Array} products - The array of products to filter.
 * @param {number} minPrice - The minimum price to filter.
 * @param {number} maxPrice - The maximum price to filter.
 * @returns {Array} An array of filtered products.
 */
const filterProductsByPrice = (products, minPrice, maxPrice) =>
  products.filter((product) => {
    const price = convertPriceToNumber(product.price);
    return price >= minPrice && (maxPrice === undefined || price <= maxPrice);
  });

export { filterProductsByManufacturer, filterProductsByPrice };
