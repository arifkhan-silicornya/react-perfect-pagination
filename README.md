# react-perfect-paginate

This is a pagination system, made using vanilla javascript. No frontend included. you only have to provide your data. System will do rest of all. You can use with both List and Object structure type data.


![npm](https://img.shields.io/npm/v/react-perfect-paginate?style=plastic)
![npm](https://img.shields.io/npm/l/react-perfect-paginate?color=002350?style=plastic)
![npm](https://img.shields.io/bundlephobia/minzip/react-perfect-paginate?style=plastic)
![npm](https://img.shields.io/npm/dt/react-perfect-paginate?style=plastic)

## Install it via npm

```shell
npm i react-perfect-paginate
```

## Require the Module

```shell
const { ListPagination,ObjectPagination } = require('react-perfect-paginate')
```

## To use for List type data

```shell

Example usage:

const dataArray = Array.from({ length: 100 }, (_, i) => i + 1); // Creating an array with 100 elements
const currentPage = 1; // by default = 1, To go to specific page, change this number
const ItemPerPage = 10; // default value = 5


const ListPaginationInfo = ListPagination(dataArray, currentPage, ItemPerPage); 

console.log(ListPaginationInfo)

```


## Output

```shell

    ========== List Pagination ========
    {
        currentPage: 1,
        totalItems: 100,
        itemsPerPage: 10,
        firstItem: 1,
        lastItem: 10,
        nextPage: 2,
        prevPage: null,
        lastPage: 10,
        isFirstPage: true,
        isLastPage: false,
        data: [
            1, 2, 3, 4,  5,
            6, 7, 8, 9, 10
        ]
    }

```

## To use for Object type data

```shell

Example usage:

const dataObject = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 }; // Creating an object

const currentPage = 1; // by default = 1, To go to specific page, change this number
const ItemPerPage = 5; // default value = 5


const ObjectPaginationInfo = ObjectPagination(dataObject, currentPage, ItemPerPage); 

console.log(ObjectPaginationInfo)


```


## Output

```shell

    ========== object Pagination ========
    {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 5,
        firstItemIndex: 1,
        lastItemIndex: 5,
        firstPage: 1,
        lastPage: 2,
        isFirstPage: true,
        isLastPage: false,
        prevPage: null,
        nextPage: 2,
        currentPageData: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    }

```

## To Change the page 
```shell
    change currentpage value and call the function again you will get the specific page items list or object. And the return value you will always get the update data.

    //for example 
    currentPage = 4;

    const ListPaginationInfo = ListPagination(dataArray, currentPage, ItemPerPage); 

```
## output 

```shell
    {
        currentPage: 4,
        totalItems: 100,
        itemsPerPage: 10,
        firstItem: 31,
        lastItem: 40,
        nextPage: 5,
        prevPage: 3,
        lastPage: 10,
        isFirstPage: false,
        isLastPage: false,
        data: [
            31, 32, 33, 34, 35,
            36, 37, 38, 39, 40
        ]
    }
```

MIT License

Copyright (c) 2022 MD. ARIF KHAN

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.