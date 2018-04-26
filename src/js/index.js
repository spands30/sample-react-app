
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../component/Hello'
const root=document.getElementById("root")
console.log(React)
console.log(ReactDOM);

ReactDOM.render(
    <Hello name="john" location="hyd"/>,
    root
)

/* 
import Person from './js/person';
import {Emp,a} from './js/emp';
import {MY_NAME,MY_APP,st,falseFunction} from './js/const';
import React from 'react';
import {render} from 'react-dom';

console.log(render);

console.log(Person("Rajani"))
console.log(new Emp("sk"))
console.log(a);
console.log(MY_NAME,MY_APP,st);

/* if(st==1){
    let st=3;
    console.log(st)
} 
 
//console.log(st)
console.log(falseFunction())
console.log(React); */


