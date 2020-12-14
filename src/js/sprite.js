console.log('sprite.js')

// import each svg into JS
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./../assets/images/svg', true, /\.svg$/));

fetch('https://cdn.jsdelivr.net/gh/olhajduk/labinven@gh-pages/dist/sprite.svg').then(res => {
  return res.text();
}).then(data => {
  document.getElementById('sprite').innerHTML = data;
});