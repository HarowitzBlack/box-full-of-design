


function show_hover_info(){

    var text = document.getElementById('info-hover');
    var box = document.getElementById('box');

    text.onmouseover = function(){
        box.style.display = "block";
        box.style.transition = "all 2s";

    }

    text.onmouseout = function(){
        box.style.display = "none";
        box.style.transition = "all 2s";

    }

}

function run(){
    show_hover_info();
}
