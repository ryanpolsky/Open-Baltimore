//Open or close the side menu when Menu button is clicked  
function toggleNav() {
    var side = document.getElementById("mySidenav");
    var middle = document.getElementById("main");
    if(side.style.width =="175px"){
         side.style.width = "0";
         middle.style.marginLeft= "0";
    }else{
        side.style.width = "175px";
        main.style.marginLeft = "175px";
    }
}   
//displays search reults in View1
function showResults() {
    document.getElementById("results").style.display = "block"
}
//displays search reults in View2
function showResults2() {
    document.getElementById("results2").style.display = "block"
}

