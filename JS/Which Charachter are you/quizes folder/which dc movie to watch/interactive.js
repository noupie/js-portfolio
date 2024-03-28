

document.querySelector('button').onclick = function reveal(){
  let randomNum = Math.floor(Math.random()*26)+1;
  document.querySelector('.js-result').innerHTML = `<img class="pic" src="./assests/${randomNum}.jpg" />`;
  if (randomNum==1){
    document.querySelector('.js-movie-name').innerHTML = `The Time-Bombed Skyscraper`; 
  } else if (randomNum==2){
    document.querySelector('.js-movie-name').innerHTML = `The Fourteenth Target`; 
} else if (randomNum==3){
  document.querySelector('.js-movie-name').innerHTML = `	The Last Wizard of the Century`; 
} else if (randomNum==4) {
  document.querySelector('.js-movie-name').innerHTML = `Captured in Her Eyes`; 
} else if (randomNum==5){
  document.querySelector('.js-movie-name').innerHTML = `Countdown to Heaven`; 
} else if (randomNum==6){
  document.querySelector('.js-movie-name').innerHTML = `The Phantom of Baker Street`; 
} else if (randomNum==7){
  document.querySelector('.js-movie-name').innerHTML = `Crossroad in the Ancient Capital`; 
} else if (randomNum==8){
  document.querySelector('.js-movie-name').innerHTML = `Magician of the Silver Sky`; 
} else if (randomNum==9){
  document.querySelector('.js-movie-name').innerHTML = `Strategy Above the Depths`; 
} else if (randomNum==10){
  document.querySelector('.js-movie-name').innerHTML = `The Private Eyes' Requiem`; 
} else if (randomNum==11){
  document.querySelector('.js-movie-name').innerHTML = `Jolly Roger in the Deep Azure`; 
} else if (randomNum==12){
  document.querySelector('.js-movie-name').innerHTML = `Full Score of Fear`; 
} else if (randomNum==13){
  document.querySelector('.js-movie-name').innerHTML = `The Raven Chaser`; 
} else if (randomNum==14){
  document.querySelector('.js-movie-name').innerHTML = `The Lost Ship in the Sky`; 
} else if (randomNum==15){
  document.querySelector('.js-movie-name').innerHTML = `Quarter of Silence`; 
} else if (randomNum==16){
  document.querySelector('.js-movie-name').innerHTML = `The Eleventh Striker`; 
} else if (randomNum==17){
  document.querySelector('.js-movie-name').innerHTML = `Private Eye in the Distant Sea`; 
} else if (randomNum==18){
  document.querySelector('.js-movie-name').innerHTML = `Dimensional Sniper`; 
} else if (randomNum==19){
  document.querySelector('.js-movie-name').innerHTML = `Sunflowers of Inferno`; 
} else if (randomNum==20){
  document.querySelector('.js-movie-name').innerHTML = `The Darkest Nightmare`; 
} else if (randomNum==21){
  document.querySelector('.js-movie-name').innerHTML = `The Crimson Love Letter`; 
} else if (randomNum==22){
  document.querySelector('.js-movie-name').innerHTML = `Zero the Enforcer`; 
} else if (randomNum==23){
  document.querySelector('.js-movie-name').innerHTML = `The Fist of Blue Sapphire`; 
} else if (randomNum==24){
  document.querySelector('.js-movie-name').innerHTML = `The Scarlet Bullet`; 
} else if (randomNum==25){
  document.querySelector('.js-movie-name').innerHTML = `The Bride of Halloween`; 
} else if (randomNum==26){
  document.querySelector('.js-movie-name').innerHTML = `Black Iron Submarine`; 
}
}
