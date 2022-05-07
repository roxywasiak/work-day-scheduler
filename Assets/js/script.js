//using moment.js to get the date format and i will add it to the #currentDay id
const date = () => {
  //date format using moment js
  const newDate = moment().format("dddd,  Do of  MMM, YYYY");
  $("#currentDay").append(newDate);
};

// WILL USE THIS IN THE RENDER TIMEBLOCKS
// const currentHour = moment().hour;
// console.log(currentHour);

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

//show my timeblocks to appear on the page
//create the elements and add them to the container
//USE MOMENT.HOUR refer to the top where you wrote
const renderTimeBlocks = (each) => {};

//the save button to save in ls
const saveBtn = () => {};

//create the elements, set them give them attr
const renderPlanner = () => {};

// show my planner and then it will load
const showPlanner = () => {};

$(window).on("load", showPlanner);
