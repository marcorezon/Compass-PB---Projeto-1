
//Switch content
 document.getElementById("001").addEventListener("mouseenter", function () {
    document.getElementById("001").innerHTML = "Just go Ahead";
 });
 
 //Switch-back content
 document.getElementById("001").addEventListener("mouseleave", function () {
    document.getElementById("001").innerHTML = "Let's go";
 });
 
 //Downward arrow
 function turnArrow() {
    document.getElementById("001").style.cssText += "transform: scaleY(-1);";
    document.getElementsByTagName("option").style.cssText += "transform: scaleY(1);";
 }
 
 
 