// Javascript of the site.
// Written by Alex Gao
// Its great programming stuff like python classes

// === Javascript for the circle intro gimmick ===
function click_circle() {
    var circle = document.getElementById('circle_page');
    circle.parentNode.remove();
    };


// === All functions related to do with circle secrets ===
var circles_found = 0;

function pop_circle(element) {
    element.remove();
    circles_found++;
};

// Function to change the other button to a "circle" button
function update_circle_button(element) {
    element.setAttribute( "onClick", "javascript: pop_circle(this);" );
    element.innerHTML  = "Circle";
    element.style.borderRadius = "100px";
};

// Function that checks if all circles were found
function circle_check(element) {
    if (circles_found < 5) {
        // Not all circles are found
        element.innerHTML  = "Not all circles found!";
        setTimeout(function() {
            element.innerHTML = "Circle check";
          }, 1000); 
    } else {
        element.innerHTML  = "All circles found!";
        setTimeout(function() {
            element.innerHTML = "Congratulations!";
          }, 1000); 
          setTimeout(function() {
            element.innerHTML = "Circle check";
          }, 2000); 
    }
};


// === Javascript for onmouse interacrtivity w/ games ===
function gif_appear(parent) {
    var image = parent.getElementsByTagName('IMG');
    image[0].style.opacity = 1;

    var text = parent.getElementsByTagName('H1');
    text[0].style.color = "#ffb703";
};

function gif_disappear(parent) {
    var image = parent.getElementsByTagName('IMG');
    image[0].style.opacity = 0;

    var text = parent.getElementsByTagName('H1');
    text[0].style.color = "#fb8500";
};


// === Javascript for link buttons ===
function link_click(response_type, id_type) {
    if (response_type == "link") {
        // Redirect to a url
        switch (id_type) {
            case "youtube":
                window.open('https://www.youtube.com/@stbaccuracy7951', '_blank');
                break;
            case "github":
                window.open('https://github.com/STBAccuracy', '_blank')
                break;
            case "linkedin":
                window.open('https://au.linkedin.com/in/alex-gao-9a7731257', '_blank')
                break;
            case "spotify":
                window.open('https://open.spotify.com/user/25mpoefqitu55yk3dvdcxvaza?si=42f46633e079450e', '_blank')
                break;
            case "other":
                window.open('https://en.wikipedia.org/wiki/HTTP_404', '_blank')
                break;
        }
    } else {
        // Copy ID to clipboard

        // Identify id_type
        if (id_type == "discord") {
            var initial_text = document.getElementById("discord").innerHTML;
            navigator.clipboard.writeText("STBAccuracy#3911");
        } else if (id_type == "league") {
            var initial_text = document.getElementById("league").innerHTML;
            navigator.clipboard.writeText("STBAccuracy#OCE");
        } else if (id_type == "genshin") {
            var initial_text = document.getElementById("genshin").innerHTML;
            navigator.clipboard.writeText("807145695");
        }

        // Provide a temporary response to indicate successful copy to clipboard.
        document.getElementById(id_type).innerHTML = "ID copied!<br>";
        setTimeout(function() {
            document.getElementById(id_type).innerHTML = initial_text;
          }, 1000); 
    }
    
};


