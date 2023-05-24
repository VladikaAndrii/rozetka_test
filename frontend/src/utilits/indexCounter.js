export const getNewIndex = (arrayLenght, currentIndex, step) => {
    if(step > 0){
      if(arrayLenght - step > currentIndex){
        return currentIndex + step;
      }else{
        return 0;
      }
    }else{
      if(currentIndex > 0){
        return currentIndex + step;
      }else{
        return arrayLenght - 1;
      }
    }
  }