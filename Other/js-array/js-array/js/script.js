/*
// Создание массива

let arr = new Array(); // Используется редко
let arr = [];
*/

//========================================================================================================================================================

// Значения массива
// Получение значений

/*
let arrOne = [
	'Ваня', // 0я позиция
	'Иштван', // 1я позиция
	'Оля', // 2я позиция
];
console.log(arrOne[1]);
console.log(arrOne[5]); // undefined
*/

/*
let arrTwo = [
	"Коля",
	{
		type: "JS",
		age: 36
	},
	true,
	function () {
		console.log('Привет, я Коля');
	}
];

console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);
console.log(arrTwo[2]);
arrTwo[3]();

// Многомерные массивы
let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
console.log(matrix);
console.log(matrix[0][1]);
*/
//========================================================================================================================================================

/*
// Длина массива. Свойство length

let arrOne = ['Ваня', 'Иштван', 'Оля',];
console.log(arrOne);
console.log(arrOne.length);

*/
/*
arrOne.length = 0;
console.log(arrOne);

// Таким образом, самый простой способ
// очистить массив – это arrOne.length = 0;

*/

//========================================================================================================================================================


// Доступ к массиву
/*
Напомню что массив является объектом и, следовательно,
ведёт себя как объект. Например, копируется по ссылке:
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(arr);

let arrNew = arr;

arrNew.length = 2;

console.log(arr);
*/

//========================================================================================================================================================

/*
// Изменение значений
let arr = ['Ваня', 'Иштван', 'Оля',];

// Меняем существующее
arr[0] = 'Коля';
console.log(arr);

// Добавляем новое
arr[3] = 'Ваня';
console.log(arr);
*/

//========================================================================================================================================================

// МЕТОДЫ МАССИВОВ

/*
Итак с простеньким разобрались теперь перейдем к методам массивов.
Но перед этим стоит поговорить о вариантах применения для массивов.

Первый из них это очередь или упорядоченная коллекция элементов.
Очередь поддерживает два вида операций:
1. добавление элемента в конец очереди
2. удаление элемента в начале, сдвигая очередь,
	так что второй элемент становится первым.

Другой вариант применения для массивов – структура данных,
называемая стек.
Стек поддерживает два вида операций:
1. добавление элемента в конец
2. удаление последнего элемента

Массивы в JavaScript могут работать и как очередь, и как стек.
Мы можем добавлять/удалять элементы как в начало, так и в конец массива.
И в этом нам помогут следующие методы:
*/

/*
// Метод push - добавляет элемент в конец массива

let arr = ['Ваня', 'Иштван', 'Оля',];
arr.push('Вася');
console.log(arr);

arr.push('Дима', 'Катя');
console.log(arr);
*/

//------------------------

/*
// Метод shift - удаляет элемент в начале,
// так что второй элемент становится первым.

let arr = ['Ваня', 'Иштван', 'Оля',];
arr.shift();
console.log(arr);
*/

//------------------------

/*
// Метод pop  - удаляет последний элемент

let arr = ['Ваня', 'Иштван', 'Оля',];
arr.pop();
console.log(arr);
*/

//------------------------

/*
// Метод unshift  - добавляет элемент в начало массива

let arr = ['Ваня', 'Иштван', 'Оля',];
arr.unshift('Вася');
console.log(arr);

arr.unshift('Дима', 'Катя');
console.log(arr);
*/

//------------------------

/*
Методы push/pop выполняются быстро, а методы shift/unshift – медленно.

Давайте рассмотрим на примере добавления элемента
в начало массива (unshift);

Просто взять и добавить элемент с номером 0 недостаточно.
Нужно также заново пронумеровать остальные элементы.

Операция unshift должна выполнить 3 действия:
 1. Добавить элемент с индексом 0.
 2. Сдвинуть все элементы вправо, заново пронумеровать их,
	заменив 0 на 1, 1 на 2 и т.д.
 3. Обновить свойство length.

Чем больше элементов содержит массив, тем больше
времени потребуется для того, чтобы их переместить,
больше операций с памятью.

А вот что бы добавить элемент в конец массива (метод push)
не нужно ничего перемещать.
Так же не нужно заново нумеровать элементы. Достаточно
увеличить значение length.
*/

