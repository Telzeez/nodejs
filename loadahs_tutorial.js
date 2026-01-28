import {flattenDeep } from 'lodash-es';

const items = [1, [2, [3, [4, [5]]]]]
const newItems = flattenDeep(items);
console.log(newItems)