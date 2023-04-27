const mainImage = document.querySelector('.mainImage');

let windowWidth = window.innerWidth;

let imageX = (windowWidth - 900) / 2;
let imageY = 50;

let x, y;

mainImage.addEventListener('mousemove',(e)=>{
    x = e.clientX;
    y = e.clientY;

magnify();

})

function magnify(){
    mainImage.style.backgroundPositionX = `${(x - imageX)/10}%`;
    mainImage.style.backgroundPositionY = `${(y - imageY)/10}%`;

}