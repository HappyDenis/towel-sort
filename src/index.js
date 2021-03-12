
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if  (typeof(matrix) == 'undefined') return ([]);
  if  (matrix.length == 0) return ([]);

  var matrix2 = [];
  if (matrix == 'undefined') {return (matrix = [])}
for (var i = 0; i < matrix.length; i++) {
  if (i % 2 == 0) { 
    matrix2 += matrix[i].join(' ');}
  if (i % 2 > 0) { 
    matrix2 += matrix[i].reverse().join(' ');}

  if (matrix.length-1 > i > 0) { matrix2 += ' ';}
  //console.log((matrix2));
  }
  return (matrix2.split(' '));
}