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

    console.log('Enter Valid Data');
    
}