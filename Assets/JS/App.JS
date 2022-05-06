//using moment.js to get the date format and i will add it to the #currentday id
const date = () => {
    //date format using moment js
    const newDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").append(newDate);
};


//the object array where the timeblocks labels are
const workingDay = [
  { label: "9am", key: 9 },
  { label: "10am", key: 10 },
  { label: "11am", key: 11 },
  { label: "12pm", key: 12 },
  { label: "1pm", key: 13 },
  { label: "2pm", key: 14 },
  { label: "3pm", key: 15 },
  { label: "4pm", key: 16 },
  { label: "5pm", key: 17 },
];

//storage set up 
const localStorageGet = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

//write to the local storage
const localStorageWrite = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

//get rid of localstorage
// const 

//show the current time
const renderDate = () => {};

//show my timeblocks to appear on the page
const renderTimeBlocks = () => {};

const saveBtn = () => {}

//main fuunction which will 
const showPlanner = () => {};
$(document).ready(() {
console.log("ready");
});