
let Boutton = document.querySelector(".LancezLeC")
let nombre = document.querySelector (".Numero")
let bouchon = document.querySelector(".bouchon")
let number = 10
let bravo = document.querySelector(".Bravo")

Boutton.addEventListener (
  'click',
  function () {
    setInterval(decollage, 1000);
    let random = Math.floor(Math.random() * 2);
    console.log (random);


  function decollage() {
    setTimeout(function(){
     bouchon.style.opacity = '1'

   },10000)

    if(number > 0){
     nombre.innerHTML = (number -= 1)
    } else {
    bouchon.style.transform = "translateY(-900px)"
    bouchon.style.transition = "all 5s"
    setTimeout(function() {
      bravo.style.opacity = '1'


    if (random == 0){
        bouchon.setAttribute('src', 'images/bouchonrose.png')

      } else {
          bouchon.setAttribute('src', 'images/bouchon.jpg')

      }


    }, 5000)

  }
}
})
