import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
  return goods.filter((good) => good.brand === brand);
};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  return goods.filter((good) => good.color === color);
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  return goods.filter((good) => good.model === model);
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  return goods.filter((good) => good.memory === memory);
};


/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  return goods.filter((good) => good.price === price);
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  return goods.filter((good) => good.country === country);
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
  return goods.filter((good) => good.os === os);
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  console.log('ww')
  return goods.filter((good) => good.price >= from && good.price <= to);
};

const minPriceReducer = () => {
  return goods.reduce((min, cur) => {
    return Math.min(min, cur.price);
  }, 0);
};


const maxPriceReducer = () =>{
  return goods.reduce((min, cur) => {
    return Math.max(min, cur.price);
  }, 0);
};


const toMaxSorter = () => {
  return goods.sort((a, b) => {
    if (a.price > b.price) return -1;
    if (a.price == b.price) return 0;
     return 1;
  });
};

const toMinSorter = () => {
  return goods.sort((a, b) => {
    if (a.price > b.price) return 1;
    if (a.price == b.price) return 0;
    return -1;
  });
};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
