let x = 90
let y = 7

function addTwo(){
    let z = x + y
}
const productPrices = [25.99, 15.49, 10.99, 34.99, 8.99]
function arrangeHL(){
    return productPrices.sort((a,b)=>a-b).reverse()
}
function calcSum(){
    return productPrices.reduce((x,y)=> x+y)
}
function calculateAverage(){
    return productPrices.reduce((x,y)=> x+y)/productPrices
}
function calcRange(){
    let min = arrangeHL()[0]
    let max = arrangeHL()[arrangeHL().length-1]
    return min-max
}
function calculateRange(){
    return Math.max(...productPrices) = math.min(...productPrices)
}
function add10(){
    return productPrices.map(price => price + 10).map(x => Number(x.toFixed(2)))
}

function wholeNumber(){
    return productPrices.map(price => parseInt(prices));
}

function roundWholeNum(){
    return productPrices.map(price => math.round(price)).filter(x => x % 3 === 0)
}

function divideBy3(){
    return productPrices.filter(price => math.round(price) % 3 === 0)
}

    





