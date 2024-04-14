// It will be used when we set custom date and want to increment time ourselves
// let set_date = 14;
// let set_months = 3;
// let set_hours = 17;
// let set_minutes = 20;
// let set_seconds = 30;

function updateTime() {

    // It will be used when we set custom date and want to increment time ourselves
    // const currentDate = new Date(`April ${set_date}, ${2024}, ${set_hours}:${set_minutes}:${set_seconds}`);
    
    // Get the current date and time
    const currentDate = new Date();
    // Get the target date up to which countdown will run
    const targetDate = new Date("April 30, 2024, 17:21:00");

    // Calculates the difference between target and current date and returns the result in milliseconds
    let timeDifference = targetDate.getTime() - currentDate.getTime();

    // Convert milliseconds into days, hours, minutes and seconds
    let days = Math.floor((timeDifference / (1000 * 60 * 60 * 24)));
    let hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    let seconds = Math.floor((timeDifference / 1000) % 60);

    // Checking if target date has already coressed
    if(timeDifference < 0)
    {
        // If crossed then stop the function to excecute
        // console.log("Time completed!!");
        
        // jQuery
        $('#root').text("Time Completed!!");
        // JS DOM
        // document.getElementById('root').innerHTML = "Time Completed!!";
        
        clearInterval(myInterval);
    }
    else
    {
        // If not keep displaying output
        // console.log(`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`);

        // jQuery
        $('#days').text(days);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
        
        // JS DOM
        // document.getElementById('days').innerHTML = days;
        // document.getElementById('hours').innerHTML = hours;
        // document.getElementById('minutes').innerHTML = minutes;
        // document.getElementById('seconds').innerHTML = seconds;
    }



    // It will be used when we set custom date and want to increment time ourselves
    // set_seconds++;
    // if(set_seconds > 59)
    // {
    //     set_seconds = 0;
    //     set_minutes++;
    //     if(set_minutes > 59)
    //     {
    //         set_seconds = 0;
    //         set_minutes = 0;
    //         set_hours++;
    //         if(set_hours > 23)
    //         {
    //             set_seconds = 0;
    //             set_minutes = 0;
    //             set_hours = 0;
    //             set_date++;
    //         }
    //     }
    // }

}
let myInterval = setInterval(updateTime, 1000);