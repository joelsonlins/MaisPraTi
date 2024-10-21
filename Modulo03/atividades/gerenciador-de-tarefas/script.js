let tasks = [];
let titulo = document.getElementById("titulo");
let botaoAdicionarTask = document.getElementById("adicionarTask");
let botaoMostrarTodas = document.getElementById("mostrarTodas");
let botaoMostrarConcluidas = document.getElementById("mostrarConcluidas");
let botaoMostrarNaoConcluidas = document.getElementById("mostrarNaoConcluidas");
let lista = document.getElementById("taskList");

function showTasks(filter) {
  lista.innerHTML = "";
  let filteredTasks = tasks.filter(
    (task) =>
      filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "incomplete" && !task.completed)
  );

  filteredTasks.forEach((task, index) => {
    let item = document.createElement("li");
    item.className = "task-item";
    item.innerHTML = `
            <span style="text-decoration: ${
              task.completed ? "line-through" : "none"
            };">${task.text}</span>
            <div>
                <button onclick="toggleTask(${index})">${
      task.completed ? "Desmarcar" : "Concluir"
    }</button>
                <button onclick="deleteTask(${index})">Excluir</button>
            </div>
        `;
    lista.appendChild(item);
  });
}

function addTask() {
  let input = document.getElementById("taskInput");
  if (input.value) {
    tasks.push({ text: input.value, completed: false });
    input.value = "";
    titulo.innerHTML = "Tarefa adicionada!";
    titulo.style.color = "green";
    showTasks("all");
  } else {
    titulo.innerHTML = "Digite uma tarefa!";
    titulo.style.color = "red";
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  showTasks(document.querySelector(".active")?.dataset.filter || "all");
}

function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks(document.querySelector(".active")?.dataset.filter || "all");
}

botaoAdicionarTask.addEventListener("click", addTask);
botaoMostrarTodas.addEventListener("click", () => showTasks("all"));
botaoMostrarConcluidas.addEventListener("click", () => showTasks("completed"));
botaoMostrarNaoConcluidas.addEventListener("click", () =>
  showTasks("incomplete")
);
