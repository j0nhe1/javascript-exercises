const leapYears = function(year) {
    if ((year % 100) == 0 && (year % 400) == 0) {
        return true;
    } else if ((year % 100) == 0) {
        return false;
    } else if ((year % 4) == 0) {
        return true;
    } else {
        return false;
    }
};

leapYears(1996)
leapYears(1997)
leapYears(34992)
leapYears(1900)
leapYears(1600)
leapYears(700)

// Do not edit below this line
module.exports = leapYears;
