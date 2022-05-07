//using moment.js to get the date format and i will add it to the #currentDay id
const date = () => {
  //date format using moment js
  const newDate = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").append(newDate);
};

//the object array where the timeblocks labels are for each hour
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
};

//write to the local storage
const localStorageWrite = (key, data) => {
  //ternary operator if true
  if (data ? "" : console.log("enter something"));
  localStorage.setItem(key, JSON.stringify(data));
};

//get rid of localstorage
const clearLS = () => {
  localStorageGet.clear();
};

// WILL USE THIS IN THE RENDER TIMEBLOCKS
// const currentHour = moment().hour;
// console.log(currentHour);
//show my timeblocks to appear on the page
//create the elements and add them to the container
const renderTimeBlocks = (each) => {
  const timeNow = moment().hour;

  const createElements = (each) => {
    //gets all the timeblocks from html code adds to div
    $("#container").append($("div"));
    //adds the class for the timeblock second div
    .addClass("time-block p-2")
    sets the attributes 
    .attr("data-key",  `${each.key}`)
    .append (

    )
};

//the save button to save in ls
const saveBtn = (event) => {
  //the data within the key when the saveBtn is clicked
  const keyClicked = $(event.target).attr("data-key");
  //gets rid of things stored from savBtn from LS

  //add the text items once you create with jquery
  clearLS(keyClicked);
  if (keyClicked) {
    showPlanner();
  }
};

//create the elements, set them give them attr
const renderPlanner = () => {
  //when clicked the events get handled
  //?handle the savBtn click call it
  //show the blocks on the page
  renderTimeBlocks();
};

// show my planner and then it will load
const showPlanner = () => {
  //show the date at the top
  date();
  //show the planner
  renderPlanner();
};

//document.ready ? will check notes
$(document).ready(showPlanner);
