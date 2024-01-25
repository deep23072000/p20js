function run(){
    setTimeout(output,5000);
    setInterval(output1,2000);

    function output(){
        alert("after 5 seconds")
    }
    let a = 0;
    function output1(){
        if(a<10){
        alert(a)
        a++;
        }
        else{
            clearInterval()
        }
    }
}

