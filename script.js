
document.getElementById("akanForm").addEventListener("submit", function(event){
    event.preventDefault(); // prevent page from refreshing

    // Get user input
    let day = Number(document.getElementById("day").value);
    let month = Number(document.getElementById("month").value);
    let year = Number(document.getElementById("year").value);
    let gender = document.querySelector('input[name="gender"]:checked');

    // Validation
    if(day < 1 || day > 31){
        alert("Invalid day. Enter a value between 1 and 31.");
        return;
    }
    if(month < 1 || month > 12){
        alert("Invalid month. Enter a value between 1 and 12.");
        return;
    }
    if(!gender){
        alert("Please select a gender.");
        return;
    }

    // Akan names and days
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Day of week calculation
    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = day;

    const dayOfWeek = Math.floor(
        ( ( (4 * CC - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD ) % 7 )
    );

    const index = (dayOfWeek + 7) % 7; // ensure positive index

    // Determine Akan name
    const akanName = gender.value === "male" ? maleNames[index] : femaleNames[index];

    // Display result
    document.getElementById("result").innerHTML =
        "You were born on <strong>" + daysOfWeek[index] + "</strong>.<br>Your Akan name is <strong>" + akanName + "</strong>.";
});



