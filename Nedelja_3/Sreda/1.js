
//Написати функцију која враћа максимум од 3 броја (Параметри функције су 3 броја)


function maximum(a, b, c) {

    let max = a < b ? b : a
    return max < c ? c : max

}
console.log(maximum(30, 25, -5))