Array.prototype.shuffle = function() {
    return this.sort(function() {
        return 0.5 - Math.random();
    });
};
var td = document.getElementsByTagName('td');
var color = ["red", "cadetblue", "firebrick", "lightblue", "orchid", "floralwhite", "lavenderblush", "lightgrey", "blue"];

window.onload = function(){
    for (var i = 0; i < td.length; i++) {
        var color = ["red", "cadetblue", "firebrick", "lightblue", "orchid", "floralwhite", "lavenderblush", "lightgrey", "blue"].shuffle();
        for (var j = 0; j < color.length; j++) {
            td[i].style.backgroundColor = color[j];
        }
    }
}



