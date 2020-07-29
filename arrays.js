"use strict";


// 1. printIndices
function printIndices(items) {
  
  for (const i of items) {
    console.log(i);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {

    const result = [];

    for (const i in items) {
      if (i % 2 === 0) {
        result.push(items[i]);
      }
   }
    console.log(result)
}


// 3. smallestNItems
function smallestNItems(items, n) {


    const sortedItems = items.sort((a, b) => a - b).slice(0,n);
   
    console.log(sortedItems);

}

        