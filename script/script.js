let date =  new Date();
let currDate = date.toDateString();
let currTime = date.toLocaleTimeString();
// let date2 = date.toLocaleDateString();
// console.log(currDate);
// console.log(currTime);
document.getElementById('dateTime').innerHTML = currDate + ', ' + currTime;

let alertMsg = document.getElementById('alert');

//on click event, this function will run and show alert, change background color and display information about Ward Section
function alertWard(){
    document.getElementById("alert1").innerHTML = "Ward No : 2A";
    document.getElementById("ward").style.backgroundColor = "rgb(91, 91, 187)";
    alert('Ward 2A')
    console.log('Ward 2A')
}

//on double click event, this function will run and show alert, change background color and display information about Room Section
function alertRoom(){
    console.log('Premier Single')
    alert('Premier Single')
    document.getElementById("alert1").innerHTML = "Room Type : Premier Single";
    document.getElementById("room").style.backgroundColor = "rgb(173, 26, 173)";
}

//on click event, this function will run and show alert, change background color and display information about Bed Section
function alertBed(){
    document.getElementById("bed").style.backgroundColor = "#ffa500";
    alert('Bed No 123456');
    document.getElementById("alert1").innerHTML = "Bed No : 123456";
}

//on click event, this function will run and show alert, change background color and display information about Payment Section
function alertPayment() {
    document.getElementById("alert1").innerHTML = " Payment option available : Insurance";
    document.getElementById("payment").style.backgroundColor = "rgb(13, 138, 13)";
    alert('Insurance');
}