let prom1 = new Promise((resolve) => {
  let time = Math.floor(Math.random() * 10);
  setTimeout(() => {
    resolve(time);
  }, time);
});
let prom2 = new Promise((resolve) => {
  let time = Math.floor(Math.random() * 10);
  setTimeout(() => {
    resolve(time);
  }, time);
});
let prom3 = new Promise((resolve) => {
  let time = Math.floor(Math.random() * 10);
  setTimeout(() => {
    resolve(time);
  }, time);
});
const output = document.getElementById("output");
console.log(Promise.all([prom1, prom2, prom3]));
console.log(output);
const promise = Promise.all([prom1, prom2, prom3]);
promise.then((value) => {
  output.innerHTML = `<tr>
  <td>Promise 1</td>
  <td>${value[0]}</td>
</tr><tr>
<td>Promise 2</td>
<td>${value[1]}</td>
</tr><tr>
<td>Promise 3</td>
<td>${value[2]}</td>
</tr>`;
});
