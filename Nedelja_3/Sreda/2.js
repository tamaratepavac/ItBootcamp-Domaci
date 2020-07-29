
//Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм,  и цена пице)

let cena = 200
let poluprecnik = 5


function cenaPoCm2(poluprecnik, cena) {
    let povrsinaPice = poluprecnik ** 2 * Math.PI
    return Math.round(cena / povrsinaPice)
}

console.log(`Cena pice po cm² je: ${cenaPoCm2(poluprecnik, cena)} dinara`)