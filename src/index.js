
// You should implement your task here.

module.exports = function towelSort (matrix) {
      if (matrix && matrix.length !==0) {
        var arr = [];
        arr = matrix.map(function(el,i) {
          if (i%2 == 0) {
              return el.sort(function(a,b) {
                return a-b;
            });
          }
          else return el.sort(function(a,b) {
              return b-a;
          })
      });
      arr = arr.toString().split(',');
      arr = arr.map((el) => el = Number(el));
      if (arr === [0]) {
       arr = [];};
      return arr;
      }
    else return [];
}
