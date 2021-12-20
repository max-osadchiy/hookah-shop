export const sortItemsHight = (array, itemName) => {
  return array.sort((a, b) => {
    if (a[itemName] < b[itemName]) return 1;
    if (a[itemName] > b[itemName]) return -1;
    return 0;
  });
};

export const sortItemsSmaller = (array, itemName) => {
  return array.sort((a, b) => {
    if (a[itemName] > b[itemName]) return 1;
    if (a[itemName] < b[itemName]) return -1;
    return 0;
  });
};
