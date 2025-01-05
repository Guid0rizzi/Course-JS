let i = 0;
 while (i <= 10) {
  console.log(i);
  i++
 }
  function random(min,max) {
    const r = Math.random( ) * (max - min) + min
    return Math.floor(r)
  }
  
  // console.log(rand);
  const min = 1
  const max = 70 
  let rand = random(1, 60)
  while (rand !== 10) {
    rand = random(min, max)
    console.log(rand);
  }
  console.log();
  do {
    rand = random(min, max)
    console.log(rand);
  } while (rand !== 10);