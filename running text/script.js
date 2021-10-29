const words = ["Python", "Javascript", "How to Google"];
let i = 0;
let counter;
function typeNow() {
  let word = words[i].split("");
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById("text").innerHTML += word.shift();
    } else {
      //   sleep 3 seconds
      setTimeout(deleteNow, 1500);
      return false;
    }
    counter = setTimeout(loopTyping, 100);
  };
  loopTyping();
}
function deleteNow() {
  // wait 3 seconds

  let word = words[i].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById("text").innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typeNow();
      return false;
    }
    counter = setTimeout(loopDeleting, 60);
  };
  loopDeleting();
}
typeNow();
