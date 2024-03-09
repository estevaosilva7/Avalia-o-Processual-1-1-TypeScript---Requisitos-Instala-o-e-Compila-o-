//import input = require('readline-sync');
/*declare function  require(name:string):any;
const input = require('readline -sync');
*/

import * as input from 'readline-sync';

//-------------------------------------------------
let nome:string = input.question('Digite o nome: ');
let idade: number;
idade = parseInt(input.question('Digite a idade: '));
//-------------------------------------------------
console.log('Olá mundo de DEVs!!!');
console.log('O nome digitado foi: ',nome);
console.log('A idade digitada foi: ',idade);