function scrollHeader(){
    const nav = document.querySelector('header')
    
    if(this.scrollY >= 100) nav.classList.add('shadow'); else nav.classList.remove('shadow')
}
window.addEventListener('scroll', scrollHeader);
var menu = document.querySelector('.menu');
var list = document.querySelector('.nav-bar .nav .list');
var li = document.querySelector('.nav-bar .nav .list')
menu.addEventListener('click', function(){
    list.classList.toggle('show')
})
li.addEventListener('click', function(){
    list.classList.toggle('show')
})
function scrollLeft1(){
    const left = document.querySelector('.skill .left1')
    const right = document.querySelector('.skill .right1')
    if(this.scrollY >= 200){
        left.classList.add('show-left');
        right.classList.add('show-right')
    }  else {
        left.classList.remove('show-left')
        right.classList.remove('show-right')
}}
window.addEventListener('scroll', scrollLeft1);
function scrollLeft2(){
    const left = document.querySelector('.skill .left2')
    const right = document.querySelector('.skill .right2')
    if(this.scrollY >= 700){
        left.classList.add('show-left');
        right.classList.add('show-right')
    }  else {
        left.classList.remove('show-left')
        right.classList.remove('show-right')
}
}
window.addEventListener('scroll', scrollLeft2);
function scrollLeft3(){
    const left = document.querySelector('.skill .left3')
    const right = document.querySelector('.skill .right3')
    if(this.scrollY >= 900){
        left.classList.add('show-left');
        right.classList.add('show-right')
    }  else {
        left.classList.remove('show-left')
        right.classList.remove('show-right')
}
}
window.addEventListener('scroll', scrollLeft3);
var indexvalue = 1;
showimg(indexvalue);
function side_slide(e){
    showimg(indexvalue += e);
}

function showimg(e){
    var i ;
    const img = document.querySelectorAll('.content img');
    
    if(e > img.length){indexvalue = 1}
    if(e < 1){indexvalue = img.length}
    for(i=0 ; i<img.length ; i++){
        img[i].style.display = "none"
    }
    img[indexvalue-1].style.display = "block";
}