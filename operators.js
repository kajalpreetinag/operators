const input = require("readline-sync")
let a = input.questionInt("enter first number: ")
let b = input.questionInt("enter second number: ")

{
    A=a+b;
    S=a-b;
    M=a%b;
    MP=a*b;
    D=a/b;
    F=Math.floor(a/b);
    P=a**b;

    console.log(A,S,M,MP,D,F,P)
}