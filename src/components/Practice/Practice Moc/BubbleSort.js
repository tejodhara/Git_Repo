import React from 'react'

const BubbleSort=() =>{
    const arr =[1,2,3,1,4,2,6,8,0,0,3,5,7,0]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            let temp = arr[j+1]
            if(arr[j]<arr[j+1]){
            // if(arr[j]===0){
                arr[j+1] = arr[j]
                arr[j] =temp
            // [arr[j],arr[j+1]] =[arr[j+1],arr[j]]
        }
        }
    }
    console.log(arr)
}
export default BubbleSort