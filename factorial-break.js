let n = 10;
let result = 1;
let i = 1;
while(i < n){
    i++;
    if(result>3628800){
        break;
    }
    result = result * i;
    console.log(result);
}