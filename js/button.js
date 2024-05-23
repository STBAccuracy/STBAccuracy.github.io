// Javascript of the site.

// === Javascript for the circle intro gimmick ===
function click_circle() {
    var circle = document.getElementById('circle_page');
    circle.parentNode.remove();
    };

// === Javascript for onmouse interacrtivity ===
function gif_appear(parent) {
    var image = parent.getElementsByTagName('IMG');
    image[0].style.opacity = 1;

    var text = parent.getElementsByTagName('H1');
    text[0].style.color = "white";
};

function gif_disappear(parent) {
    var image = parent.getElementsByTagName('IMG');
    image[0].style.opacity = 0;

    var text = parent.getElementsByTagName('H1');
    text[0].style.color = "black";
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
            case "steam":
                window.open('https://steamcommunity.com/profiles/76561198847374943/', '_blank')
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

// === All functions related to do with circle secrets ===
var circles_found = 0;

function pop_circle(element_id) {
    var circle = document.getElementById(element_id);
    circle.remove();
    circles_found++;
    };
