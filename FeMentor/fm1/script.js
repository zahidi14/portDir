
function check() {
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById("txtEmail");
    var alrt = document.getElementById("toast");
    if (!filter.test(email.value)) {
        
        email.classList.add("error");
        alrt.classList.remove("hide");
      
       email.focus;
        return false;
    }
}