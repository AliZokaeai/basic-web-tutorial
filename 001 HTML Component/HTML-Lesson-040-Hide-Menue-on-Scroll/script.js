//Whan the user scrolls down 20px from the top of the document, slide down the navbar

var perScrollpos = window.pageYOffset;
window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if(perScrollpos > currentScrollPos){
        document.getElementById("navbar").style.top="0";
    }else{
        document.getElementById("navbar").style.top="-50px";
    }
    perScrollpos = currentScrollPos;
}