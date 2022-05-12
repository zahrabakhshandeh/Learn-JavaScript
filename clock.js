setInterval(()=>{
  const clockElement1 = document.querySelector(".hour");
  const clockElement2 = document.querySelector(".minut");
  const clockElement3 = document.querySelector(".second");
  const clockElement4 = document.querySelector(".day-nigth");
  const now = new Date();
  let hour = now.getHours();
  let minut = now.getMinutes();
  let second = now.getSeconds();
  let dayNight = "AM";
  if(hour > 12){
    dayNight = "PM";
    hour = hour - 12;
  }
  if(hour < 10){
    hour = "0" + hour;
  }
  if(minut < 10){
    minut = "0" + minut;
  }
  if(second < 10){
    second = "0" + second;
  }
  clockElement1.textContent = hour;
  clockElement2.textContent = minut;
  clockElement3.textContent = second;
  clockElement4.textContent = dayNight;
});