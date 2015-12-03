soundManager.setup({
  url: 'js/soundmanager/swf',
  flashVersion: 9, // optional: shiny features (default = 8)
  // optional: ignore Flash where possible, use 100% HTML5 mode
  // preferFlash: false,
  onready: function() {

    var fileNames = ['sounds/work_it.wav','sounds/harder.wav','sounds/make_it.wav','sounds/better.wav','sounds/do_it.wav','sounds/faster.wav','sounds/makes_us.wav','sounds/stronger.wav','sounds/more_than.wav','sounds/ever.wav','sounds/hour.wav','sounds/after.wav','sounds/our.wav','sounds/work_is.wav','sounds/never.wav','sounds/over.wav'];
    var soundArray = [];

    
    // Event listeners for soundboard buttons

    var buttons = document.getElementsByClassName('sound');

    for (i=0;i<16;i++) { 
      var soundTemp = soundManager.createSound({
        "url": fileNames[i]
      });
      soundArray.push(soundTemp);
      buttons[i].addEventListener("click", function() {
        lastPlayed.stop();
        var buttonID = this.id - 1;
        soundArray[buttonID].play();
        lastPlayed = soundArray[buttonID];
      });
    }


    // Event listener for play/stop button

    var lastPlayed = soundArray[0];
    var controlButton = document.getElementById('controls');
    var stopFlag = false;
    var tempo = 480;

    controlButton.addEventListener("click",function() {
      if (this.className==="play") {

        this.src = "img/stop.png";
        this.className = "stop";

        var i = 1;
        soundArray[0].play();  // First file outside loop so that it plays without a delay
        document.getElementById(i).style.color = "#ecf0f1";
        document.getElementById(i).style["background-color"] = "#2ecc71";

        
        // Loop that plays sound files in sequence

        function autoplayLoop() {
           setTimeout(function() {
              document.getElementById(i.toString()).style.color = "rgba(73, 251, 53, 0.8)";
              document.getElementById(i.toString()).style["background-color"] = "Transparent";
              if (stopFlag===false) {
                soundArray[i].play();
                document.getElementById(i+1).style.color = "#ecf0f1";
                document.getElementById(i+1).style["background-color"] = "#2ecc71";
                i++;
                if (i < 16) {
                  autoplayLoop();
                } else {
                  controlButton.src = "img/play.png";
                  controlButton.className = "play";
                  setTimeout(function() {
                    document.getElementById('16').style.color = "rgba(73, 251, 53, 0.8)";
                    document.getElementById('16').style["background-color"] = "Transparent";
                  }, tempo);   
                }
              } else {
                lastPlayed.stop();
                stopFlag = false;
                this.src = "img/play.png";
                this.className = "play";
              }
           }, tempo)
        }

        autoplayLoop();

      } else {
        stopFlag = true;
        this.src = "img/play.png"
        this.className = "play";
      }
    });


    // Event listeners for tempo buttons

    var tempoDown = document.getElementById("tempodown");
    var tempoUp = document.getElementById("tempoup");
    var tempoLevel = document.getElementById("level");

    tempoDown.addEventListener("click",function() {
      if (tempoLevel.innerHTML!=="1") {
        var newLevel = parseInt(tempoLevel.innerHTML) - 1;
        tempoLevel.innerHTML = newLevel.toString();
        tempo += 100;  // lower tempo means longer timeout
      }    
    });

    tempoUp.addEventListener("click",function() {
      if (tempoLevel.innerHTML!=="9") {
        var newLevel = parseInt(tempoLevel.innerHTML) + 1;
        tempoLevel.innerHTML = newLevel.toString();
        tempo -= 100;  // higher tempo means short timeout
      }
    });

  }
});