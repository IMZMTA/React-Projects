export function generateArr(n) {
  let arr = new Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }

  return arr;
}

export function genPoint() {
  return Math.ceil(Math.random()*6);
}

export function Sum(arr){
  return arr.reduce((sum,curr)=> sum + curr, 0 );
}

// export function wSum(arr){
//   return arr.reduce((sum, curr) => {
//     return sum + curr;
//   }, 0);
// }
