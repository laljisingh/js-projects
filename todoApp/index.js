let form = document.getElementById("form");
let textinput = document.getElementById("textinput");
let dateinput = document.getElementById("dateinput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let add = document.getElementById("add");

let data = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textinput.value === "") {
    msg.innerHTML = " * Please fill all the fields";
  } else {
    msg.innerHTML = "";
    acceptdata();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();
    (() => {
      add.setAttribute("data-bs-dismiss", "");
      textinput.value = "";
      dateinput.value = "";
      textarea.value = "";
    })();
  }
};
let acceptdata = () => {
  data.push({
    text: textinput.value,
    date: dateinput.value,
    textarea: textarea.value,
  });
  localStorage.setItem("tasks", JSON.stringify(data));
  console.log(data);
  add.innerHTML = "Add";
  textinput.value = "";
  dateinput.value = "";
  textarea.value = "";
  showData();
};
let showData = () => {
  var dt = localStorage.getItem("tasks");
  var nd = JSON.parse(dt);

  for (var i = 0; i < nd.length; i++) {
    console.log(nd[i].text);
    console.log(nd[i].date);
    console.log(nd[i].textarea);

    document.getElementById("task-title").innerHTML = nd[i].text;
    document.getElementById("task-date").innerHTML = nd[i].date;
    document.getElementById("task-desc").innerHTML = nd[i].textarea;
    document.getElementById("btne").style.display = "block";
    document.getElementById("btnd").style.display = "block";
    document.getElementById("textShow").style.display = "block";
  }
};
showData();
function deleteData() {
  localStorage.removeItem("tasks");
  document.getElementById("task-title").innerHTML = "";
  document.getElementById("task-date").innerHTML = "";
  document.getElementById("task-desc").innerHTML = "";
  console.log("delete");
  document.getElementById("btne").style.display = "none";
  document.getElementById("btnd").style.display = "none";
  document.getElementById("textShow").style.display = "none";
}
function editData() {
  add.innerHTML = "Update";
  var dt = localStorage.getItem("tasks");
  var nd = JSON.parse(dt);

  for (var i = 0; i < nd.length; i++) {
    textinput.value = nd[i].text;
    dateinput.value = nd[i].date;
    textarea.value = nd[i].textarea;
  }

  data.push({
    text: textinput.value,
    date: dateinput.value,
    textarea: textarea.value,
  });

  localStorage.setItem("tasks", JSON.stringify(data));
  console.log("edit");
}
