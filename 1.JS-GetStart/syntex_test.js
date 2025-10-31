/*
Test 1 產生下列圖形

*
**
***
****
*****

*/
console.log("---Test1------")
let s = "";
for(var i = 0; i< 5; i++){
    s += "*"
    console.log(s)
}


console.log("-------------")
console.log("---Test2-----")
/*
Test 2 產生 99乘法表
*/
let s2 = ""
for(var i = 2; i <= 9; i++){
    for(var j = 1; j <= 9; j++){
        s2 += `${i}x${j}=${i*j}`
        if (j < 9) s2 += ' '
    }
    if (i < 9)s2 += '\n';
}
console.log(s2)


/*
Test 3 產生 下列圖形

     *
    ***
   *****
  *******
 *********
*/
console.log("-------------")
console.log("---Test3------")
let s3 = "";
for(var i = 0; i < 5; i++){
    for(var j = 0; j <=5-i; j++){
        s3 += " "
    }
    for(var j = 0; j <=i-1; j++){
        s3 += "*"
    }
    for(var j = 0; j <=i; j++){
        s3 += "*"
    }
    s3 += "\n"
}
console.log(s3)