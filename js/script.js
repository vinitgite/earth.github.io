// activate the website hamburger icon and navigation
const hamburger = document.querySelector("#icon");
const navigation = document.querySelector("#nav-mobile");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("bx-x");
    navigation.classList.toggle("active");
    
});

//hide website navigation after clicking a link or clicking outside
document.onclick = function(n){
    if(n.target.id !== "icon" && n.target.id !== "nav-mobile"){
        hamburger.classList.remove("bx-x");
        navigation.classList.remove("active");
    }
};

//adding sticky animation
const header = document.querySelector("header")
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", scrollY > 0)
})

//theme changer
let icon = document.getElementById("theme-dekstop");
icon.onclick = function () {
    document.body.classList.toggle("dark_theme");
    if(document.body.classList.contains("dark_theme")){
        icon.src = "img/sun.png"
    }else{
        icon.src = "img/moon.png"
    }
}


