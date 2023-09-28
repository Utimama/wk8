const weight = document.getElementById('weight')
const height = document.getElementById('height')
const btn = document.querySelector('button')
const section = document.querySelector('section:last-of-type')
const para1 = document.createElement('p')
const para2 = document.createElement('p')
const para3 = document.createElement('p')

function bmi(){
    const wVal = weight.value 
    const hVal = height.value 
    const bmi = (wVal / Math.pow((hVal/100),2)).toFixed(2)

    
    para1.innerHtml = `BMI Result is ${bmi}kgm<sup>-2</sup>`

    section.append(para1)
    section.append(para2)
    section.append(para3) 

    alert(bmi)
}
btn.addEventListener('click', bmi)
let status
let recommendation

para2.innerHtml = bmi >= 30 ? status = 'status: Obesity : bmi >= 25 ? 
status ='
para3.innerHtml = bmi >= 30 ? recommendation =
