// for (let i = 2; i < process.argv.length; i++) {
//     process.stdout.write(process.argv[i])   
// }
let i=0;
let timer = setInterval(function(){
    if(i++<10){
        process.stdout.write('1');
    } else {
        clearInterval(timer)
    }
}, 1000)