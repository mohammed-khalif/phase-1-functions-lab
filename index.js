// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if (block <= 42) {
      return 42 - block;
    } else {
      return block - 42;
    }
  }
  
  function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
  }
  
  function distanceTravelledInFeet(start, end) {
    if (start < end) {
      return (end - start) * 264;
    } else {
      return (start - end) * 264;
    }
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0;
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
  }
  