function validateform(){ //Blank  ouyangruopeng
    var AA=document.myform.AA.value; 
    var BB=document.myform.BB.value;
    var CC=document.myform.CC.value; 
    var number=document.myform.DD.value; 
     
    if (AA==null || AA==""){ //Ensure that the input is not blank
     alert("Name can't be blank"); 
     return false;
    } 
    else if(BB==null || BB==""){ //if statement to check if the input box is empty
     alert("Name can't be blank"); 
     return false; 
    } 
    else if(CC==null || CC==""){ //if statement to check if the input box is empty
     alert("Please enter text");
     return false; 
    } 
    else if(isNaN(DD)){ 
     alert("Password must be at least 6 characters long."); //Check whether it is a number
     return false; 
     } 
     
    } 