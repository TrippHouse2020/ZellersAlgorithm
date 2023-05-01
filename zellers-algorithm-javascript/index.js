function zellersAlgorithm() {
    let day = parseInt(document.getElementById('day').value);
    let month = parseInt(document.getElementById('month').value);
    let year = parseInt(document.getElementById('year').value);

    if (month < 3) {
        month = month + 12;
        year = year - 1;
    }

    let century = Math.floor(year / 100);
    let yearOfCentury = year % 100;

    let h = (day + Math.floor(13 * (month + 1) / 5) + yearOfCentury + Math.floor(yearOfCentury / 4) + Math.floor(century / 4) + 5 * century) % 7;

    let dayOfWeek = '';

    switch (h) {
        case 0:
            dayOfWeek = "Saturday";
            break;
        case 1:
            dayOfWeek = "Sunday";
            break;
        case 2:
            dayOfWeek = "Monday";
            break;
        case 3:
            dayOfWeek = "Tuesday";
            break;
        case 4:
            dayOfWeek = "Wednesday";
            break;
        case 5:
            dayOfWeek = "Thursday";
            break;
        case 6:
            dayOfWeek = "Friday";
            break;
    }

    let display = document.getElementById("display");
    let textNode = document.createTextNode(dayOfWeek);

    if (display.hasChildNodes()) {
        display.firstChild.replaceWith(textNode);
    } else {
        display.appendChild(textNode);
    }
}
