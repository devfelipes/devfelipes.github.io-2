function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


var Observer = new IntersectionObserver((elems) => {
  elems.forEach((ele) => {
    if (ele.isIntersecting){
      ele.target.classList.add('show')
    }   else{
      ele.target.classList.remove('show')
    }
  })
})

var mov = document.querySelectorAll('.hidden')
 
mov.forEach((ele) =>{
  Observer.observe(ele)
})

document.addEventListener('DOMContentLoaded', function() {
function text1 (){
  var textEscrita1 = document.querySelector('#escrita1');
textEscrita1.style.borderRight = '2px solid rgba(0, 0, 0, 0.75)';
textEscrita1.style.animation = 'cursorpiscar 500ms steps(40) infinite normal both, mostrartexto 2.5s steps(40) 0s normal both';

setTimeout(() => {
  textEscrita1.style.width ='18em';
  textEscrita1.style.border =' transparent';
  textEscrita1.style.animation = null;
}, 1400); 
}

function text2 (){
  var textEscrita2 = document.querySelector('#escrita2');
  textEscrita2.style.borderRight = '2px solid rgba(0, 0, 0, 0.75)';
  textEscrita2.style.animation = 'cursorpiscar 500ms steps(40) infinite normal both, mostrartexto 2s steps(40) 0s normal both';
  
  setTimeout(() => {
    textEscrita2.style.width ='18em';
    textEscrita2.style.border =' transparent';
    textEscrita2.style.animation = null;
  }, 1000); 
}
function text3 (){
  var textEscrita3 = document.querySelector('#escrita3');
  textEscrita3.style.borderRight = '2px solid rgba(0, 0, 0, 0.75)';
  textEscrita3.style.animation = 'cursorpiscar 500ms steps(40) infinite normal both, mostrartexto 1s steps(40) 0s normal both';
  var textos = [ "Desenvolvedor Full Stack", "Developer Full Stack", "Web Developer", "Flutter Developer", "Python Developer", "HTML Developer", "JavaScript Developer", "Dart Developer", "SQL Developer"];

  var currentIndex = 0;

  function colocartexto() {
    setTimeout(()=>{
    textEscrita3.style.animation = 'cursorpiscar 500ms steps(40) infinite normal both, escondertexto 1s steps(40) 0s normal both';

    },1800)
    textEscrita3.innerText = textos[currentIndex];
    currentIndex = (currentIndex + 1) % textos.length;
    textEscrita3.style.animation = 'cursorpiscar 500ms steps(40) infinite normal both, mostrartexto 1s steps(40) 0s normal both';
  }
  colocartexto(); 
  setInterval(colocartexto, 3000);

}
text1()
setTimeout(() => {
  text2();
}, 1000); 

setTimeout(() => {
  text3();
}, 1700); 

});


var btnScrollToTop = document.getElementById("btnScrollToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        btnScrollToTop.style.display = "flex";
    } else {
        btnScrollToTop.style.display = "none";
    }
});
btnScrollToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});