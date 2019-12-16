Array.prototype.shuffle = function() {
    return this.sort(function() {
        return 0.5 - Math.random();
    });
};
var td = document.getElementsByTagName('td');
var color = ["red", "cadetblue", "firebrick", "lightblue", "orchid", "floralwhite", "lavenderblush", "lightgrey", "blue"];
var audio = document.getElementsByTagName('audio');
document.addEventListener('DOMContentLoaded',colorMusic);

function colorMusic(){
    audio.play();
    if (audio.volume = 0.1) {
        setInterval(tdBackground, 3000);
    } else if (audio.volume = 0.5){
        setInterval(tdBackground, 2000);
    } else {
        setInterval(tdBackground, 1000);
    }

}
function tdBackground(){
    for (var i = 0; i < td.length; i++) {
        var color = ["red", "cadetblue", "firebrick", "lightblue", "orchid", "floralwhite", "lavenderblush", "lightgrey", "blue"].shuffle();
        for (var j = 0; j < color.length; j++) {
            td[i].style.backgroundColor = color[j];
        }
    }
}



