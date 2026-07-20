const title = document.getElementById("title");
const themeBtn = document.getElementById("themeBtn");
const goalInput = document.getElementById("goalInput");
const goalText = document.getElementById("goalText");
const saveGoal = document.getElementById("saveGoal");
const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const timer = document.getElementById("timer");
const date = document.getElementById("date");

const today = new Date();

date.textContent = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
});

themeBtn.addEventListener("click", function(){

    console.log("Button clicked");

});
saveGoal.addEventListener("click", function(){

    console.log("Goal saved");

});

addTask.addEventListener("click", function(){

    console.log(taskInput.value);

});

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(function(task) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);

});
addTask.addEventListener("click", function(){
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
li.textContent = taskInput.value;
tasks.push(taskInput.value);
taskList.appendChild(li);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";

});

const savedGoal = localStorage.getItem("goal");
if (savedGoal) {
    goalText.textContent = "🎯 Today's Goal: " + savedGoal;
}
saveGoal.addEventListener("click", function () {

    goalText.textContent = "🎯 Today's Goal: " + goalInput.value;
    localStorage.setItem("goal", goalInput.value);
    goalInput.value = "";


});
const quotes = [
    "Small steps every day.",
    "Believe in yourself.",
    "Progress, not perfection.",
    "Never stop learning.",
    "Discipline beats motivation."
];
const quoteText = document.getElementById("quoteText");
const randomIndex = Math.floor(Math.random() * quotes.length);

quoteText.textContent = quotes[randomIndex];
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});



const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const pauseBtn = document.getElementById("pauseBtn");
let seconds = 25 * 60;
let interval;
startBtn.addEventListener("click", function () {

    if (interval) {
        return;
    }

    interval = setInterval(function () {

        seconds--;

        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;

        timer.textContent =
            minutes + ":" + String(remainingSeconds).padStart(2, "0");

        if (seconds <= 0) {
            clearInterval(interval);
            interval = null;
            alert("Time is up!");
        }

    }, 1000);

});

pauseBtn.addEventListener("click", function () {

    clearInterval(interval);
    interval = null;

});
resetBtn.addEventListener("click", function () {

    clearInterval(interval);

    interval = null;

    seconds = 25 * 60;

    timer.textContent = "25:00";

});
