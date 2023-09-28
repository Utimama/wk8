const input = document.querySelector('input')
const para = document.querySelector('p')

const romanFig =() => {
    const units = ['','i', 'ii','iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix',]
    const tens = ['', 'x', 'xx','xxx', 'xl', 'l', 'lx', 'lxx', 'lxxx', 'xc']
    const huns = ['', 'c', 'cc','ccc', 'cd', 'd', 'dc', 'dcc', 'dccc', 'd']
    const thous = ['', 'm', 'mm','mmm']

    const num = input.value
    
    const valUnits = units[num]
    const valTen = tens[num[0]] + units[num[1]]
    const valHun = huns[num[0]] + tens[num[1]] + units[num[2]]
    const valThous = thous[num[0]] + huns[num[1]] + tens[num[2]] + units[num[3]]
    
    const answer = num.length == 1 ? valUnit : num.length == 2 ? valTen : num.length == 3 ? valHun : num.length == 
    4 ? valThous : 'Number is greater 3999'
    
    para.textContent = answer.toUpperCase() 
}

input.addEventListener('change', romanFig)