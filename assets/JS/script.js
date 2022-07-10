const ul = document.querySelector('#menu')
const menuBtn = document.querySelector('.btn-menu i')
const items = document.querySelectorAll('[data-anime]')

function menuShow() {
  if (ul.classList.contains('open')) {
    ul.classList.remove('open')
  } else {
    ul.classList.add('open')
  }
}

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85
  items.forEach(element => {
    if (windowTop > element.offsetTop) {
      element.classList.add('animate')
    } else {
      element.classList.remove('animate')
    }
  })
}

animeScroll()

window.addEventListener('scroll', () => {
  animeScroll()
})
