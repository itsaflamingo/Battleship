/* search function */
/* array of options*/
/* check if num is available function */

function isSpotAvailable (num, options) {
  if(options.has(num)) {
    options.delete(num);
    return true;
  }  
  return false;
}

function Direction() {
  
  const isRight = (bool) => bool;
  const isUp = (bool) => bool;
  const isVertical = (bool) => bool

  return {
    isVertical,
    isRight,
    isUp
  }
}
	
function searchForBoat() {
  	
	  let newNum = 0;
    const d = Direction();
    let isVertical = d.isVertical(false);
  
  	const moveHorizontal = () => {
    	let isRight = d.isRight(true);

  		const moveRight = (num, originalNum, options) => {
    	    newNum = num + 1;
    	    if(isSpotAvailable(newNum, options) === true) return newNum;

          isRight = d.isRight(false);
    	    return ifRight(num, originalNum, options);
    	}
    	const moveLeft = (num, originalNum, options) => {
    		newNum = num - 1;
    	  if(isSpotAvailable(newNum, options) === true) return newNum;
          
        isVertical = d.isVertical(true);
        // reset isRight
        isRight = d.isRight(true);
    	  return ifVertical(num, originalNum, options);
    	}
      
      const ifRight = (num, originalNum, options) => isRight ? moveRight(num, originalNum, options) : moveLeft(num, originalNum, options);
      
      
      return {
      		ifRight
      	}
  		}
      
   	const moveVertical = () => {
        	let isUp = d.isUp(true);
        
        const moveUp = (num, originalNum, options) => {
        	newNum = num + 10;
          if(isSpotAvailable(newNum, options) === true) return newNum;
            
          isUp = d.isUp(false);
          return ifUp(num, originalNum, options);
        }
      
        const moveDown = (num, originalNum, options) => {
        	newNum = num - 10;
          if(isSpotAvailable(newNum, options) === true) return newNum;
          isUp = d.isUp(true);
          isVertical = d.isVertical(false);
          return ifVertical(originalNum, originalNum, options);
        }
      
        const ifUp = (num, originalNum, options) => isUp ? moveUp(num, originalNum, options) : moveDown(num, originalNum, options);
        
      
      return {
      	ifUp
      }
    }
  
    const ifVertical = (num, originalNum, options) => {
        return isVertical ? moveVertical().ifUp(num, originalNum, options) : 
        moveHorizontal().ifRight(num, originalNum, options);
    }

    const reset = () => {
        d.isRight(true);
        d.isVertical(false);
        d.isUp(true);
    }
    
  return {
  	ifVertical,
    reset
  }
}

export { searchForBoat }

