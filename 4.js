console.log('task 4');


let demo = [1,2,3,4,5,6,7,8,9,10];

const interval = setInterval(function(){
    console.log(demo.shift());
    if(demo.length == 0) clearInterval(interval);
},1000);