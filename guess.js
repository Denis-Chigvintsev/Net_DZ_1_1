#!/usr/bin/env node

const m = Math.floor(Math.random() * 21);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let isEqual;

function check_answer(m, answer) {
  if (m > answer) {
    console.log(`задуманное число больше ${answer}`);
    isEqual = false;
  }
  if (m < answer) {
    console.log(`задуманное число меньше ${answer}`);
    isEqual = false;
  }
  if (m == answer) {
    isEqual = true;
  }
}

function guess_RL() {
  rl.question('Введите число: ', (answer) => {
    check_answer(m, +answer);
    if (isEqual == true) {
      console.log('---------------------------------------------');
      console.log(`Поздравляю, Вы отгадали задуманное число ${m}`);
      console.log('---------------------------------------------');
      return rl.close();
    }
    guess_RL();
  });
}
console.log('-------------------------------------------------------------');
console.log('Задумано число в диапазоне от 0 до 20, Вам нужно его отгадать');
console.log('-------------------------------------------------------------');
guess_RL();
