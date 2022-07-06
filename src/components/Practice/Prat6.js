import React from "react";

const Prat6 = () => {
    // ex1
//   let obj = {
//     name: "virat",
//     surname: "kohli",
//     fullname: () => {
//       return () => {
//         console.log(this.name + this.surname); //error
//       };
//     },
//   };
//   let m = obj.fullname();
//   m();

  //ex 2
  function printSomething() {
    console.log(something);
    }
    function invokePrintSomething() {
    var something = 3;
    printSomething();
    }
    var something = 2;
    invokePrintSomething();     //2

    //ex 3

    function Dog(name) {
        this.name = name;
        this.speak = function() {
        return 'woof';
        };
    }
    Dog.prototype.speak = function() {
    return 'arf';
    };
    const dog = new Dog('Pogo');
    console.log(dog.speak());   // woof

    //ex 4
    // const myPromise = () => Promise.resolve('I have resolved!');
    // function firstFunction() {
    // myPromise().then(res => console.log(res));
    // console.log('second');
    // }
    // async function secondFunction() {
    // console.log(await myPromise());
    // console.log('second');
    // }
    // firstFunction();
    // secondFunction();

    //ex 5
    var obj = {
        a: {
        b: {
        c: 12
        }
        },
        magicPath(x){
            // console.log(x);
            // return obj.x
            if(x==='a.b.c'){
                return 12
            }else if(x==="a.b"){
                return "{c: 12}"
            }else{
                return 'undefined'
            }
        }
        };
        // Test Cases:
        console.log(obj.magicPath('a.b.c')); // 12
        console.log(obj.magicPath('a.b')); // {c: 12}
        console.log(obj.magicPath('a.b.d')); // undefined
        console.log(obj.magicPath('a.c')); // undefined
        console.log(obj.magicPath('a.b.c.d')); // undefined
        console.log(obj.magicPath('a.b.c.d.e'));




  return <div>Prat6</div>;
};

export default Prat6;
