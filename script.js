clickcount= 0;
function dropdownclick(){
    clickcount++;
    var ul = document.getElementById("home-1-stack-id");
    var menu = document.getElementById("dropdownmenu-id"); 
    if (clickcount%2==1){
        ul.className= "clicked";
        menu.innerHTML= "&#x274C;";
        
    }else{
        ul.className= "home-1-stack";
        menu.innerHTML="&#x2630;";
    }        
}