# Web timer

## Details of stack, third party, programming language
- FrontEnd
- No third party
- Java script

## Website main functionality
Web timer website created from scratch, not used javascript 'new Date()' Object. This website created with out html tags means html inside does n't write a html code. Html write from js for entire website. Also css write from js for entire webiste styles. When new user visit the web timer than first help guide show for **understand** the website.

**How it timer work:** 
- What is purpose of this website ? <br> This website purpose is online timer check. You can use the timer by this website on browser and any devices. Here 99 hours timer available. A bell rings every hour. Any doubts & questions about this website click Help.

- How it woks ? <br> JavaScript 'new Date()' Object not used. Here fully scratch functionality built with mathematics and CSS propertie transform. timer inside 3 sections there are. That was 1.Hour, 2.Minute, 3.Seconds. Each sections are formula for run the timer. when user set for timer 30 second that 30 value convert in 'degreeValue'. Same for 1 hour timer set that 1 value convert in 'hours_degreeValue' and 5 minute timer set that 5 value convert in 'minute_degreeValue'.Three formulas written here ->
    - *First one is degreevalue -> 30 * 6 = 180. (user seted seconds * 6degree = degreeValue.)

    - *Second one is minutevalue -> 60 * 5 * 6. (60 * user seted minutes * 6degree = minute_degreeValue.)

    - *Third one is hourvalue -> i.user seted hours * 60 = hour_mulifly_60_value. | ii.hour_mulifly_60_value * 60 * 6. (hour_mulifly_60_value * 60 * 6degree = hours_degreeValue.)

    Count variable add 6 number for count increase.'count = count + 6. And minute_count_init variable add 360 number on count equal to 360. 'minute_count_init + 360'. Restart for current seted timer again run. cancel for stop the timer.

- Only BROWSER inside work ? <br> This timer was work only inside of BROWSER. User set the timer and close the website than timer did not run. Minimize the website tab than timer was work. when website tab close then timer was stop and total website restart. All the workflow apply on every devices loptop, tab, mobile. The timer was NOT connected on USER OS SYSTEM!. Timer doesn't work in Multiple chrome tabs. apply to all devices. AND SOMETIMES TIMER WEBSITE STYLE DOES NOT WORK CORRECTLY IN LAPTOP, TAB, PHONE, DEVICES.

<a href="https://website-timer.netlify.app/" target="_blank">website link</a>
