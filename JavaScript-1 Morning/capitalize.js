function isUpper(str,index) {
    return str.charAt(index).toUpperCase() === str.charAt(index);
}

function isLower(str,index) {
    return str.charAt(index).toLowerCase() === str.charAt(index);
}

function capitalize(str) {
    var ans = "";
    for(let i = 0; i < str.length;i++) {
        if(isUpper(str,i))
            ans += str.charAt(i).toLowerCase();
        else if (isLower(str,i))
            ans += str.charAt(i).toUpperCase();
        else
            ans += str.charAt(i);
    }
    return ans;
}

console.log(capitalize("Im Vaibhav V Pawar"))
console.log(capitalize("Im $% aAcRfA *(Jss"))