
msg = ''

for(let i = 1; i <= 100; i++, msg = '') {
    if (i % 3 == 0) msg += 'Fizz' 
    if (i % 5 == 0) msg += 'Buzz'
    if (i % 11 == 0) msg += 'Zuzz'
    console.log(msg || i) 
} 


