
let red = ' '
let visina = 5


for (let i = 0; i <= visina; i++) {
    for (k = 1; k <= visina-i; k++) 
    red += ' '
    for (j = 1; j <= i; j++) 
    red += '#' 
    red += '\n'
}
    console.log(red)

