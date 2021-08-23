
// DOWN ARROW
function myFunction() {
    var elmnt = document.getElementsByClassName("scrollto-main");
    elmnt.scrollIntoView({
        behavior: 'smooth'
    });
}

function myFunction() {
    var elmnt = document.getElementById("scrollto-main");
    elmnt.scrollIntoView({
        behavior: 'smooth'
    });
}

// MENU HAMBURGER AND X TOGGLE
document.querySelector('.menubtn').addEventListener('click', function () {

    document.querySelector('.animated-menu').classList.toggle('open');
});



// TABS
function openTab(evt, category) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(category).style.display = "block";
    evt.currentTarget.className += " active";
}


// BACK TO TOP
var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
    // Do something on scroll
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal) > 0.80) {
        // Show button
        scrollToTopBtn.classList.add("showBtn")
    } else {
        // Hide button
        scrollToTopBtn.classList.remove("showBtn")
    }
}

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)


