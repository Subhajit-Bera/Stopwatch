// Stopwatch elements
const onesMilisecond = document.getElementById('milisecond1');
const tensMilisecond = document.getElementById('milisecond2');
const onesSecond = document.getElementById('second1');
const tensSecond = document.getElementById('second2');
const onesMinute = document.getElementById('minute1');
const tensMinute = document.getElementById('minute2');

// Buttons
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Variables
let interval;
let clockStarted = false;
let time = {
  onesMilisecond: 0,
  tensMilisecond: 0,
  onesSecond: 0,
  tensSecond: 0,
  onesMinute: 0,
  tensMinute: 0
};

// Reset time
function resetClock() {
  clockStarted = false;
  if(interval)
  {
    clearInterval(interval);
  }
 
  time = {
    onesMilisecond: 0,
    tensMilisecond: 0,
    onesSecond: 0,
    tensSecond: 0,
    onesMinute: 0,
    tensMinute: 0
  };
  updateClockDisplay();
}

// Update clock display
function updateClockDisplay() {
  onesMilisecond.innerHTML = time.onesMilisecond;
  tensMilisecond.innerHTML = time.tensMilisecond;
  onesSecond.innerHTML = time.onesSecond;
  tensSecond.innerHTML = time.tensSecond;
  onesMinute.innerHTML = time.onesMinute;
  tensMinute.innerHTML = time.tensMinute;
}

// Update time
function changeTime() {
  time.onesMilisecond++;
  if (time.onesMilisecond > 9) 
  {
    time.onesMilisecond = 0;
    time.tensMilisecond++;

    if (time.tensMilisecond > 9) 
    {
      time.tensMilisecond = 0;
      time.onesSecond++;

      if (time.onesSecond > 9) 
      {
        time.onesSecond = 0;
        time.tensSecond++;

        if (time.tensSecond > 5) 
        {
          time.tensSecond = 0;
          time.onesMinute++;

          if (time.onesMinute > 9) 
          {
            time.onesMinute = 0;
            time.tensMinute++;
            
            if (time.tensMinute > 5) 
            {
              clearInterval(interval);
            }
          }
        }
      }
    }
  }
  updateClockDisplay();
}

// Start
function startClock() {
  if (!clockStarted) {
    clockStarted = true;
    interval = setInterval(changeTime, 10);
  }
}

// Stop
function stopClock() {
  clockStarted = false;
  clearInterval(interval);
}

//Reset 
resetClock();

// Event listeners
startButton.addEventListener('click', startClock);
stopButton.addEventListener('click', stopClock);
resetButton.addEventListener('click', resetClock);

