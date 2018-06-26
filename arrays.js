var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (food, array) {
 array = ["food",...array]
  return array
}

function destructivelyAddElementToBeginningOfArray () {
  chocolateBars.unshift ("twix")
  return chocolateBars
}