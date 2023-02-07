const div = document.createElement('div')
const body = document.querySelector('body')
body.appendChild(div)
let knopka = 'вы нажали на кнопку'
const ul = `
<button class="s">a</button>
<button class="s">b</button>
<button class="s">c</button>
<button class="s">d</button>`

div.innerHTML = ul
body.addEventListener('click', function () {


    console.log(knopka);

})