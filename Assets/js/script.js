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

// //storage set up
// const localStorageGet = (key) => {
//   return JSON.parse(localStorage.getItem(key));
// };

// //write to the local storage
// const localStorageWrite = (key, data) => {
//   //ternary operator if true
//   if (data ? "" : console.log("enter something"));
//   localStorage.setItem(key, JSON.stringify(data));
// };

// //get rid of localstorage
// const clearLS = () => {
//   localStorageGet.clear();
// };
const getEventForTimeBlock = (workingDay) => {};

const renderTimeBlocks = () => {
  //for each working hour create and append timeblocks to the time block
  const timeBlocks = $("#time-blocks");
  const renderTimeBlock = (workingDay) => {
    //make the timeblocks dynamically
    const timeBlock = `<div class="row p-2">
    <div class="col-md-1 col-sm-12 text-center my-1 d-flex flex-column justify-content-center">${
      workingDay.label
    }</div>
   <textarea class="col-md-9 col-sm-12" rows="3"> ${getEventForTimeBlock(
     workingDay.key
   )}</textarea>
   <div class="col-md-2 col-sm-12 text-center my-1 d-flex flex-column justify-content-center">
      <button type="button"  data-hour=${
        workingDay.key
      } class="btn btn-success">Save</button> 
    </div>`;
    //append to parent
    timeBlocks.append(timeBlock);
  };
  workingDay.forEach(renderTimeBlock);
};

const onReady = () => {
  console.log("ready");
  renderTimeBlocks();
};

//document.ready ? will check notes
$(document).ready(onReady);
