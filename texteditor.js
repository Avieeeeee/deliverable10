          
    function bold() {
        document.getElementById("textarea1").style.fontWeight = "bold";
    }
   function italic() { 
        document.getElementById("textarea1").style.fontStyle = "italic";
    }
   function left() {
        document.getElementById("textarea1").style.textAlign = "left";
    }
    function center() {
        document.getElementById("textarea1").style.textAlign= "center";
    }
    function right() {
        document.getElementById("textarea1").style.textAlign = "right";
    }
    function uppercase() {
        document.getElementById("textarea1").style.textTransform = "uppercase";
    }
    function lowercase() {
        document.getElementById("textarea1").style.textTransform = "lowercase";
    }
    function capitalize() {
        document.getElementById("textarea1").style.textTransform = "capitalize";
    }
    function cleartext() {
        document.getElementById("textarea1").removeAttribute('style')
        document.getElementById("textarea1").value = ""
    }
