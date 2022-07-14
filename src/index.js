
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix === undefined) {
        return [];
      }
    var nameLengths = matrix.map(function(item, index) {
        if(index === 0 || index % 2 === 0){
          return item;
        } else if(index % 2 !== 0 ) {
          return item.reverse();
        }
      });
        return nameLengths.flat();
}
