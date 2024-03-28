let randomNum = Math.floor(Math.random()*12)+1;

document.querySelector('button').onclick = function reveal(){
  document.querySelector('.result').innerHTML = `<img class="pic" src="./assests/${randomNum}.jpg" />`;
}