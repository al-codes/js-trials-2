"use strict";


function wordsInCommon(words1, words2) {
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const resultSet = new Set();

  for (const word of words1Set) {
    if (words2Set.has(word)) {
      resultSet.add(word);
    }
  }
  
  return Array.from(resultSet);
  
}


function kidsGame(names) {


  
}
