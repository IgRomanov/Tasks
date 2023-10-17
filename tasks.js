// Как вывести 3-й символ? 1-й? Последний?

let str = 'Всем привет'; 

str.charAt(2); // 3 символ
str[2]; // 3 символ
str.slice(2, 3); // 3 символ

str.charAt(str.length - 1);
str[length-1]; // 3 символ
str.slice(2, 3); // 3 символ


// Можем ли мы заменить в строке:
// Я изучаю JavaScipt
// символ ю на другой? Если да, то как?
// Можем ли заменить слово JavaScript на 'Frontend`?

'Я изучаю JavaScript'.replace('ю', 'л'); // Я изучал JavaScipt
'Я изучаю JavaScript'.replace('JavaScript', 'Frontend'); // Я изучаю Frontend
// Также существует метод replaceAll(), который заменяет все вхождения указанных символов или подстрок

// Дан массив элементов
['cat', 'dog', 'parrot', 'horse']
// Как узнать индекс элемента 'parrot'?
// Приветствуется решение несколькими способами

let animals = ['cat', 'dog', 'parrot', 'horse'];
animals.indexOf('parrot') // 2

let parrotIndex;
for (let i=0; i<animals.length; i++) {
    if (animals[i] === 'parrot') {
        parrotIndex == i;
        break;
    }
}

// Дан массив элементов
['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion']
// Как удалить элемент 'fish'?
// Как удалить элемент 'cat'?
// Как удалить последние 2 элемента?

let arr = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
arr.splice(4, 1)

arr.shift();
arr.splice(0, 1)

arr.splice(5, 2)
arr.splice(-2, 2)


// Дан массив:

[31, 10, 'chicken', 9, 'fish', 10]
// Как отфильтровать исходный массив так, чтобы получить массив, где будут только строки?
// Как отфильтровать исходный массив так, чтобы получить массив, где будут только элементы со значением 10?

let mixedArr = [31, 10, 'chicken', 9, 'fish', 10];

let strArr = mixedArr.filter(el => typeof el === 'number');
let tenArr = mixedArr.filter(el => el === 10);

// Вам дам объект
const person = {
  firstName: 'Jack',
  lastName: 'Sparrow',
  age: 25,
  location: 'Caribbean sea',
}   
// 1) Необходимо вывести в консоль браузера все свойства и значения объекта person в следующем виде
// <property>: <value>

for (let key in person) {
    console.log(`${key}: ${person[key]}`)
    
}