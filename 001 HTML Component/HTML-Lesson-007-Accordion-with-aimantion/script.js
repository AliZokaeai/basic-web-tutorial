var acc = document.getElementsByClassName("accordion");
var i;

for(i=0; i<acc.length;i++){
    acc[i].addEventListener("click",function(){
        console.log(this.classList);
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight =null;
        }else{
            panel.style.maxHeight = panel.scrollHeight+"px";
        }
    });
}