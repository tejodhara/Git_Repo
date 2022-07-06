import React from 'react'

const BubbleSort = () => {
    const arr =[1,2,8,7,9,0,4,7,0,2]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            let temp=0;
            if(arr[j]<arr[j+1]){
                temp =arr[j+1];
                arr[j+1]= arr[j];
                arr[j]=temp;
            }
        }
    }
    console.log(arr);
  return (
    <div>
        
    </div>
  )
}

export default BubbleSort