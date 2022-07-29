var j= document.getElementById('move');
function resp(){
   var ic= document.getElementById('icon');
    
    if(j.className ==="" || j.classList.contains("scroll")){
        ic.classList.remove("fa-bars")
        j.classList.toggle("respons");
        ic.classList.add("fa-times");
        
    }else{
       j.classList.remove("respons");
       ic.classList.add("fa-bars");
        ic.classList.remove("fa-times");
    }
}

window.onscroll = function(){
    scrollNav();
}

function scrollNav(){
    
    if (document.body.scrollTop >80 || document.documentElement.scrollTop > 80){
        j.classList.add('scroll');
    }else{
        j.classList.remove('scroll');
    }
}
