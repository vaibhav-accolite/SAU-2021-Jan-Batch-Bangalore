class input {
    constructor(param) {
        this.input = param;
    }
    calculateLength() {
        return this.input.length;
    };
    getUpperCase() {
        return this.input.toUpperCase();
    };
    getLowerCase() {
        return this.input.toLowerCase();
    };

    isOvel(char){
        return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
    }

    getOvel() {
        var result = "";
        var str = this.input;
        for(let i = 0; i < str.length;i++){
            if(this.isOvel(str[i]))
                result = result + str[i];
        }
        return result;
    }

    getConsonent() {
        var result = "";
        var str = this.input;
        for(let i = 0; i < str.length;i++){
            if(!this.isOvel(str[i]))
                result = result + str[i];
        }
        
        return result;
    }

    checkForNumber() {
    
        var temp = /[0-9]/;
        let isPresent = temp.test(this.input);
        if(isPresent)
            return "Error";
        
    }

}

function callFunction() {
    document.getElementById("errorplace").innerHTML = "";
    var inputValue = document.getElementById("inputTxt").value;
    let inputObject = new input(inputValue);
    if(!inputObject.checkForNumber()){
        document.getElementById("lengthOp").innerHTML = inputObject.calculateLength();
        document.getElementById("ucOp").innerHTML = inputObject.getUpperCase();
        document.getElementById("lcOp").innerHTML = inputObject.getLowerCase();
        document.getElementById("ovelsinstring").innerHTML = inputObject.getOvel();
        document.getElementById("consonent").innerHTML = inputObject.getConsonent();
        
    }else{
        document.getElementById("errorplace").innerHTML = inputObject.checkForNumber();
    }
}