/* search function */
/* array of options*/
/* check if num is available function */

const checkAvailability = (num, options) => {
  if(options.has(num)) {
    options.delete(num);
    return true;
  }  
  return false;
};
	
function searchForBoat() {
  	
    let isVertical = false;
	  let newNum = 0;
  
  	const moveHorizontal = () => {
    	let isRight = true;

  		const moveRight = (num, options) => {
    	    newNum = num + 1;
    	    if(checkAvailability(newNum, options) === true) return newNum;

          isRight = false;
    	    return ifRight(num, options);
    	}
    	const moveLeft = (num, options) => {
    		newNum = num - 1;
    	  if(checkAvailability(newNum, options) === true) return newNum;
          
        isVertical = true;
    	  return ifVertical(num, options);
    	}
      
      const ifRight = (num, options) => isRight ? moveRight(num, options) : moveLeft(num, options);
      
      
      return {
      		ifRight
      	}
  		}
      
   	const moveVertical = () => {
        	let isUp = true;
        
        const moveUp = (num, options) => {
        	newNum = num + 10;
            if(checkAvailability(newNum, options) === true) {
          	    return newNum;
            }
          isUp = false;
          return ifUp(num, options);
        }
      
        const moveDown = (num, options) => {
        	newNum = num - 10;
            if(checkAvailability(newNum, options) === true) return newNum;
            return null;
        }
      
        const ifUp = (num, options) => isUp ? moveUp(num, options) : moveDown(num, options);
        
      
      return {
      	ifUp
      }
    }
  
    const ifVertical = (num, options) => {
        return isVertical ? moveVertical().ifUp(num, options) : 
        moveHorizontal().ifRight(num, options);
    }

    const reset = () => {
        isVertical = false
        add = true
    }
    
  return {
  	ifVertical,
    reset
  }
}

export { searchForBoat }

