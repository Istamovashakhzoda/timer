"use script"
   const sedDiv = document.getElementById('sed');
   const minDiv = document.getElementById('min');
   const hourDiv = document.getElementById('hour');

   setInterval(updateClock , 1000)

   function updateClock(){
    let date = new Date(),
    sed = date.getSeconds()/60
    min = (date.getMinutes()+sed) /60
    hour = (date.getHours()+min) /12;
    
    sedDiv.style.transform = "rotate(" +(sed*360) + "deg)";
    minDiv.style.transform = "rotate(" +(min*360) + "deg)"
    hourDiv.style.transform = "rotate(" +(hour*360) + "deg)"  
  }

  updateClock





















// setInterval(() => {
//   const times = document.getElementById("times")
// const vaqt = new Date()
// const soat = vaqt.getHours()
// const minute = vaqt.getMinutes()
// const secund = vaqt.getSeconds()
// const count = soat + ":" + minute + ":" + secund
// times.value =count
// }, 1);