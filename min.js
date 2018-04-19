//Write a function called min, which accepts an array of numbers and returns the lowest value. 
//Do note use the built-in Math.min() function!
//Examples:
//min([5, 1, 4, 7, 1, 2]); // 1
//min([-1, 6, 3, 2.2, -10, -4]); // -10

const min = (minimum) => {
    var num = minimum[0];
      for(i=0; i <= minimum.length-1; i++){
        if(minimum[i]< num)
         num = mminimum[i];
      }
       return num;
  }




describe('find min', function() {
    it('simpleOne', function() {
        var minimum = [5,1,4,7,1,2];
        var num = minimum[0];
        expect(answer).toEqual(1);
    });
});

describe('find min', function() {
    it('simpleTwo', function() {
        var maximo = [-1,6,3,2.2,-10,-4];
        var num = minimum[0];
        expect(answer).toEqual(-10);
    });
});

