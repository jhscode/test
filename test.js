function cycle(current, move, start, end) {
  const arr = [];
  const totalArray = end - start;
  if(current < start || current > end) {
    return -1 
  } else {
    for(let i = 0; i < totalArray + 1; i++) {
      arr.push(start);
      start ++;
    }
    const currentElement = arr.indexOf(current);
    const moveElement = (((currentElement + move) % arr.length + arr.length) % arr.length);
    return arr[moveElement];
  }
}