 var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseInt(prompt("Enter age"));
     floatDays = parseFloat(floatAge*365.25);
     floatMonths = parseFloat(floatAge*12);
     intWeeks = parseInt(floatDays/7);
     intFortnights = parseInt(floatDays/14);
     
     alert("Your age is = " + floatAge + " Years" + '\n' +
           floatDays + " Days" + '\n' +
           floatMonths + " Months" + '\n' +
           intWeeks + " Weeks" + '\n' +
           intFortnights + " Fortnights");