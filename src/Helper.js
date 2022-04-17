export const newCount = (arr, id, text) => arr.map(el => {
    if (el.id === id) {
        return ({
            ...el, 
            count: text ?? ++el.count
        })
    } else {
        return el
    }
})

export function throttle(func, ms) {
    console.log('renderThrot')
    let isThrottled = false,
      savedArgs,
      savedThis;
  
    function wrapper() {
  
      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
      }
  
      func.apply(this, arguments); // (1)
  
      isThrottled = true;
  
      setTimeout(function() {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
  
    return wrapper;
  }