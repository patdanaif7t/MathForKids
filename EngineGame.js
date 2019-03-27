function hide(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  
  function show(id) {
    document.getElementById(id).style.display = 'block';
  }
  

var a = document.getElementById("ปรบมือ")
function playClap() {
  a.play();
  hide('play')
  show('stop')
}

function pauseClap() {
  a.pause();
  hide('stop')
  show('play')
} 

var x = document.getElementById("myAudio")

function playAudio() {
    x.play();
    hide('play')
    show('stop')
}

function pauseAudio() {
    x.pause();
    hide('stop')
    show('play')
}
