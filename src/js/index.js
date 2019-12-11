

const burger = document.querySelector('#btn-burger')
const wrapper = document.querySelector('#wrapper-menu')


burger.addEventListener('click', toogleBurge )

function toogleBurge() {
      if(wrapper.classList.contains('showMenu')){
          return wrapper.classList.remove('showMenu')
      }

      wrapper.classList.add('showMenu')

}