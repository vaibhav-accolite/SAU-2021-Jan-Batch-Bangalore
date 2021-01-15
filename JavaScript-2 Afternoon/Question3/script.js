var alldata = {

};

var setInfo = () => {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var age = document.getElementById('age').value;
    // var gender = 'others';
    // var ele = document.getElementsByName('gender');
    

    var gender = (() => {
        var ele = document.getElementsByName('gender');
        for(i = 0; i < ele.length;i++){
            if(ele[i].checked)
                return ele[i].value;
        }

        return 'Prefered Not to say';
    })();

    var rollnumber = document.getElementById('rollnumber').value;
    var dob = document.getElementById('dob').value;

    console.log(firstname);
    console.log(lastname);
    console.log(age);
    console.log(gender);
    console.log(rollnumber);
    console.log(dob);

    console.log("Got the info");

    alldata[rollnumber] = {
        'first_name' : firstname,
        'last_name' : lastname,
        'age' : age,
        'gender' : gender,
        'roll_number' : rollnumber,
        'dob' : dob
    };

    console.log(alldata[rollnumber]);

    // document.getElementById('').value = alldata[rollnumber].first_name;


    (() => {

        console.log("Games");
        document.getElementById('firstname').value = "";
        document.getElementById('lastname').value = "";
        document.getElementById('age').value = '';
        document.getElementById('rollnumber').value = '';
        document.getElementById('dob').value = '';
        var ele = document.getElementsByName('gender');
        for(i = 0; i < ele.length;i++){
            ele[i].clicked = false;
            console.log(ele[i].clicked);
        }
    })();

    console.log(alldata);

}

var getInfo = () => {
    var rollnumber = document.getElementById('getfromrollno').value;
    console.log(rollnumber);

    console.log(alldata[rollnumber].first_name);

    var displayInUI = () => {
        document.getElementById('fname').innerHTML = alldata[rollnumber].first_name;
        document.getElementById('lname').innerHTML = alldata[rollnumber].last_name;
        document.getElementById('ageget').innerHTML = alldata[rollnumber].age;
        document.getElementById('genderget').innerHTML = alldata[rollnumber].gender;
        document.getElementById('rollnumberget').innerHTML = alldata[rollnumber].roll_number;
        document.getElementById('dobget').innerHTML = alldata[rollnumber].dob;
    }

    if(alldata[rollnumber] == 'undefined'){
        console.log('No entry with given roll number');
    }else{
        displayInUI();
    }

    
    (() => {

        document.getElementById('getfromrollno').value = '';
    })();
}