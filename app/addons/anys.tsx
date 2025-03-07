"use client"

import {useReducer} from "react"


export function mergeText(...texts:string[]){
    return texts.join(" ")
}

export function mergeFunc(...func:Function[]){
    return (param:any)=>{
        func.forEach(e=>{if (e instanceof Function){e(param)}})
    }
}

export function radianToDeg(num:number){
    return num * (180/Math.PI)
  }
  
  export function degToRadian(num:number){
    return num * (Math.PI/180)
  
  }

// for get 
export function LastIndex(list:any[]){
  var running = true
  var count = 0
  while (running){
    try{
      list[count]
      count ++
    }catch(error){
      running = false
    }
  }
  return count
}

export function countDown(sec:number,onCount:Function = (_c:number)=>{},onDone:Function = ()=>{},onCut:Function = ()=>{}){
    var count = sec
    var interval = setInterval(()=>{
      if (count >= 0){
        var cut  = onCount(count)
        console.log("cut is ",cut)
        if (cut == true){
          console.log(cut)
          clearInterval(interval)
          onCut()
        }
        count --
      }else{
        clearInterval(interval)
        onDone()
      }
    },1000)
  
  }

  export function RandFloat(min:number,max:number,except:number[] = []){
    var rand  =()=> (Math.random() * (max - min)) + min;
    var num = rand()
    while (except.includes(num)){
      num = rand()
    }
    return num
  }
  export function RandInt(min:number,max:number,except:number[] = []){
    return Math.floor(RandFloat(min,max,except)) 
  
  }

  export function countDownControl({sec ,times = 1000,onCount=(_c:number)=>{},onDone=()=>{}}:{sec:number,times:number,onCount:Function,onDone:Function}){
    var count = sec
    var interval = setInterval(()=>{
      if (count >= 0){
        onCount(count)
        count -= times/1000
       
      }else{
        clearInterval(interval)
        onDone()
      }
    },times)
  
  }



export function getMinMaxIndex(arr:any[] = [], findMax = true) {

  return arr.reduce((bestIndex, num, index, array) => 
    (findMax ? num > array[bestIndex] : num < array[bestIndex]) ? index : bestIndex
  , 0);
}

export function findLowestIndex(numbers: number[]): number {
  if (numbers.length === 0) throw new Error("Array cannot be empty");

  let lowestIndex = 0;
  let lowestValue = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < lowestValue) {
      lowestValue = numbers[i];
      lowestIndex = i;
    }
  }

  return lowestIndex;
}

export function __all__(conditions:boolean[]):boolean{
  var anwser:boolean = false
  for (var i in conditions){
      if (!conditions[i]){
          anwser = false
          break
      }else{
          anwser = true
      }
  }
  return anwser
}
export function __any__(conditions:boolean[]):boolean{
  var anwser:boolean = false
  for (var i in conditions){
      if (conditions[i]){
          anwser = true
          break
      }else{
          anwser = false
      }
  }
  return anwser
}


export function ReplaceAll(text:string,word1:string,word2:string){
  return text.split(word1).join(word2)
}

export function useUpdate(){
  const [, forceUpdate] = useReducer(x => x + 1, 1);
      return forceUpdate;
}