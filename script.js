(function(window){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i in names) {
    var name = names[i];
    var firstLetter = name.charAt(0);

    var isEqualIgnoreCase = function(char1, char2){
      return char1.toUpperCase() === char2.toUpperCase();
    };

    if (isEqualIgnoreCase(firstLetter, "J")) {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }

})();
