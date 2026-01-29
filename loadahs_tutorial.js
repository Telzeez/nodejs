import {flattenDeep } from 'lodash-es';
import {createServer} from 'http';
import {readFile} from 'fs'

const items = [1, [2, [3, [4, [5]]]]]
const newItems = flattenDeep(items);
console.log(newItems)

const server = createServer((req, res) => {
  res.
})