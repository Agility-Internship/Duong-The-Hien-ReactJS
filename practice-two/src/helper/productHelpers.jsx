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

export default filterProductsByManufacturer;
