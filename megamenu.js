let store = document.querySelector('#store');
store.addEventListener('mouseenter',funStore)

function funStore(){
    let ui = `<div id="storemenu">
    <ul style="margin-left:300px">
       <li>erty</li>
       <li>erty</li>
       <li>erty</li>
       <li>erty</li>
       <li>erty</li>
       <li>erty</li>
       <li>erty</li>
    </ul>
</div>`;

   document.querySelector('#shownav').innerHTML = ui;
}

let shownav = document.querySelector('#shownav');
shownav.addEventListener('mouseleave',hidenav)

function hidenav(){
    document.querySelector('#shownav').innerHTML = "";
}

let mac = document.querySelector('#mac');
mac.addEventListener('mouseenter',funmac)
function funmac(){
    let ui = `<div id="macmenu">

    </div>`;
    document.querySelector('#shownav').innerHTML = ui;
}

let nav = document.querySelector('.nav');
nav.addEventListener('mouseleave',()=>{
    let top = event.clientY;
    if(top<10){
       document.querySelector('#shownav').innerHTML = "";
    }
 
})