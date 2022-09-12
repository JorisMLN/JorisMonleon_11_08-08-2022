// --- --- --- --- --- A P I --- --- --- --- --- //

import dataMocked from '../mock/dataMocked.json';
import valuesMocked from '../mock/valuesMocked.json';

// -----------------------------------------------------------------//
// Data of all houses
export const getDataToCard = () => {
  const dataCard = dataMocked;
  return dataCard;
};

// -----------------------------------------------------------------//
// Find the data of the selected house
export const getDataToLocation = (_id) => {
  const theHouse = dataMocked.find(house => house.id === _id);
  console.log(theHouse);

  if (theHouse === undefined) {
    console.log('test undefined')
    return false;
  }
  return theHouse;
}

// -----------------------------------------------------------------//
// Find the data of the selected house
export const getAboutValues = () => {
  const dataValues = valuesMocked;
  return dataValues;
}