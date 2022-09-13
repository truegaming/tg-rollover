filterSelection("all");

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

$(document).ready(function () {
    var btnContainer = document.querySelector("#buttons_container");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
});


$(document).ready(function () {
    $('.youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});


$(document).ready(function () {
    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });
});



/**
 * Team Switcher
 */
$(document).ready(function () {
    $('.show_hide').on('click', function () {

        if ($('.show_hide').css('display') == 'block') {
            $(this).hide();
            $(this).next('.slidingDiv').toggle();
        }
    });
});


function replace() {

    document.getElementById("memberinfo0").style.display = "none";
    document.getElementById("member0").style.display = "block";

    document.getElementById("memberinfo1").style.display = "none";
    document.getElementById("member1").style.display = "block";

    document.getElementById("memberinfo2").style.display = "none";
    document.getElementById("member2").style.display = "block";

    document.getElementById("memberinfo3").style.display = "none";
    document.getElementById("member3").style.display = "block";

    document.getElementById("memberinfo4").style.display = "none";
    document.getElementById("member4").style.display = "block";

    document.getElementById("memberinfo5").style.display = "none";
    document.getElementById("member5").style.display = "block";

    document.getElementById("memberinfo6").style.display = "none";
    document.getElementById("member6").style.display = "block";

    document.getElementById("memberinfo7").style.display = "none";
    document.getElementById("member7").style.display = "block";


    document.getElementById("memberinfo8").style.display = "none";
    document.getElementById("member8").style.display = "block";


    document.getElementById("memberinfo9").style.display = "none";
    document.getElementById("member9").style.display = "block";


    document.getElementById("memberinfo10").style.display = "none";
    document.getElementById("member10").style.display = "block";
}


// Get the button
let mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function toggleMenu() {
    var menuMobile = document.querySelector(".show-menu");
    if (menuMobile.style.display == "block") {
        menuMobile.style.display = "none";
    } else {
        menuMobile.style.display = "block";
        menuMobile.classList.remove("hidden");
    }
}

// Menu Desktop And Mobile
function getScreenWidth() {
    w = null;
    if (window.screen != null)
        // window.screen object contains information about the user's screen.
        w = window.screen.availWidth; // availWidth returns the width of the user's screen, in pixel
    if (window.innerWidth != null) w = window.innerWidth; // innerWidth returns the width of a window's content area.
    if (document.body != null) w = document.body.clientWidth; // clientWidth returns the viewable width of an element in pixels
    return w;
}

window.addEventListener("load", onLoadPage);

function onLoadPage() {
    HideMenu();
    window.addEventListener("resize", HideMenu);
}
HideMenu();


function HideMenu() {
    if (getScreenWidth() <= 1023) {
        document.getElementById("menuDesktop").style.display = "none";
        document.getElementById("menuMobile").style.display = "block";
    } else {
        document.getElementById("menuDesktop").style.display = "block";
        document.getElementById("menuMobile").style.display = "none";
    }
}