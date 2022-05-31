const $days = document.getElementById("days"),
    $hours = document.getElementById("hours"),
    $minutes = document.getElementById("minutes"),
    $seconds = document.getElementById("seconds"),
    $finalMessage = document.querySelector(".final-sms");

// Future date
const futureDate = new Date("Dec 25, 2022 00:00:00").getTime();

// Get remaining time
const getRamainTime = setInterval(() => {
    // Get current date and milliseconds
    const currentDate = new Date().getTime();
    // Get the distances between both dates
    const distance = futureDate - currentDate;
    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // We write results
    $days.innerHTML = days.toString();
    $hours.innerHTML = hours.toString().padStart(2, "0");
    $minutes.innerHTML = minutes.toString().padStart(2, "0");
    $seconds.innerHTML = seconds.toString().padStart(2, "0");
    // If the countdown is finished
    if (distance <= 1) {
        clearInterval(getRamainTime);
        $days.innerHTML = "0";
        $hours.innerHTML = "00";
        $minutes.innerHTML = "00";
        $seconds.innerHTML = "00";
        $finalMessage.style.transform = "translateY(0)";
    }
}, 1000);
