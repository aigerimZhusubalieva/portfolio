/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

function lightMode(){
  document.getElementById("top").classList.toggle("headerLightMode");
  document.getElementById("top").classList.toggle("headerDarkMode");
  if(document.getElementById("mode").innerHTML == "Dark Mode"){
    document.getElementById("mode").innerHTML = "Light Mode";
    document.getElementById("accessible").src = "./images/accessibilityW.png";
  }else{
    document.getElementById("mode").innerHTML = "Dark Mode";
    document.getElementById("accessible").src = "./images/accessibilityB.png";
  }
  document.body.classList.toggle("bodyLightMode");
  document.body.classList.toggle("bodyDarktMode");
  let items = document.querySelectorAll('.item');

  items.forEach(item => {
    item.classList.toggle("itemDark");
    item.classList.toggle("itemLight")
  });
}

let n = 0
function fontColor(){
  if(n%5==0){
    document.querySelector(':root').style.setProperty('--pink', '#8900e1');
    n = n+1;
  }else if(n%5==1){
    document.querySelector(':root').style.setProperty('--pink', '#009b8a');
    n = n+1;
  }else if(n%5==2){
    document.querySelector(':root').style.setProperty('--pink', '#59B2D1');
    n = n+1;
  }else if(n%5==3){
    document.querySelector(':root').style.setProperty('--pink', '#f4ec51');
    document.getElementById('emailBtn').style.color = "var(--black)";
    document.getElementById('getInTouchBtn').style.color = "var(--black)";
    n = n+1;
  }else if(n%5==4){
    document.querySelector(':root').style.setProperty('--pink', '#ff3258');
    n = n+1;
  }
}

let m = 0
function fontFamily(){
  if(m%5==0){
    document.querySelector(':root').style.setProperty('--font-stack', "Quicksand");
    document.querySelector(':root').style.setProperty('--font-secondary', "Quicksand");
    document.body.style.fontFamily = "Quicksand";
    m = m+1;
  }else if(m%5==1){
    document.querySelector(':root').style.setProperty('--font-stack', "Judson");
    document.querySelector(':root').style.setProperty('--font-secondary', "Archivo Black");
    document.body.style.fontFamily = "Judson";
    m = m+1;
  }else if(m%5==2){
    document.querySelector(':root').style.setProperty('--font-stack', "Abril Fatface");
    document.querySelector(':root').style.setProperty('--font-secondary', "Abril Fatface");
    document.body.style.fontFamily = "Roboto";
    m = m+1;
  }else if(m%5==3){
    document.querySelector(':root').style.setProperty('--font-stack', "Montserrat");
    document.querySelector(':root').style.setProperty('--font-secondary', "Montserrat");
    document.body.style.fontFamily = "Lora";
    m = m+1;
  }else if(m%5==4){
    document.querySelector(':root').style.setProperty('--font-stack', "Hk Grotesk");
    document.querySelector(':root').style.setProperty('--font-secondary', "Jost");
    document.body.style.fontFamily = "Jost";
    m = m+1;
  }
}

let l = 0
function fontSize(){
  if(l%3==0){
    document.querySelector(':root').style.setProperty('--font-size-small', "1.8rem");
    document.querySelector(':root').style.setProperty('--font-size-normal', "2.2rem");
    document.querySelector(':root').style.setProperty('--font-size-medium', "2.8rem");
    document.querySelector(':root').style.setProperty('--font-size-medium-1', "3.6rem");
    document.querySelector(':root').style.setProperty('--font-size-large', "5.5rem");
    document.querySelector(':root').style.setProperty('--font-size-huge', "7.5rem");
    l = l+1;
  }else if(l%3==1){
    document.querySelector(':root').style.setProperty('--font-size-small', "2.1rem");
    document.querySelector(':root').style.setProperty('--font-size-normal', "2.5rem");
    document.querySelector(':root').style.setProperty('--font-size-medium', "3.1rem");
    document.querySelector(':root').style.setProperty('--font-size-medium-1', "3.9rem");
    document.querySelector(':root').style.setProperty('--font-size-large', "5.8rem");
    document.querySelector(':root').style.setProperty('--font-size-huge', "7.8rem");
    l = l+1;
  }else if(l%3==2){
    document.querySelector(':root').style.setProperty('--font-size-small', "2.4rem");
    document.querySelector(':root').style.setProperty('--font-size-normal', "2.8rem");
    document.querySelector(':root').style.setProperty('--font-size-medium', "3.4rem");
    document.querySelector(':root').style.setProperty('--font-size-medium-1', "4.3rem");
    document.querySelector(':root').style.setProperty('--font-size-large', "6.1rem");
    document.querySelector(':root').style.setProperty('--font-size-huge', "8.1rem");
    document.body.style.fontFamily = "Roboto";
    l = l+1;
  }
}

