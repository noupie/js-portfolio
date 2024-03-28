let randomNum = Math.floor(Math.random()*12)+1;




document.querySelector('button').onclick = function reveal(){
  document.querySelector('.result').innerHTML = `<img class="pic" src="./assests/${randomNum}.jpg" />`;
  if (randomNum==1){
    document.querySelector('.youAre').innerHTML = `you are Akai!`; 
  } else if (randomNum==2){
    document.querySelector('.youAre').innerHTML = `you are Amoro!`; 
} else if (randomNum==3){
  document.querySelector('.youAre').innerHTML = `you are Ayumi!`; 
} else if (randomNum==4) {
  document.querySelector('.youAre').innerHTML = `you are Ayumi!`; 
} else if (randomNum==5){
  document.querySelector('.youAre').innerHTML = `you are Conan!`; 
} else if (randomNum==6){
  document.querySelector('.youAre').innerHTML = `you are Gin!`; 
} else if (randomNum==7){
  document.querySelector('.youAre').innerHTML = `you are Heiji!`; 
} else if (randomNum==8){
  document.querySelector('.youAre').innerHTML = `you are Kazuha!`; 
} else if (randomNum==9){
  document.querySelector('.youAre').innerHTML = `you are KID!`; 
} else if (randomNum==10){
  document.querySelector('.youAre').innerHTML = `you are Sherry!`; 
} else if (randomNum==11){
  document.querySelector('.youAre').innerHTML = `you are Ran!`; 
} else if (randomNum==12){
  document.querySelector('.youAre').innerHTML = `you are Vermouth!`; 
}
}