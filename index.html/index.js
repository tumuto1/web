var lessThan = document.querySelector(".fa-less-than")
lessThan.style.visibility = "hidden"
var images = document.querySelectorAll(".slide")
var greaterThan = document.querySelector(".fa-greater-than")
var container = document.querySelector("div")
var distance = -60
greaterThan.addEventListener("click", function(){
    images.forEach(function(image) {
        image.style.transform = `translateX(${distance}px)`
        image.style.transition = "transform 0.5s ease-in-out"
    });
    distance = distance - 60;
lessThan.addEventListener("click", function() {
    distance = distance + 120; // 
    images.forEach(function(image) {
        image.style.transform = `translateX(${distance}px)`;
    });
    distance = distance - 60; 
    
    if (distance === -60) {
        lessThan.style.visibility = "hidden";
    }
});

greaterThan.addEventListener("click", function(){
    lessThan.style.visibility = "visible";
});
{
  "rewrites" [{ "source": "/(.*)", "destination": "/" }]
}


})