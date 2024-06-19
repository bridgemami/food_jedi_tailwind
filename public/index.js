const burger = document.getElementById('burger')
const menu = document.getElementById('menu')

burger.addEventListener('click', ()=> {
   return menu.classList.toggle('hidden')
})