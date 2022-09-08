// --- --- --- --- --- A P I --- --- --- --- --- //

import dataMocked from '../mock/dataMocked.json';
import valuesMocked from '../mock/valuesMocked.json';

export const getDataToCard = () => {
  const dataCard = dataMocked;
  return dataCard;
};

export const getDataToLocation = (_id) => {
  const theHouse = dataMocked.find(house => house.id === _id);
  console.log(theHouse);

  if (theHouse === undefined) {
    console.log('test undefined')
    return false;
  }
  return theHouse;
}

export const getImages = () => {
  const images = dataMocked;
  return images;
}

export const getInfoAndTools = () => {
  const infosAndTools = dataMocked;
  return infosAndTools;
}

export const getAboutValues = () => {
  const dataValues = valuesMocked;
  return dataValues;
}