import React from 'react'

export const Duplicate = () => {
    let arr=[1,2,3,2,5,6,3,5]
    let d=[]
    // let dup =arr.filter((val,idx,self)=>{return val===self.idx()})

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<i;j++){
            if(arr[i]===arr[j]){
                d.push(arr[i])
            }
        }
    }
    console.log(d);

    //display string without vowels
    let str='tejodhara'
    let y =''
    for(let i=0;i<str.length;i++){
        if(str[i]!='a' && str[i]!='e' && str[i]!='i' && str[i]!='o' && str[i]!='u'){
            y =y+ str[i]
        }
    }
    console.log(y)

    //split the elements
    let str1 ='Hello Java Script'
    let x= str1.split(" ")
    console.log(x)

    

  return (
    <div>
        
    </div>
  )
}
