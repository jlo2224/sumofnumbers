function sumFor(ls){
  let total = 0;
  for (let item of ls){
    total += item;
  }
  return total;
}

function sumWhile(ls){
  let i = 0;
  let total = 0;
  while (i < ls.length){
    total += ls[i];
    i++;
  }
  return total;
}
function sumRecursion(ls){
  return ls.pop() + sumRecursion(ls);
}

function sumTheSimpleWay(ls){
  return _.reduce(ls, function(counter, add) {return counter + add;}, 0)
}