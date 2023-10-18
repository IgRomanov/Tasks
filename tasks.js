// Как вывести 3-й символ? 1-й? Последний?

let str = 'Всем привет'; 

console.log(str.charAt(2)); // 3 символ
console.log(str[2]); // 3 символ
console.log(str.slice(2, 3)); // 3 символ

console.log(str.charAt(str.length - 1));
console.log(str[length-1]); // 3 символ
console.log(str.slice(2, 3)); // 3 символ


// Можем ли мы заменить в строке:
// Я изучаю JavaScipt
// символ ю на другой? Если да, то как?
// Можем ли заменить слово JavaScript на 'Frontend`?

console.log('Я изучаю JavaScript'.replace('ю', 'л')); // Я изучал JavaScipt
console.log('Я изучаю JavaScript'.replace('JavaScript', 'Frontend')); // Я изучаю Frontend
// Также существует метод replaceAll(), который заменяет все вхождения указанных символов или подстрок

// Дан массив элементов
['cat', 'dog', 'parrot', 'horse']
// Как узнать индекс элемента 'parrot'?
// Приветствуется решение несколькими способами

let animals = ['cat', 'dog', 'parrot', 'horse'];
console.log(animals.indexOf('parrot')) // 2

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
arr.splice(4, 1);

arr.shift();
arr.splice(0, 1);

arr.splice(5, 2);
arr.splice(-2, 2);


// Дан массив:
[31, 10, 'chicken', 9, 'fish', 10];
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
};

// 2) Необходимо вывести в консоль браузера все свойства и значения объекта person таким образом, чтобы вывод выглядел следующим образом:
// First name: Jack
// Last name: Sparrow
// Age: 25 ages
// Where to find: Caribbean sea

for (let key in person) {
    switch(key) {
        case 'firstNmae': {
            console.log(`First name: ${person[key]}`);
            break;
        }

        case 'lastName': {
            console.log(`Last name: ${person[key]}`);
            break;
        }

        case 'age': {
            console.log(`Age: ${person[key]} ages`);
            break;
        }

        case 'location': {
            console.log(`Where to find: ${person[key]}`);
            break;
        }

    }
}

//Написать функцию, которая будет сравнивать 2 объекта и возращать true или false.

function compareObjects(a, b) {
    return JSON.stringify(a) === JSON.stringify(b); // если поля объектов в одинаковом порядке
}

let objA = {
    a: '1024',
    b: 5,
}

let objB = {
    a: '1024',
    b: 5,
}

console.log(deepCompareObjects(obj1, obj2)) 

function compareObjects(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }
    for (let key in a) {
      if (!b[key]) {
        return false;
      }
      if (a[key] !== b[key]) {
        if (typeof a[key] === "object" && typeof b[key] === "object") {        
          return compareObjects(a[key], b[key]);
        }
        return false;
      }
    }
    return true;
  }
  
let obj1 = {
    b: 5,
    c: {
        q: '12',
        g: {
        a: 5,
        b: 4
        },
    },
}

let obj2 = {
    b: 5,
    c: {
        q: '12',
        g: {
        a: 5,
        b: 4
        },
    },
}

console.log(compareObjects(obj1, obj2)) // true
