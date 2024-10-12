function printprops(o) {
  for (let p in o) {
    console.log(`${p}: ${o[p]}\n`);
  }
}

function distance(y1, y2, x1, x2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

function factorial(x){
  if(x<=1)return 1;
  return x *factorial(x-1);
}

pri
