function digitalClock() {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  setInterval(() => {
    var date = new Date();
    var time = document.getElementById('clock');
    var dateArea = document.getElementById('date');
    var hour = date.getHours();
    var seconds = date.getSeconds();
    var meridian;
    var greet_msg = document.getElementById('greet-msg');


    //---------- GREET MESSAGES --------------
    if (date.getHours() >= 0 && date.getHours() < 12) {
      greet_msg.innerHTML = "Good Morning";
      meridian = "AM";
    }
    else if (date.getHours() >= 12 && date.getHours() < 17) {
      greet_msg.innerHTML = "Good Afternoon";
      meridian = "PM";
    }
    else if (date.getHours() >= 17 && date.getHours() < 22) {
      greet_msg.innerHTML = "Good Night";
      meridian = "AM";
    }
    // --------------------------------------------

    // ------------ SETTING TIME AND DATE -------------
    time.innerHTML = updateDigits(hour % 12) + ":" + updateDigits(date.getMinutes()) + ":" + updateDigits(seconds) + " " + meridian;
    dateArea.innerHTML = updateDigits(date.getDate()) + " " + months[date.getMonth() - 1] + " " + date.getFullYear();
    // -----------------------------------

    // ------------ UTILITY FUNCTION------------

    function updateDigits(arg) {
      if (arg < 10) {
        return "0" + arg;
      }
      else {
        return arg;
      }
    }
    // -----------------------------------


  }, 1000);

}

digitalClock();