const conan = document.querySelector('.js-conan');
const jin = document.querySelector('.js-jin');

function jump (){
   if(conan.classList !='jump'){
  conan.classList.add('jump');

  setTimeout(function (){
    conan.classList.remove('jump');
  }, 300);
 }
}
let isLive = setInterval(function (){
  let conanTop= parseInt(window.getComputedStyle(conan).getPropertyValue('top'));
  let  jinLeft = parseInt(window.getComputedStyle(jin).getPropertyValue('left'));

  if (jinLeft > 0 && jinLeft < 190 && conanTop > 70){
    alert('game over! press space to restart');
  }

}, 10);
document.addEventListener('keyup', function (event) {
  jump();
} )