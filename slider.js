function sliderrun(){
    let start = 0;
    setInterval(slide,3000)
    function slide(){
        if(start === 0){
        document.querySelector('#sliderdiv').style.marginLeft="0px";
        document.querySelector('#sliderdiv').style.transition="margin-left 1s";
        start++;
    }
    else if(start === 1){
        document.querySelector('#sliderdiv').style.marginLeft="-2000px";
        document.querySelector('#sliderdiv').style.transition="margin-left 1s";

        start++;
    }
    else if(start === 2){
        document.querySelector('#sliderdiv').style.marginLeft="-4000px";
        document.querySelector('#sliderdiv').style.transition="margin-left 1s";

        start++;
    }
    else if(start === 3){
        document.querySelector('#sliderdiv').style.marginLeft="-2000px";
        document.querySelector('#sliderdiv').style.transition="margin-left 1s";

        start++;
    }
    else if(start === 4){
        document.querySelector('#sliderdiv').style.marginLeft="0px";
        document.querySelector('#sliderdiv').style.transition="margin-left 1s";

        start=0;
    }
    }
}