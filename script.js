var splashScreen = document.querySelector('.splash');

let escondido = true

splashScreen.addEventListener('click',()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  },610)
})

function clicou(){
  hamburger = document.getElementById('hamburger')
  if(escondido == true){
    hamburger.style.display = 'flex'
    escondido = false
  }else{
    hamburger.style.display = 'none'
    escondido = true
  }
}