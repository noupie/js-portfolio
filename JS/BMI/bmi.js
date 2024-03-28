
let bmiCal = '';

document.querySelector('button').onclick =


function bmiCalculator(){

  let height = parseInt(document.getElementById('yourHeight').value);
  let weight = parseInt(document.getElementById('yourWeight').value);

  if (height == NaN && weight == NaN){ 
  console.log('invalid');
}
 else {
  let heightSquare = height*height;
 
  let bmiCalculator = ((weight/heightSquare)*10000);
  
  console.log(bmiCalculator) ;
 
 bmiCal= bmiCalculator.toFixed(1);
 console.log(bmiCal) ;
}
/*changes starts here*/
let result='';
if (bmiCal<18.6){
 result =`you are underweight`;
} else if (bmiCal>=18.6 && bmiCal<=25){
  result =`you have normal weight`
} else if (bmiCal<25 && bmiCal<=29.9){
  result =`you are overweight`
} else if (bmiCal>29.9){
  result =`you have obesity`
}

document.querySelector('.final').innerHTML =


`<p class="final" >your BMI = <span class="result" >${bmiCal}</span> you have  <span class="result" >${result}</span> .</p>`;

}

