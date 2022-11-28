const userAgent = navigator.userAgent.toLowerCase();

var isMobile = /iPhone|Android/i.test(navigator.userAgent);
console.log(isMobile);

const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
console.log(isTablet)

if (isMobile) {
    console.log("Mobile");
    ////document.getElementById("button").classList.add("toggle-button");
    //document.getElementById("ul").classList.remove("toggle-ul");
    ////document.getElementById("right-side").classList.remove("toggle-right-side");
    ////document.getElementById("left-side").style.paddingLeft = "120px";
    ////document.getElementById("left-side").style.paddingTop = "20px";
    ////document.getElementById("left-side").style.scale = "1.5";
    ////document.getElementById("right-side").style.display = "flex";
    ////document.getElementById("nav").style.height = "60px";
    //document.getElementById("left-side").style.right = "2rem";
    //document.getElementById("left-side").style.lineHeight="60px";
    ////document.getElementById("left-side").style.fontSize = "50px";
    //document.getElementById("left-side").removeAttribute("href");
    ////document.getElementById("doctor_name").style.fontSize = "30px";
    ////document.getElementById("doctor_name").style.lineHeight = "60px";
    ////document.getElementById("button").style.scale = "3";
    ///*document.getElementById("button").style.padding = "20px";*/
    ////document.getElementById("left-side").style.paddingRight = "60px";
    ////document.getElementById("doctor_name").style.paddingTop = "20px";
    //document.getElementById("header").style.top = "5vh";
    //document.getElementById("caption").style.top = "28vh";
    //document.getElementById("contactButton").style.top = "35vh";
    //document.getElementById("contactButton").style.width = "30vw";
    //document.getElementById("mobile-services").style.display = "grid";
    //document.getElementById("services-list").style.display = "none";
    //document.getElementById("header").style.fontSize = 
    document.getElementById("ul").classList.remove("toggle-ul");
    document.getElementById("left-side").style.right = "2rem";
    document.getElementById("left-side").style.lineHeight = "60px";
    document.getElementById("left-side").removeAttribute("href");
    document.getElementById("header").style.top = "5vh";
   }



else if (isTablet) {
    console.log("Tablet");

    //document.getElementById("button").classList.add("toggle-button");
    //document.getElementById("ul").classList.remove("toggle-ul");
    //document.getElementById("right-side").classList.remove("toggle-right-side");
    //document.getElementById("left-side").style.paddingLeft = "60px";
    //document.getElementById("right-side").style.display = "flex";
    //document.getElementById("nav").style.height = "70px";
    //document.getElementById("left-side").style.fontSize = "40px";
    //document.getElementById("left-side").removeAttribute("href");
    //document.getElementById("right-side").style.fontSize = "30px";
    //document.getElementById("button").style.scale = "1.3";
    document.getElementById("ul").classList.remove("toggle-ul");
    document.getElementById("left-side").style.right = "2rem";
    document.getElementById("left-side").style.lineHeight = "60px";
    document.getElementById("left-side").removeAttribute("href");
    document.getElementById("header").style.top = "5vh";
    
    document.getElementById("contactButton").style.top = "35vh";
    document.getElementById("contactButton").style.width = "30vw";

}
else {
    document.getElementById("button").classList.remove("toggle-button");
    document.getElementById("ul").style.display = "flex";
    //document.getElementById("right-side").style.display = "flex";
    

    //document.getElementById("ul").classList.remove("toggle-ul");
    //document.getElementById("right-side").classList.remove("toggle-right-side");
}
function toggleul() {
    console.log(document.getElementById("mobile-ul").style.display);
    if (document.getElementById("mobile-ul").style.display == "none") {
        console.log("pne");
        document.getElementById("mobile-ul").style.display = "grid";
        console.log(document.getElementById("mobile-ul").style.display);
    }
    else if (document.getElementById("mobile-ul").style.display == "grid") {
        console.log("tw");
        document.getElementById("mobile-ul").style.display = "none";
        console.log(document.getElementById("mobile-ul").style.display);
    }

};