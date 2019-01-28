// -------------------------- HW 3 --------------------------
// -------------------------- Курочка Екатерина --------------------------

// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

let str1 = 'i am in the easycode';
let str2 = '';

for (var i = 0; i < str1.length; i++) {
	if (i === 0) {
		str2 += str1[0].toUpperCase();
	} else if (str1[i - 1] === ' ') {
  		str2 +=  str1[i].toUpperCase();
  	} else {
  		str2 += str1[i];
  	}
}

console.log(str2);

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let str3 = 'tseb eht ma i';
let str4 = '';

for (var i = str3.length - 1; i >= 0; i--) {
	str4 += str3[i];
}

console.log(str4);

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

let a = 1;

for (var i = 0; i < 10; i++) {
	a *= i + 1;
}

console.log(a);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let str5 = 'JavaScript is a pretty good language';
let str6 = '';

for (var i = 0; i < str5.length; i++) {
	str6 += ((str5[i - 1] === ' ') ? str5[i].toUpperCase() : str5[i]).split(' ').join('');
}

console.log(str6);

// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i of arr) {
	if (i % 2) {
		console.log(i);
	}
}

// 6. Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

let list = {
     name: 'denis',
     work: 'easycode',
     age: 29
};

for (let i in list) {
  if (typeof list[i] === 'string') {
    list[i] = list[i].toUpperCase();
  } 
}

console.log(list);