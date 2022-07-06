import React from 'react'

const PromisesTop = () => {
    const promise = new Promise(function (resolve, reject) {
        const string1 = "geeksforgeeks";
        const string2 = "geeksforgeeks";
        if (string1 === string2) {
          resolve();
        } else {
          reject();
        }
      });
     
      promise
        .then(function () {
          console.log("Promise resolved successfully");
        })
        .catch(function () {
          console.log("Promise is rejected");
        });
  return (
    <div>PromisesTop</div>
  )
}

export default PromisesTop