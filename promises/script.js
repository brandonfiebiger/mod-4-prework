const testNum = num => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(num + ' is greater than ten good job');
    } else {
      reject(num + ' is less than ten try again')
    }
  })
}

testNum(23)
  .then(data => console.log(data))
  .catch(error => console.log(error))


const makeAllCaps = wordArray => {
  return new Promise((resolve, reject) => {
    let filteredWords = wordArray.filter(word => typeof word === 'number');
    if (!filteredWords.length) {
      const capatalizedWords = wordArray.map(word => word.toUpperCase())
      resolve(capatalizedWords)
    } else (
      reject('only strings here buddy')
    )
  })
}

const sortWords = wordArray => {
  return new Promise((resolve, reject) => {
    if (wordArray) {
      resolve(wordArray.sort())
    } else {
      reject('only strings in this town')
    }
  })
}

makeAllCaps(['shiss', 'yam', 'ketchup', 'mustard'])
  .then(words => sortWords(words))
  .then(sortedWords => console.log(sortedWords))
  .catch(error => console.log(error))







