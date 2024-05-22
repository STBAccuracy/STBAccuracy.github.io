// Javascript of the site.

// === Javascript for the circle intro gimmick ===
function click_circle() {
    var circle = document.getElementById('circle_page');
    circle.parentNode.remove();
    };

// === Javascript for link buttons ===
function discord_id(type_of_id) {
    if (type_of_id == "discord") {
        var initial_text = document.getElementById("discord").innerHTML;
        navigator.clipboard.writeText("STBAccuracy#3911");
    } else if (type_of_id == "league") {
        var initial_text = document.getElementById("league").innerHTML;
        navigator.clipboard.writeText("STBAccuracy#OCE");
    } else if (type_of_id == "genshin") {
        var initial_text = document.getElementById("genshin").innerHTML;
        navigator.clipboard.writeText("807145695");
    }
    document.getElementById(type_of_id).innerHTML = "ID copied!<br>";
    setTimeout(function() {
        document.getElementById(type_of_id).innerHTML = initial_text;
      }, 1000); 
};
