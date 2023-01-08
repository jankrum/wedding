const countDown = document.querySelector("#countDown")
const daysLeft = Math.floor((new Date("2023-05-27") - Date.now()) / 1000 / 60 / 60 / 24)
countDown.innerHTML = `${daysLeft} Days To Go!`