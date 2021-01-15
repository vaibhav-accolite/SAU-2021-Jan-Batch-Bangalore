function checkEmail(x)  
{  
 
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){    
    return false;  
    }  

    return true;
} 

function validate(){
    // console.log(5);
    var fname = document.getElementById('firstname').value;
    // alert(fname);
    var lname = document.getElementById('lastname').value;
    // alert(lname);
    var email = document.getElementById('email').value;
    // alert(email);
    var gender = 'others';
    var ele = document.getElementsByName('gender');
    for(i = 0; i < ele.length;i++){
        if(ele[i].checked)
            gender = ele[i].value;
    }
    
    // alert(gender);
    var branch = document.getElementById('branch').value;
    // alert(branch);

    var valiedEmail = checkEmail(email);
    var validategender = (gender === 'male') || (gender === 'female');
    var validatebranch = branch !== 'Choose';

    // console.log(valiedEmail);
    // console.log(validategender);

    if(fname){
        console.log("Name is valid and name is " + fname);
    }else{
        console.group("Please enter name");
    }

    if(lname){
        console.log( "last name is : " + fname);
    }else{
        console.log("Please enter last name ")
    }

    if(!valiedEmail)
    {
        console.log("Please enter valid email");
    }

    if(!validategender)
    {
        console.log("Gender is required");
    }else{
        console.log("selected gender is " + gender);
    }

    if(!validatebranch){
        console.log("Please enter valid branch ");
    }else{
        console.log("branch entered "+ branch);
    }

    if(fname && lname && valiedEmail && validategender && validatebranch){
        var obj = {
            'first name' : fname,
            'last name' : lname,
            'email' : email,
            'Gender' : gender,
            'Branch' : branch
        }
        // alert(obj);
        console.log(obj);
        return;
    }

    console.log('Enter Valid Data in all fields');
    
}