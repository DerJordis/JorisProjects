function NextReview1() {
    document.querySelector(".Bewertung1").style.translate = "-180% 0";
    document.querySelector(".Bewertung1").style.opacity = "0";
    document.querySelector(".Bewertung1").style.visibility = "hidden";
      
  }
  setTimeout(NextReview1, 10000);
  
  
  function NextReview2() {
    document.querySelector(".Bewertung2").style.translate = "-128% 0";
    document.querySelector(".Bewertung2").style.visibility = "visible";
    document.querySelector(".Bewertung2").style.opacity = "1";
  
  }
  setTimeout(NextReview2, 10000);
  
  
  
  /*Bewertung 2 verschwindet*/
  function NextReview3() {
      document.querySelector(".Bewertung2").style.translate = "-180% 0";
    document.querySelector(".Bewertung2").style.opacity = "0";
    document.querySelector(".Bewertung2").style.visibility = "hidden";
  }
  setTimeout(NextReview3, 17000);
  
      function NextReview4() {
    document.querySelector(".Bewertung3").style.translate = "-128% 0";
    document.querySelector(".Bewertung3").style.visibility = "visible";
    document.querySelector(".Bewertung3").style.opacity = "1";
  }
  setTimeout(NextReview4, 17000);
  
  /*Bewertung 3 verschwindet*/
  function NextReview5() {
      document.querySelector(".Bewertung3").style.translate = "-250% 0";
    document.querySelector(".Bewertung3").style.opacity = "0";
    document.querySelector(".Bewertung3").style.visibility = "hidden";
    
  }
  setTimeout(NextReview5, 24000);
  
      function NextReview6() {
    document.querySelector(".Bewertung4").style.translate = "-128% 0";
    document.querySelector(".Bewertung4").style.visibility = "visible";
    document.querySelector(".Bewertung4").style.opacity = "1";
  }
  setTimeout(NextReview6, 24000);
  
  /*Bewertung 4 verschwindet*/
      function NextReview7() {
      document.querySelector(".Bewertung4").style.translate = "-250% 0";
    document.querySelector(".Bewertung4").style.opacity = "0";
    document.querySelector(".Bewertung4").style.visibility = "hidden";
  }
  setTimeout(NextReview7, 31000);
  
      function NextReview8() {
    document.querySelector(".Bewertung5").style.translate = "-128% 0";
    document.querySelector(".Bewertung5").style.visibility = "visible";
    document.querySelector(".Bewertung5").style.opacity = "1";
  }
  setTimeout(NextReview8, 31000);
  
  
          function LoadedPage() {
        document.querySelector(".VietHeadline").style.translate = "19rem";
        document.querySelector(".VietHeadline").style.opacity= "1";
      
        document.querySelector(".ThaiHeadline").style.translate = "17rem";
        document.querySelector(".ThaiHeadline").style.opacity= "1";
      
        document.querySelector(".SushiHeadline").style.translate = "-22rem";
        document.querySelector(".SushiHeadline").style.opacity= "1";
      
        document.querySelector(".BarHeadline").style.translate = "-20rem";
        document.querySelector(".BarHeadline").style.opacity= "1";
      
        document.querySelector(".FrontPageSushiBild").style.translate = "0 -4rem";
        document.querySelector(".FrontPageSushiBild").style.opacity= "1";
      }
      
      document.addEventListener("DOMContentLoaded", function () {
          var LoadedMap = document.getElementById("MapWidget");
      
         
      
      
      function starteAnimation() {
                      LoadedMap.classList.add("MapWidgetLoadedAnimation");
                      LoadedMap.classList.remove("MapWidget2");
      }
      
      
      function VisibilityCheckForMap() {
                      var sichtfeld = window.innerHeight; // Höhe des sichtbaren Bereichs des Browsers
                      var bildPosition = LoadedMap.getBoundingClientRect().top;
      
      
      
      if (bildPosition < sichtfeld * 1.2) {
                          starteAnimation();
                          // Entferne den Event-Listener, um die Animation nur einmal auszulösen
                          window.removeEventListener("scroll", VisibilityCheckForMap);
                      }
              }           
              window.addEventListener("scroll", VisibilityCheckForMap);
      
              VisibilityCheckForMap();
      });
  
  
      document.addEventListener("DOMContentLoaded", function () {
          var LoadedMap = document.getElementById("MapWidget");
      
         
      
      
      function starteAnimation() {
                      LoadedMap.classList.add("MapWidgetLoadedAnimation");
                      LoadedMap.classList.remove("MapWidget2");
      }
      
      
      function VisibilityCheckForMap() {
                      var sichtfeld = window.innerHeight; // Höhe des sichtbaren Bereichs des Browsers
                      var bildPosition = LoadedMap.getBoundingClientRect().top;
      
      
      
      if (bildPosition < sichtfeld * 0.5) {
                          starteAnimation();
                          // Entferne den Event-Listener, um die Animation nur einmal auszulösen
                          window.removeEventListener("scroll", VisibilityCheckForMap);
                      }
              }           
              window.addEventListener("scroll", VisibilityCheckForMap);
      
              VisibilityCheckForMap();
      });
  
  
  
  
  
  /*LOADED ANIMATION FOR OPENING TIMES*/
  /*LOADED ANIMATION FOR OPENING TIMES*/
  
      document.addEventListener("DOMContentLoaded", function () {
          var LoadedOpeningTimes = document.getElementById("OpeningTimesContainer");
      
         
      
      
      function starteAnimationForOpeningTimes() {
                      LoadedOpeningTimes.classList.add("OpeningTimesAnimation2");
                      LoadedOpeningTimes.classList.remove("OpeningTimesAnimation1");
      }
      
      
      function VisibilityCheckForOpeningTimes() {
                      var sichtfeld = window.innerHeight; // Höhe des sichtbaren Bereichs des Browsers
                      var bildPosition = LoadedOpeningTimes.getBoundingClientRect().top;
      
      
      
      if (bildPosition < sichtfeld * 0.8) {
                          starteAnimationForOpeningTimes();
                          // Entferne den Event-Listener, um die Animation nur einmal auszulösen
                          window.removeEventListener("scroll", VisibilityCheckForOpeningTimes);
                      }
              }           
              window.addEventListener("scroll", VisibilityCheckForOpeningTimes);
      
              VisibilityCheckForOpeningTimes();
      });
  
  
      
      
      
      
      
      var heute = new Date();
      
      var tag = heute.getDay();
      
      var idDesTages = "";
        switch (tag) {
          case 0:
            idDesTages = "sonntag";
            break;
          case 1:
            idDesTages = "montag";
            break;
          case 2:
            idDesTages = "dienstag";
            break;
          case 3:
            idDesTages = "mittwoch";
            break;
          case 4:
            idDesTages = "donnerstag";
            break;
          case 5:
            idDesTages = "freitag";
            break;
          case 6:
            idDesTages = "samstag";
            break;
        }
      
      var aktuellerTagElement = document.getElementById(idDesTages);
        aktuellerTagElement.classList.add("Today");