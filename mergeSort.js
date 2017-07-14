function merge(left, right) {   
  var result = [];   
  while (left.length > 0 && right.length > 0) {   
      if (left[0] < right[0]) {   
          result.push(left.shift());   
      } else {   
          result.push(right.shift());   
      } 
      //this present in what order this two merge  
  }   
  return result.concat(left).concat(right);  
  //this present merge 
}  

function mergeSort(items) {   
  if (items.length == 1) {   
      return items;   
  }   
  var work = [];   
  for (var i = 0,len = items.length; i < len; i++) {   
      work.push([items[i]]);
      //here,the first time is sth like [[3],[4],[1],[9]]   
  }   
  work.push([]); //in case of odd number of items   
  for (var lim = len; lim > 1; lim = (lim + 1) / 2) {   
      for (var j = 0, k = 0; k < lim; j++, k += 2) {   
          work[j] = merge(work[k], work[k + 1]);
          //constrast the nearby two array using merge function,   
      }   
      work[j] = []; //in case of odd number of items   
  }   
  return work[0];   
} 

var ordered=mergeSort([4,7,2,9,3,0,6]);
console.log(ordered);