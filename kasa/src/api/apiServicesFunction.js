// --- --- --- --- --- A P I --- --- --- --- --- //

import dataMocked from '../mock/dataMocked.json';
import valuesMocked from '../mock/valuesMocked.json';

// -----------------------------------------------------------------//
// Data of all houses
// export const getDataToCard = () => {
//   const dataCard = dataMocked;
//   return dataCard;
// };

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
// Find the images of the selected house
export const getImages = (_id) => {
  const theHouse = dataMocked.find(house => house.id === _id);
  const images = theHouse.pictures;
  console.log(theHouse);
  return images;
}

// -----------------------------------------------------------------//
// Find the informations and tools of the selected house
export const getInfoAndTools = (_id) => {
  const theHouse = dataMocked.find(house => house.id === _id);
  const infos = theHouse.description;
  const tools = theHouse.equipments;

  const infosAndTools = {
    infos: infos,
    tools: tools
  };

  console.log(infosAndTools);
  return infosAndTools;
}

// -----------------------------------------------------------------//
// Find the data of the selected house
export const getAboutValues = () => {
  const dataValues = valuesMocked;
  return dataValues;
}