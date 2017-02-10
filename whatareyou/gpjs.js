
function ChangeStyle(){
  var text = document.getElementById("NiceText");
  text.style.color = "#0443ef";
  text.innerHTML = "You're the Man!"
  var navbar = document.getElementById("Nav-top");
  navbar.style.backgroundColor = "#0443ef";

}


function ChangeStyle1(){
  var text = document.getElementById("NiceText");
  text.style.color = "#ef0466";
  text.innerHTML = "You're the Woman!"
  var navbar = document.getElementById("Nav-top");
  navbar.style.backgroundColor = "#ef0466";
  //window.open('','MsgWindow',width = 200,height = 100).write("I'm a window");
}

function DrawOnCanvas(){
  var canvas = document.getElementById('canvas-body');
  var CanvasContext = canvas.getContext('2d');
  CanvasContext.fillStyle = "rgb(97, 0, 163)";
  CanvasContext.fillRect(0, 0, 15,10)
}

function TestClass(){
  this.SomeNum = 123;

  this.giveNum = function(){
    var val = 5;
    val += this.SomeNum;
    return val;
  };
}


function DoSomething(){
  var Tobj = new TestClass();
  document.getElementById('text').innerHTML = Tobj.giveNum();
}
