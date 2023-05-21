let prom1 = new Promise((resolve) => {
  let time = Math.floor((Math.random()*3+1) * 1000);
  setTimeout(() => {
    resolve(time);
  }, time);
});
let prom2 = new Promise((resolve) => {
  let time = Math.floor((Math.random()*3+1) * 1000);
  setTimeout(() => {
    resolve(time);
  }, time);
});
let prom3 = new Promise((resolve) => {
  let time = Math.floor((Math.random()*3+1) * 1000);
  setTimeout(() => {
    resolve(time);
  }, time);
});
const output = document.getElementById("output");
output.innerHTML = ` <tr>
<td>Loading...</td>
<td>Loading...</td>
</tr>`;
console.log(Promise.all([prom1, prom2, prom3]));
console.log(output);
const promise = Promise.all([prom1, prom2, prom3]);
promise.then((value) => {
  output.innerHTML = `<tr>
  <td>Promise 1</td>
  <td>${Math.floor(value[0]/1000)}</td>
</tr><tr>
<td>Promise 2</td>
<td>${Math.floor(value[1]/1000)}</td>
</tr><tr>
<td>Promise 3</td>
<td>${Math.floor(value[2]/1000)}</td>
</tr>`;
});
