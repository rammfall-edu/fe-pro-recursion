import {
    deepEqual,
    deepCopy,
    getAllObjectKeys
  } from './index.js';

  const objFirst = {
      name: 'Marta',
      surname: 'Kovalenko',
      age: 13,
      parents: {
          mom: 'Svetlana',
          dad: 'Kolyan',
          grandparents:{
              grandmaF: 'Manya',
              grandpaF: 'Nikolay',
              grandmaS: 'Galya',
              grandpaS: 'Philip'
          }
      },
      study: [1,2,5,8],      
  };

 

  const objSecond = {
    name: 'Marta',
    surname: 'Kovalenko',
    age: 13,
    parents: {
        mom: 'Svetlana',
        dad: 'Kolyan',
        grandparents:{
            grandmaF: 'Manya',
            grandpaF: 'Nikolay',
            grandmaS: 'Galya',
            grandpaS: 'Philip'
        }
    },
    study: [1,2,5,8],      
}

const obj = { prop: 'bohdan', obj: { arr: [1, 2, 3] } };
const deepObj = deepCopy(obj);
console.log(deepEqual(objFirst, objSecond));
console.log(deepEqual(deepCopy(objSecond), objSecond));
console.log(obj !== deepObj);
console.log(obj.obj !== deepObj.obj);
console.log(obj);
console.log(deepObj);


let objKey = { name: { bohdan: { name: 'test' } } };

console.log(getAllObjectKeys(objKey));