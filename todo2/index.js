let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let add = document.getElementById("add");
let tasks = document.getElementById("tasks");

let data = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    // failure
    msg.innerHTML = "* task title cannot be blank";
  } else {
    // success
    msg.innerHTML = "";
    acceptData();

    // close the modal after submission
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    // IIFE: Immediately Invoked function Expression
  }
};

let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};

// pposting the data
let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });

  localStorage.setItem("tasks", JSON.stringify(data));
  showTasks();

  console.log(data);
};

// get the data and show on screen
let showTasks = () => {
  let task = JSON.parse(localStorage.getItem("tasks"));
  tasks.innerHTML = "";
  task.map((item, index) => {
    return (tasks.innerHTML += `
      <div id=${index}>
      <span class="fw-bold">${item.text}</span>
      <span class="small text-secondary">${item.date}</span>
      <p>${item.description}</p>

      <span>
        <!-- edit -->
        <i
          class="bi bi-pencil-square"
          onclick="editTask(this)"
          data-bs-toggle="modal"
          data-bs-target="#form"
        ></i>

        <!-- delete -->
        <i class="bi bi-trash" onclick="deleteTask(this)"></i>
      </span>
    </div>
      
      `);
  });
  resetForm();
};
let editTask = (e) => {
  textInput.value = e.parentElement.parentElement.children[0].innerHTML;
  dateInput.value = e.parentElement.parentElement.children[1].innerHTML;
  textarea.value = e.parentElement.parentElement.children[2].innerHTML;
  deleteTask(e);
};

let deleteTask = (e) => {
  console.log(e.parentElement.parentElement);
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("tasks", JSON.stringify(data));
  console.log(data);
};
(() => {
  add.setAttribute("data-bs-dismiss", "");
  showTasks();
})();
