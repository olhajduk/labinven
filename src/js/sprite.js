console.log('sprite.js')

// import each svg into JS
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./../assets/images/svg', true, /\.svg$/));

// TODO: Fix path! agrrr
fetch('https://cdn.jsdelivr.net/gh/olhajduk/labinven@webpack/dist/sprite.svg').then(res => {
  return res.text();
}).then(data => {
  document.getElementById('svg-icons').innerHTML = data;
});