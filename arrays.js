"use strict";


// 1. printIndices
function printIndices(items) {

  let idx = 0;
  
  for (let i of items) {
    console.log(i, idx);
    idx += 1;  
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

        