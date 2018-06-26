var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (food, array) {
 chocolateBars = ["twix",...chocolateBars]
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray () {
  chocolateBars.unshift ("twix")
  return chocolateBars
}