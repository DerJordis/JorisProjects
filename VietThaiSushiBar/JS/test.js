




function LoadedPage() {
    document.querySelector(".FrontPageSushiBild").style.translate = "0 -15vw";
    document.querySelector(".FrontPageSushiBild").style.opacity = "1";

    document.querySelector(".VietHeadline").style.translate = "15vw 0";
    document.querySelector(".VietHeadline").style.opacity = "1";

    document.querySelector(".ThaiHeadline").style.translate = "15vw 0";
    document.querySelector(".ThaiHeadline").style.opacity = "1";

    document.querySelector(".SushiHeadline").style.translate = "-15vw 0";
    document.querySelector(".SushiHeadline").style.opacity = "1";

    document.querySelector(".BarHeadline").style.translate = "-15vw 0";
    document.querySelector(".BarHeadline").style.opacity = "1";
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
/* OPENING TIMES PAGE LOAD ANIMATION */
document.addEventListener("DOMContentLoaded", function () {
  var LoadedOpeningTimes = document.getElementById("OpeningTimesContainer");


function starteAnimationForOpeningTimes() {
              LoadedOpeningTimes.classList.add("OpeningTimesAnimation2");
              LoadedOpeningTimes.classList.remove("OpeningTimesAnimation1");
}

function VisibilityCheckForOpeningTimes() {
              var sichtfeld = window.innerHeight; // Höhe des sichtbaren Bereichs des Browsers
              var bildPosition = LoadedOpeningTimes.getBoundingClientRect().top;



if (bildPosition < sichtfeld * 0.9) {
                  starteAnimationForOpeningTimes();
                  // Entferne den Event-Listener, um die Animation nur einmal auszulösen
                  window.removeEventListener("scroll", VisibilityCheckForOpeningTimes);
              }
      }           
      window.addEventListener("scroll", VisibilityCheckForOpeningTimes);

      VisibilityCheckForOpeningTimes();
});

/* Headline Location Section PAGE LOAD ANIMATION */
/* Headline Location Section PAGE LOAD ANIMATION */
document.addEventListener("DOMContentLoaded", function () {
  var LoadedLocationHeadline = document.querySelector(".Location-Section-Headline-Container");


function starteAnimationForLocationSectionHeadline() {
              LoadedLocationHeadline.classList.add("Location-Section-Headline-Animation2");
              LoadedLocationHeadline.classList.remove("Location-Section-Headline-Animation1");
}

function VisibilityCheckForLocationHeadline() {
              var sichtfeld = window.innerHeight; // Höhe des sichtbaren Bereichs des Browsers
              var bildPosition = LoadedLocationHeadline.getBoundingClientRect().top;



if (bildPosition < sichtfeld * 1.0) {
      starteAnimationForLocationSectionHeadline();
                  // Entferne den Event-Listener, um die Animation nur einmal auszulösen
                  window.removeEventListener("scroll", VisibilityCheckForLocationHeadline);
              }
      }           
      window.addEventListener("scroll", VisibilityCheckForLocationHeadline);

      VisibilityCheckForLocationHeadline();
});

/* DDDDDDD */

function scrollToSection(sectionClass) {
  var section = document.querySelector(sectionClass);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

/*window.addEventListener('load', function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById('popup').style.display = 'block';
  }
});
*/


