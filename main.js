// let num1 = +prompt('Введите первое число')
// let num2 = +prompt('Введите второе число')

// let ans = alert(num1 + num2) // нахождение суммы
// let avg = alert((num1 + num2)/2) // среднее арифметическое
// let sqrt = alert((num1**2 + num2**2)/2) //среднее арифметическое их квадратов



//    calculator

// let btn = document.querySelector('.Btn')

// btn.addEventListener('click', calc)

// function calc(){
//     let num1 = document.querySelectorAll('.number')[0].value
//     let num2 = document.querySelectorAll('.number')[1].value
//     let sign = document.querySelector('.sign').value
//     let result = document.querySelector('.result')
//     if(sign === '+'){
//         result.innerHTML = Number(num1) + Number(num2)
//     }else if(sign === '-'){
//         result.innerHTML = Number(num1) - Number(num2)
//     }else if(sign === '*'){
//         result.innerHTML = Number(num1) * Number(num2)
//     }else if(sign === '/'){
//         result.innerHTML = Number(num1) / Number(num2)
//     }
//     return;
    
// }

// дз 2

let new_array = [1, 2, 3, 4]


function sum (value) {
    let sum1 = 0
    for ( i = 0; i < new_array.length; i++) {
        sum1 += value[i]
    }
    return sum1
}

let answer = sum(new_array)
console.log(answer);

function multy (value1) {
    let sum2 = 1
    for ( i = 0; i < new_array.length; i++) {
        sum2 *= value1[i]
    }
    return sum2
}

let result = multy(new_array)
console.log(result);

let even = []
let odd = []

for(i = 0; i < new_array.length; i++){
    if((new_array[i] % 2) == 0 ){
        even.push(new_array[i])
    } else {
        odd.push(new_array[i])
    }
}

console.log(even);
console.log(odd);


let unic = []

let random = [1,1,2,2,2,3,3,3,4,4,4,5,5,6,6]

function uniq(value, index, array) {
    return array.indexOf(value) === index
}
let uniqe = random.filter(uniq)

console.log(uniqe);


let numbers = [1, 3,4,6,-4,-65, 54,-45,44,-4]
let positive = []
let negative = []

for(i = 0; i < numbers.length; i++){
    if((numbers[i]) > 0) {
        positive.push(numbers[i])
    } else {
        negative.push(numbers[i])
    }
}

console.log(positive);
console.log(negative);

let big = []
let small = []

for(i = 0; i < numbers.length; i++) {
    if((numbers[i]) > 39) {
        big.push(numbers[i])
    } else {
        small.push(numbers[i])
    }
}

console.log(big);
console.log(small);

let even_num = []


for(i = 0; i < numbers.length; i++){
    if((i % 2) == 0) {
        even_num.push(numbers[i])
    }
}

console.log(even_num);



