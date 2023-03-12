let music = new Audio("sound.mp3");
//  music.play();

// music.onended = function(){
//     document.write(a)
// }
var snd = new Audio();
snd.src = music;
snd.volume = 0.5;

function createExplosion() {
  snd.play();
}
let a = createExplosion();
console.log(a)
