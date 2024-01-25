

//conventional way of using event and selecting event
function sum(){
    let val1 =parseInt(document.getElementById('num1').value);
    let val2 =parseInt(document.getElementById('num2').value);
    let val3 = document.getElementById('num1').value;
    let val4 = document.getElementById('num2').value;
    console.log(typeof(val3,val4));
    console.log(typeof(val1,val2));
    

    document.getElementById('answer').innerHTML = val1+val2
}

//modern way of using event and selecting element
// let morden = document.getElementById('modern');
let morden = document.querySelector('.modern');
morden.addEventListener('mouseenter',substract);

function substract(){
    window.alert(12-23)
}