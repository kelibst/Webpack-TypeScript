import renderContent from "./modules/renderContent";
import Todo from "./modules/Todo";

const form = document.querySelector(".new-todo-form") as HTMLFormElement;
const state = document.querySelector("#state") as HTMLSelectElement;
const description = document.querySelector("#description") as HTMLInputElement;
const ul = document.querySelector(".todo-list") as HTMLUListElement;
const task = document.querySelector("#task") as HTMLInputElement;

let allTask: Todo[] = [];

window.onload = (e: Event) => {
  let newAllTask: string = localStorage.getItem("allTask") || "[]";
  if (newAllTask) {
    let somenewAllTask: Todo[] = JSON.parse(newAllTask!);
    allTask = somenewAllTask;
    if (allTask) {
      allTask.map((task, index) => {
        renderContent(task.state, task.task, task.description, ul, index);
      });
    }
  }
};

ul.addEventListener("click", (e) => {
  const target = e.target as HTMLButtonElement;

  if (target.classList.contains("btn-rmv")) {
    let Tasks = allTask.filter(
      (tsk, ind) => ind !== Number(target.id.charAt(target.id.length - 1))
    );

    localStorage.setItem("allTask", JSON.stringify(Tasks));
    ul.removeChild(target.parentNode!);
  } else if (target.classList.contains("btn-edt")) {
    let currentTask = allTask.find(
      (tsk, ind) => ind !== Number(target.id.charAt(target.id.length - 1))
    );

    state.value = currentTask ? currentTask.state : "";
    task.value = currentTask ? currentTask.task : "";
    description.value = currentTask ? currentTask.description : "";
  }
});

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const tTask = new Todo(state.value, task.value, description.value);

  allTask.push(tTask);
  localStorage.setItem("allTask", JSON.stringify(allTask));
  renderContent(
    state.value,
    task.value,
    description.value,
    ul,
    allTask.length - 1
  );
  form.reset();
});
