const ul = document.querySelector('#menu')
const menuBtn = document.querySelector('.btn-menu i')

function menuShow() {
  if (ul.classList.contains('open')) {
    ul.classList.remove('open')
  } else {
    ul.classList.add('open')
  }
}
