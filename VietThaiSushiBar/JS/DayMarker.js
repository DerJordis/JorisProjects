
var today = new Date().getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    var currentDayId = "";

    switch (today) {
        case 0:
            currentDayId = "sonntag";
            break;
        case 1:
            currentDayId = "montag";
            break;
        case 2:
            currentDayId = "dienstag";
            break;
        case 3:
            currentDayId = "mittwoch";
            break;
        case 4:
            currentDayId = "donnerstag";
            break;
        case 5:
            currentDayId = "freitag";
            break;
        case 6:
            currentDayId = "samstag";
            break;
    }

    if (currentDayId !== "") {
        var currentDayElement = document.getElementById(currentDayId);
        currentDayElement.classList.add("highlight");
    }


    
    function SushiFrontpage() {
        document.querySelector(".Sushi1").classList.remove("animate__bounce")

      }
  setInterval(SushiFrontpage, 1000);
        

  function SushiFrontpage2() {
    document.querySelector(".Sushi1").classList.add("animate__bounce")

  }
setInterval(SushiFrontpage2, 4000);
  
  