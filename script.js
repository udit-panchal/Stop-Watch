var hr = 00;
var min = 00;
var sec = 00;
var count = 00;

var timer = false;


function start() {
    timer = true;
    stopwatch();
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    hr = 00;
    min = 00;
    sec = 00;
    count = 00;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";

}

function stopwatch() {
    if (timer == true) {
        count = count + 1;

        if (count == 99) {
            count = 00;
            sec = sec + 1;
        }
        
        if ( sec == 60)
        {
            sec = 00;
            min = min + 1;
        }
        
        if ( min == 60)
        {
            min = 00;
            sec = 00;
            hr = hr + 1;
        }

        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        if( hr < 10)
        {
            hrString = "0" + hrString;
            document.getElementById('hr').innerHTML = hrString;
        }
        else{
            document.getElementById('hr').innerHTML = hr;
        }

        if( min < 10)
        {
            minString = "0" + minString;
            document.getElementById('min').innerHTML = minString;
        }
        else{
            document.getElementById('min').innerHTML = min;
        }

        if( sec < 10)
        {
            secString = "0" + secString;
            document.getElementById('sec').innerHTML = secString;
        }
        else{
            document.getElementById('sec').innerHTML = sec;
        }

        if( count < 10)
        {
            countString = "0" + countString;
            document.getElementById('count').innerHTML = countString;
        }
        else{
            document.getElementById('count').innerHTML = count;
        }

        // document.getElementById('min').innerHTML = min;
        // document.getElementById('sec').innerHTML = sec;
        // document.getElementById('count').innerHTML = count;

        setTimeout("stopwatch()", 10);
    }
}   