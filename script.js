// Задание 1 
// const cubeNum = (num) => (num ** 3);
// console.log(cubeNum(2) + cubeNum(3));

// Задание 2
// const salary = (money) => {
//     money = money * 0.87;
//     return money;
// }

// let usermoney = prompt('Введите свою зарплату');
// if (isNaN(usermoney)) {
//     console.log(`Значение задано неверно`);
// } else {
//     usermoney = salary(usermoney);
//     console.log(`Размер заработной платы за вычетом налогов равен значение ${salary(usermoney)}`);

// }

// Задание 3
// function biggerNum(a, b, c) {
//     if (a > b) {
//         if (a > c) {
//             console.log(`${a} - самое большое число`);
//         } else {
//             console.log(`${c} - самое большое число`);
//         }
//     } else {
//         if (b > c) {
//             console.log(`${b} - самое большое число`);
//         } else {
//             console.log(`${c} - самое большое число`);
//         }
//     }

// }
// let num1 = Number(prompt('Введите первое число'));
// let num2 = Number(prompt('Введите первое число'));
// let num3 = Number(prompt('Введите первое число'));
// biggerNum(num1, num2, num3);
// Задание 4
// const sum = (a, b) => (a + b);

// function diff(a, b) {
//     if (a > b) {
//         return a - b;
//     } else {
//         return b - a;
//     }
//     if (a === b) {
//         return 0;
//     }

// }
// const prodnum = (a, b) => (a * b);
// const div = (a, b) => (a / b);
// let usernum1 = Number(prompt('Введите первое число'));
// let usernum2 = Number(prompt('Введите первое число'));
// console.log(sum(usernum1, usernum2));
// console.log(diff(usernum1, usernum2));
// console.log(prodnum(usernum1, usernum2));
// console.log(div(usernum1, usernum2));