let arr=[1,2,3,4,65,6,54];

let max=-Infinity;

for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}

console.log(max)