//========================================================================================================================================================

// Удаление/добавление/изменение конкретных элементов

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

delete arr[1];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);
*/

// Метод splice. Позволяет добавлять, удалять и заменять элементы.
// Синтаксис arr.splice(index[, deleteCount, elem1, ..., elemN])
/*
// Удаляем элемент
let arrOne = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (Иштван), удаляем один элемент
arrOne.splice(1, 1);
console.log(arrOne);

// Удаляем элемент и возвращаем его в переменную
let arrTwo = ['Ваня', 'Иштван', 'Оля',];
let removed = arrTwo.splice(1, 1);
console.log(removed);

// Заменяем элементы
let arrThree = ['Ваня', 'Иштван', 'Оля',];
// Начиная с нулевой позиции (Ваня), заменяем один элемент
arrThree.splice(0, 1, 'Коля');
console.log(arrThree);

// Добавляем элементы
let arrFour = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (перед 'Иштван'), добавляем два элемента
arrFour.splice(1, 0, 'Коля', 'Маша');
console.log(arrFour);

// Удаляем элемент
let arrFive = ['Ваня', 'Иштван', 'Оля',];
// Начиная с последней позиции (Оля), удаляем один элемент
arrFive.splice(-1, 1);
console.log(arrFive);
*/

//========================================================================================================================================================

/*
// Метод slice.
// Cоздаёт новый массив, в который копирует часть либо весь массив
// Синтаксис arr.slice([start], [end]) Не включая [end]

// Копируем часть массива
let arrOne = ['Ваня', 'Иштван', 'Оля',];

// Начиная с 1й позиции 'Иштван',
// до 2й позиции 'Оля' (не включая)
let arrTwo = arrOne.slice(1, 2);
console.log(arrTwo);

// Начиная с предпоследней позиции 'Иштван',
// до последней 'Оля' (не включая)
let arrThree = arrOne.slice(-2, -1);
console.log(arrThree);

// Копируем весь массив
let arrFour = arrOne.slice();
console.log(arrFour);
*/


//------------------------

/*
// Метод concat.
// Cоздаёт новый массив, в который копирует данные из других массивов
// и дополнительные значения (в конец массива)
// Синтаксис arr.concat(arg1, arg2...)

let arrOne = ['Ваня', 'Иштван', 'Оля',];
let arrTwo = arrOne.concat('Петя');
console.log(arrTwo);
*/
//========================================================================================================================================================

// Поиск в массиве

// Методы indexOf/lastIndexOf и includes
// алналоги строковым методам
/*
1. arr.indexOf(item, from) ищет item, начиная с индекса from,
	и возвращает индекс, на котором был найден искомый
	элемент, в противном случае - 1.
2. arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
3. arr.includes(item, from) – ищет item, начиная с индекса from,
	и возвращает true, если поиск успешен.
*/

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

// indexOf
console.log(arr.indexOf('Иштван'));
console.log(arr.indexOf('Вася'));
console.log(arr.indexOf('Иштван', 2));

// includes
console.log(arr.includes('Иштван'));
console.log(arr.includes('Вася'));
console.log(arr.includes('Иштван', 2));
*/

//------------------------

// find и findIndex
// поиск в массиве объектов с пределённым условием

/*
// Синтаксис
let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});
*/

