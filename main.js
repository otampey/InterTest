//task1
for (let i=0; i<5; i++){
  setTimeout(function(){
      console.log(i);},i*1000);
}

//task2
const arr = Array.from({length: 1000},() => Math.round(Math.random() * 900 + 1));

let getUniqueValues = [];
for (let i=0; i<arr.length; i++) {
  if (getUniqueValues.indexOf(arr[i]) ===-1) {
      getUniqueValues.push(arr[i]);
  }
}
alert(getUniqueValues.length);

//task3
const arr2 = [1,0,10, '0','1','',NaN,false,null,undefined,'false','true'];

for (let i=0; i<arr2.length; i++){
  if(arr2[i]) {
    console.log(arr2[i]);
  }
}
