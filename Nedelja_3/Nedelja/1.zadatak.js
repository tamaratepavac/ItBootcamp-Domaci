

//Написати функцију која исписује све елементе низа који су дељиви са 5

function divisibleByFive(arr){
    arr.forEach(element => {
        if (!(element % 5)) {
            console.log(element)
        }        
    })
}

divisibleByFive([1,2,3,4,5,10,15,23,1,5])