let arr = [
	{ name: 'Вася', age: 18 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]

let resultOne = arr.find(function (item, index, array) {
	return item.age === 18;
});

//let resultOne = arr.find(item => item.age === 18);
console.log(resultOne);


//findIndex
let resultTwo = arr.findIndex(item => item.age === 18);
console.log(resultTwo);


//------------------------

// filter
// Метод ищет все элементы, на которых функция-колбэк вернёт true.
/*
let results = arr.filter(function (item, index, array) {
	// если true - элемент добавляется к результату, и перебор продолжается
	// возвращается пустой массив в случае, если ничего не найдено
});
*/
/*
let arr = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]
let result = arr.filter(function (item, index, array) {
	return item.age >= 18;
});
console.log(result);
*/

//========================================================================================================================================================

// Сортировка массивов
/*
// Сотритовка слов
let arrOne = ['Иштван', 'Ваня', 'Оля'];
console.log(arrOne.sort());

// Сотритовка чисел
let arrTwo = [8, 22, 1,];
console.log(arrTwo.sort());

// По умолчанию элементы сортируются как строки.
// Для строк применяется лексикографический порядок,
// и действительно выходит, что "8" > "22".
console.log("8" > "22");
*/
//--------

// Метод sort(fn)
// сортирует массив на месте, меняя в нём порядок элементов.

/*
// Сотритовка чисел
let arrTwo = [8, 22, 1,];
console.log(arrTwo.sort());

// Функция сортировки

function compareNumeric(a, b) {
	console.log(`Сравниваем ${a} и ${b}`);
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;

	//return a - b
}

//console.log(arrTwo.sort((a, b) => a - b));

console.log(arrTwo.sort(compareNumeric));
*/

//--------

/*
// Метод reverse
// меняет порядок элементов в массиве на обратный.

let arrOne = ['Ваня', 'Иштван', 'Оля'];
console.log(arrOne.reverse());
*/


//========================================================================================================================================================

// Преобразование массивов

// Метод map.
// вызывает функцию для каждого элемента массива 
// и возвращает массив результатов выполнения этой функции.
/*
let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
});
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];

let result = arr.map(function (item, index, array) {
	return item[0];
});
//let result = arr.map(item => item[0]);
console.log(arr);
console.log(result);
*/

//------------------------

/*
 Метод split преобразовывает строку в
 массив по заданному разделителю
 Синтаксис: str.split(delim)
*/
/*
let str = 'Ваня,Иштван,Оля';

let arr = str.split(',');
console.log(arr);


// Можно ограничить кол-во объектов
// которые попадут в массив

let arrTwo = str.split(',', 2);
console.log(arrTwo);
*/
//----------

/*
 Метод join преобразовывает массив в
 строку c заданным разделителем
 Синтаксис: arr.join(glue)
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
let srt = arr.join('.');
console.log(srt);


// Получение строки из массива
let arrTwo = ['Ваня', 'Иштван', 'Оля'];
console.log(String(arrTwo));
*/

//========================================================================================================================================================

// Проверка Array.isArray()

/*
Напомню, массивы не образуют отдельный тип данных.
Они основаны на объектах.
*/
/*
let obj = {};
let arr = [];

console.log(typeof obj);
console.log(typeof arr);
*/
// Как же нам узнать где массив а где нет?
/*
if (Array.isArray(obj)) {
	console.log('Это массив!');
} else {
	console.log('Это не массив!');
}*/

//========================================================================================================================================================

// Перебор элементов

/*
let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(arr.length);

// Цикл FOR
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
*/

//---------------------

/*
// Цикл FOR...OF
// Можно использовать для вывода значений
let arr = ['Ваня', 'Иштван', 'Оля',];

for (let arrItem of arr) {
	console.log(arrItem);
}
*/
//---------------------


// Метод перебора forEach
// Выполняет функцию для каждого элемента массива
/*
arr.forEach(function (item, index, array) {
	// ... делать что-то с item
});
*/

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

arr.forEach(function (item, index, array) {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});
*/
/*
// Стрелочная функция
arr.forEach((item, index, array) => {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});
*/
//--------

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

arr.forEach(show);

function show(item) {
	console.log(item);
}
*/

//========================================================================================================================================================

// Методы reduce/reduceRight

/*
Итак, мы выяснили что если нам нужно перебрать
массив – мы можем использовать forEach, for или for..of.
Если нам нужно перебрать массив и вернуть
данные для каждого элемента – мы используем map.

Методы arr.reduce и arr.reduceRight похожи на эти методы,
но они немного сложнее и используются для вычисления
какого-нибудь единого значения на основе всего массива.
*/
/*
// Синтаксис
let value = arr.reduce(function(previousValue, item, index, array) {
  // ...
}, [initial]);
*/
/*
К привычным нам аргументам item, index, array
добавляется previousValue:

previousValue – результат предыдущего вызова этой функции,
равен initial при первом вызове (если передан initial),
item – очередной элемент массива,
index – его индекс,
array – сам массив.

Функция применяется по очереди ко всем элементам
массива и «переносит» свой результат на следующий вызов.
*/


/*
let arrOne = [1, 2, 3, 4];
let reduceValueOne = arrOne.reduce(function (previousValue, item, index, array) {
	return item + previousValue;
}, 0);
console.log(reduceValueOne);
*/
/*
Шаг №1
previousValue = 0
item = 1
их сумма = 1

Шаг №2
previousValue = 1
item = 2
их сумма = 3

Шаг №3
previousValue = 3
item = 3
их сумма = 6

Шаг №4
previousValue = 6
item = 4
их сумма = 10
*/
//--------

/*
let arrArrow = [1, 2, 3, 4];
let reduceValueArrow = arrArrow.reduce((pValue, item) => item + pValue, 0);
console.log(reduceValueArrow);
*/


//--------

/*
let arrTwo = ['Ваня', 'Иштван', 'Оля',];

Если не указать начальное значение, то оно будет равно
первому элементу массива (previousValue=Ваня)
А работа метода начнется со второго элемента (item=Иштван)
*/
/*
let reduceValueTwo = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
	console.log(item);
	return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValueTwo}`);
*/


// Метод arr.reduceRight работает аналогично, 
// но проходит по массиву справа налево.


//========================================================================================================================================================


// Массив используем как массив
/*
Следует помнить, что массив является объектом и,
следовательно, ведёт себя как объект.
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(typeof arr);

// Добавление нечислового свойства
arr.name = "Коля";
console.log(arr);
*/
/*
Но то, что действительно делает массивы особенными – это их внутреннее
представление. Движок JavaScript старается хранить элементы
массива в непрерывной области памяти, один за другим.
Существуют и другие способы оптимизации, благодаря которым
массивы работают очень быстро.

Но все они утратят эффективность, если мы перестанем работать
с массивом как с «упорядоченной коллекцией данных» и начнём
использовать его как обычный объект.

Варианты неправильного применения массива:
1. Добавление нечислового свойства, например: arr.test = 5.
2. Создание «дыр», например: добавление arr[0],
	затем arr[1000](между ними ничего нет).
3. Заполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.
*/


//========================================================================================================================================================
//========================================================================================================================================================

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1.
// Какое число (длинну) мы получим?
let arr = ['Ваня', 'Иштван', 'Оля',];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);
*/
// Задача №2.
/*
Создайте массив users с элементами "Ваня" и "Иштван".
Добавьте "Оля" в конец.
Замените значение в "Иштван" на "Петя".
Ваш код для поиска значения должен
работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте "Маша" и "Паша" в начало массива.
*/
/*
// Задача №3.
// Удалить элемент 'Иштван' и возвратить его в переменную
let arr = ['Ваня', 'Иштван', 'Оля',];

// Задача №4.
//Сделать из строки массив
let str = 'Ваня,Иштван,Оля';

// Задача №5.
// Чему равен previousValue в начале работы метода?
let arr = [9, 2, 8,];
let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});
*/

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================







