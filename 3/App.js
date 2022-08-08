const root = document.getElementById("root");

function getTime(date) {
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

class Clock {
  constructor(initialDate) {
    this.time = initialDate;
    this.timerDiv = document.createElement("div");

    root.appendChild(this.timerDiv);

    this.onCreate();
  }

  onCreate() {
    setInterval(() => {
      this.timerDiv.innerText = getTime(new Date());
    }, 1000);
  }
}

new Clock(new Date());
new Clock(new Date("2001-11-11"));
