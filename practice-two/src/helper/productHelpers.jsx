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
    return selectedPrice.some((priceOption) => price >= priceOption.min && price <= priceOption.max);
  });
};

export { filterProductsByManufacturer, filterProductsByPrice, convertPriceToNumber };
