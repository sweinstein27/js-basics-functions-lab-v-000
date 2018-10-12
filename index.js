// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42){
    return block - 42
  } else {
    return 42 - block
  }
}

function distanceFromHqInFeet(block){
  if (block > 42){
    return (block - 42)*264
  } else {
    return (42 - block)*264
  }
}

function distanceTravelledInFeet(start, end){
  return Math.abs(start - end)*264
}

function calculatesFarePrice(start, destination){
  switch (Math.abs(destination-start) {
    case <400:
      return "This is on us."
      
      break;
    default:
      
  }
}