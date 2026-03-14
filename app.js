// const inputBox = document.querySelector("#input-box");
// const listContainer = document.querySelector(".list-container");
// const addBtn = document.querySelector("#addBtn");
// const clearBtn = document.querySelector("#clear-btn");

// const addTask = () => {
//   const currentVal = inputBox.value.trim();
//   if (currentVal === "") {
//     alert("You must write something!");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = currentVal;
//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     li.appendChild(span);
//     listContainer.appendChild(li);

//     inputBox.value = "";
//     saveData();
//     taskCount();
//   }
// };

// addBtn.addEventListener("click", addTask);

// listContainer.addEventListener(
//   "click",
//   (e) => {
//     if (e.target.tagName === "LI") {
//       e.target.classList.toggle("checked");
//       saveData();
//     } else if (e.target.tagName === "SPAN") {
//       e.target.parentElement.remove();
//       saveData();
//     }
//   },
//   false,
// );

// // LocalStroage logic
// const saveData = () => {
//   localStorage.setItem("todo-data", listContainer.innerHTML);
// };

// function showTask() {
//   listContainer.innerHTML = localStorage.getItem("todo-data");
//   if (data) {
//     listContainer.innerHTML = data;
//   }
//   taskCount();
// }
// inputBox.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     addTask();
//   }
// });

// const taskCount = () => {
//   const count = listContainer.querySelectorAll("li").length;
//   const completed = listContainer.querySelectorAll("li.checked").length;
//   const pending = count - completed;
//   document.querySelector("#task-count").textContent =
//     `Pending Tasks: ${pending} | Completed Tasks: ${completed}`;
// };

// clearBtn.addEventListener("click", () => {
//   if (confirm("Are you sure you want to clear all tasks?")) {
//     listContainer.innerHTML = "";
//     saveData();
//     taskCount();
//   }
// });
// showTask();

const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector(".list-container"); // Class hai toh . sahi hai
const addBtn = document.querySelector("#addBtn");
const clearBtn = document.querySelector("#clear-btn");

const addTask = () => {
  const currentVal = inputBox.value.trim();
  if (currentVal === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = currentVal;
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    listContainer.appendChild(li);

    inputBox.value = "";
    saveData();
    taskCount();
  }
};

addBtn.addEventListener("click", addTask);

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
      taskCount(); // Toggle ke baad count update hona chahiye
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
      taskCount();
    }
  },
  false,
);

// LocalStorage logic
const saveData = () => {
  localStorage.setItem("todo-data", listContainer.innerHTML);
};

function showTask() {
  const data = localStorage.getItem("todo-data");
  // Sirf tab data load karein agar wo null na ho
  if (data) {
    listContainer.innerHTML = data;
  }
  taskCount();
}

inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

const taskCount = () => {
  const count = listContainer.querySelectorAll("li").length;
  const completed = listContainer.querySelectorAll("li.checked").length;
  const pending = count - completed;
  document.querySelector("#task-count").textContent =
    `Pending Tasks: ${pending} | Completed Tasks: ${completed}`;
};

clearBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all tasks?")) {
    listContainer.innerHTML = "";
    saveData();
    taskCount();
  }
});

// App load hote hi data load karein
showTask();
