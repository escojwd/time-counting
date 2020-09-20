// Task
// 1. set a time with "now time";
// 2. choose "till time";
// 3. make "countdown time";



let presentDate = new Date();

let newDate = new Date("Sep 20 2020 23:59:59");

let timeLeft = Math.floor((newDate - presentDate)/1000);

// let myinterval = setInterval(betweenTime, 5000);

let seconds = timeLeft;

function betweenTime(seconds){
    
    seconds -= 1000;
    
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let day = Math.floor(hours/24);
    let month = Math.floor(day/30);
    let year = Math.floor(month/12);

    let result = "";
    
    let countedSeconds = seconds % 60;
    
    
    minutes = minutes % 60;
    hours = hours % 24;
    day = day % 30;
    month = month % 12;
    
    
    if(countedSeconds < 1){
        result = "0 second "
    }else{
        result = countedSeconds + " second ";
    }
    
    if(minutes > 0){
        result = result +  minutes + " minute ";
    }

    if(hours > 0){
        result = result +  hours + " hour ";
    }

    if(day > 0){
        result = result +  day + " day ";
    }

    if(month > 0){
        result = result +  month + " month ";
    }
    
    if(year > 0){
        result = result +  year + " year ";
    }
    // console.clear();

    return result;
}

// setInterval(betweenTime)*1000;

// console.log(presentDate);

// console.log(newDate);

setInterval(function(){ 
    // betweenTime(seconds -= 1)
    console.clear(betweenTime(seconds));
    console.log(betweenTime(seconds -= 1));
}, 1000);

// console.log(seconds);




// console.log(y)