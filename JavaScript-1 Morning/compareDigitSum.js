function compareDigitSum(num1,num2) {
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < num1.length;i++)
        sum1 += parseInt(num1[i]);
    for(let i = 0; i < num2.length;i++)
        sum2 += parseInt(num2[i]);

    console.log(sum1);
    console.log(sum2);

    if(sum1 < sum2)
        console.log("num2 is greater");
    else if(sum1 > sum2)
        console.log("num1 is greater");
    else
    console.log("Both are same");

}

compareDigitSum('12375','456');