function allDigitSame(number) {
    var temp = '' + number;
    var set = new Set();
    for(let i = 0; i < temp.length;i++){
        set.add(temp[i]);
    }

    let isSame = set.size === 1;
    if(isSame)
        console.log("All Digits Are Same");
    else
        console.log("All Digits Are Not Same")
}

allDigitSame(9999);

