"use strict";

window.onload = function(){

    var anim = document.getElementById("animation");
    anim.onchange = function(){
        var type = anim.value;
        document.getElementById("text-area").value = ANIMATIONS[type];
    };

    var startbtn = document.getElementById("start");
    startbtn.onclick = function(){
        start();
    };

    var stopbtn = document.getElementById("stop");
    stopbtn.onclick = function(){
        stop();
    };
    var turbobtn = document.getElementById("turbo");
    turbobtn.onchange = function(){
        turbo1();
    };

    var size = document.getElementById("fontsize");
    size.onchange = function(){

        switch(size.value.charAt(0)){
            case "t":
            document.getElementById("text-area").style.fontSize = 7 + "pt";
            break;
            case "s":
            document.getElementById("text-area").style.fontSize = 10 + "pt";
            break;
            case "m":
            document.getElementById("text-area").style.fontSize = 12 + "pt";
            break;
            case "l":
            document.getElementById("text-area").style.fontSize = 16 + "pt";
            break;
            case "e":
            document.getElementById("text-area").style.fontSize = 24 + "pt";
            break;
            case "x":
            document.getElementById("text-area").style.fontSize = 32 + "pt";
            break;
            default:
            document.getElementById("text-area").style.fontSize = 12 + "pt";
        }
    };
  };
  var frames = null;
  var timer = null;
  var count = 0;

  function start(){
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;
    frames = document.getElementById("text-area").value.split("====\n");
    if(timer === null){
        if(document.getElementById("turbo").checked){
            timer = setInterval(draw, 50);
        }else{
            timer = setInterval(draw, 250);
        }
    }
  }
  function draw(){
    var content = document.getElementById("text-area");

    if (count < frames.length) {
        content.value = frames[count];
        count++;
    }
    else {
        content.value = frames[0];
        count = 1;
    }
  }
  function stop(){
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
    clearInterval(timer);
    timer = null;
    document.getElementById("text-area").value = frames.join("=====\n");
    count = 0;
  }
  function turbo1(){
      var tb = document.getElementById("turbo");
      if (timer !== null) {
        if (tb.checked) {
            clearInterval(timer);
            timer = setInterval(draw, 50);
        }
        else {
            clearInterval(timer);
            timer = setInterval(draw, 250);
        }
    }
  }