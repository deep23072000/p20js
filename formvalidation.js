
function show(){
    let name1 = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let mobile = document.querySelector('#mobile').value;
    let pass = document.querySelector('#pass').value;
    let cpass = document.querySelector('#cpass').value;

   if(name1 === ""){
       document.querySelector('#error_name').innerHTML = "please Enter your name";
       document.querySelector('#error_name').style.color = "red";
       document.querySelector('#error_name').style.fontWeight = "700";
       document.getElementById('name').style.border = "2px solid red";
       document.getElementById('name').style.outline = "red";
       return false;
     }  
   else if(email === ""){
    document.querySelector('#error_email').innerHTML = "please Enter your email";
    document.querySelector('#error_email').style.color = "red";
    document.querySelector('#error_email').style.fontWeight = "700";
    document.getElementById('email').style.border = "2px solid red";
    document.getElementById('email').style.outline = "red";
    return false;
   }
   else if(!(email.includes('@gmail.com') || email.includes('@yahoo.com') || email.includes('@outlook.com'))){
    document.querySelector('#error_email').innerHTML = "please enter valid email";
    document.querySelector('#error_email').style.color = "red";
    document.querySelector('#error_email').style.fontWeight = "700";
    document.getElementById('email').style.border = "2px solid red";
    document.getElementById('email').style.outline = "red";
    return false;
   }
   //mobile validation

   else if(mobile === ""){
    alert("please enter mobile number");
    return false;
   }

   else if(isNaN(mobile)){
    alert("not a number")
    return false;
   }
   else if(mobile.length !== 10){
    alert("mobile number should be 10 digit");
    return false
   }

   else if(!pass.match(/[1234567890]/)){
    alert("password should be storng ");
    return false;
   }
   else if(!pass.match(/[!@#$%^&*()<>/]/)){
    alert("password should be storng ")
    return false;
   }
   else if(!pass.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)){
    alert("password should be storng ")
    return false;
   }
   else if(!pass.match(/[qwertyuiopasdfghjklzxcvbnm]/)){
    alert("password should be storng ")
    return false;
   }
   else if(pass.length !== 8){
    alert("should be 8 digit")
    return false;
   }

   else if(pass !== cpass){
         alert("password and confirm password doesnot matched");
         document.querySelector('#pass').value="";
         document.querySelector('#cpass').value="";
         document.querySelector('#pass').focus();
         return false;
   }
   else{
    alert("submitted")
   }

}
function hidevalidation(arg){

    if(arg === "nm"){
    document.querySelector('#name').style.border = "2px solid black";
    document.querySelector('#name').style.outline = "black";
    document.querySelector('#error_name').innerHTML = "";
    document.querySelector('#error_name').style.color = "black";
    return false;
    }
    if(arg === "em"){
        document.querySelector('#email').style.border = "2px solid black";
        document.querySelector('#email').style.outline = "black";
        document.querySelector('#error_email').innerHTML = "";
        document.querySelector('#error_email').style.color = "black";
        return false;
        }

}


console.log(localStorage.getItem('name'))
