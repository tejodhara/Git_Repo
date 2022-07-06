import React from 'react'

function StringMethods() {
    const str1 ='tejodhara sai'
    const str2 = 'Mango, banana, Grapes, Apple'
    const str3 ='   one      two    three   '
    const str4 ='3'
    console.log(str1.length);
    console.log('split',str1.split(''));
    console.log('slice -',str1.slice(3,7));
    console.log('search -',str1.search('for'));
    console.log('substring -',str1.substring(3,7)); //substring takes start and end of the string
    console.log('substr -',str1.substr(3,7));   //substr takes two argutments starts from and lenght to print
    console.log('to string-', str2.toString())
    console.log('replace-', str1.replace("a",'r')) // to replace particular character
    console.log('replace-', str1.replaceAll("a",'r')) // to replace particular character
    console.log('concat- ',str1.concat(str3));
    console.log('trim- ',str3.trim());      //one   two  three
    console.log('padStart- ',str4.padStart(4,'x'));
    console.log('padEnd- ',str4.padEnd(4,'0'));

const str5= 'venkata'
    console.log("index",str5.indexOf('a'));
    console.log("charAt",str5.charAt(2));
    console.log("charAt",str5.lastIndexOf('a'));

    // console.log('rev',str1[0]);
    console.log("search",str2.search(/m/i));


  return (
    <div>
        <table>
            <thead>
                <tr>String1 - {str1}</tr>
                <tr>slice -{str1.slice(5,10)}</tr>
                <tr>split -{str1.split('')}</tr>
            </thead>
        </table>
    </div>
  )
}

export default StringMethods