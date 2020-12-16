console.log('sprite.js')

// import each svg into JS
function requireAll(r) {
  r.keys().forEach(r)
}
requireAll(require.context('./../assets/images/svg', true, /\.svg$/))

// extract
// import symbolData from './../assets/images/sprite.svg';

// console.log(symbolData);

// window.addEventListener('DOMContentLoaded', () => {
//   const usage = `<svg><use xlink:href="${symbolData.url}"></use></svg>`;

//   document.body.innerHTML = `${usage}`;
// });

// fetch(symbolData).then(res => {
//   return res.text()
// }).then(data => {
//   document.getElementById('sprite').innerHTML = data
// })