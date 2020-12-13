console.log('sprite.js')

// import each svg into JS
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./../assets/images/svg', true, /\.svg$/));

// fetch('./../../dist/sprite.svg').then(res => {
//   return res.text();
// }).then(data => {
//   document.getElementsByClassName('svg-icons').innerHTML = data;
// });