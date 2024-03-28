

document.querySelector(".generate").addEventListener("click", function() {

  let options =["chicken fajita", "beef fajita", "noodles", "butter chicken", "biryani", "grilled chicken", "mixed vegetables broth","steak and potato", "grilled fish"];
  let random = Math.floor(Math.random() * 9);

  document.querySelector('.result').innerHTML=`${options[random]} is for lunch today!`


});

