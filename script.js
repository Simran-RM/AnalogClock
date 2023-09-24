//Rotations
//12 hours = 360deg; 1hour = 30deg; h hours=30h+m/2;
//60m=30deg => 1min=1/2 deg=> m min=m/2 deg
//60min=360deg; 1min=6deg; m min=6m deg
//60sec=360deg; 1sec=6deg; s sec=6s deg

hr = document.getElementById('hour');
min = document.getElementById('min');
sec = document.getElementById('sec');

function displayTime(){
    let date=new Date();

    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hRotation = 30 * hh + mm/2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform=`rotate(${hRotation}deg)`;
    min.style.transform=`rotate(${mRotation}deg)`;
    sec.style.transform=`rotate(${sRotation}deg)`;

}

setInterval(displayTime,1000);