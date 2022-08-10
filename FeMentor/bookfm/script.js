//responsive nav script
function resp(){
  var u=document.getElementById("respon");
  var icon = document.getElementById("ic");
  var svg = document.getElementById("bookCol"); 
  if(u.className === ""){
    console.log("tes");
    icon.src="images/icon-close.svg";
    svg.fill="#fff";   
    u.classList.add("show");
  }else {
    u.classList.remove("show");
    icon.src="images/icon-hamburger.svg";
     
  }
}


function selector(evt, selectTab){
   var i, x, tablinks;
   x= document.getElementsByClassName("select");
   for (i=0; i<x.length;i++){
       x[i].style.display="none";
   }
   tablinks = document.getElementsByClassName("tablink");
   for(i=0;i<x.length;i++){
       tablinks[i].className = tablinks[i].className.replace(" active","");
       console.log("cok");
   }
   if(window.matchMedia("(max-width: 800px)").matches){
    document.getElementById(selectTab).style.display = "block";
    console.log("block");
    evt.currentTarget.className +=" active";
   }else if(window.matchMedia("(min-width: 800px)").matches){
    document.getElementById(selectTab).style.display = "flex";
    console.log("flex");
    evt.currentTarget.className +=" active";
   }
   
   
}

function emailVal(){
  var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var email = document.getElementById("txtEmail");
  if(!filter.test(email.value)){
    email.classList.add("alert");
  }
}

function collap(){
  var coll = document.getElementsByClassName("colapse-quest");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      console.log(this);
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}
