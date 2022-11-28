window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        document.getElementById("nav").style.backgroundColor = "black";
        document.getElementById("nav").style.transition = "500ms all ease-in-out";


        document.getElementById("navlink1").dataset.scroll = "true";
        document.getElementById("navlink2").dataset.scroll = "true";
        document.getElementById("navlink3").dataset.scroll = "true";
        document.getElementById("navlink4").dataset.scroll = "true";

    }
    else {
        document.getElementById("nav").style.backgroundColor = "unset";
        //delete document.getElementById("contactButton").dataset.scroll
        delete document.getElementById("navlink1").dataset.scroll;
        delete document.getElementById("navlink2").dataset.scroll;
        delete document.getElementById("navlink3").dataset.scroll;
        delete document.getElementById("navlink4").dataset.scroll;
    }

})