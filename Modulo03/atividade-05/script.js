const entry = document.getElementById("entry");
const form = document.getElementById("form");
const ul = document.getElementById("todo-app");
const alertP = document.querySelector(".alert");
const emptyState = document.getElementById("empty-state");

const clearBtn = document.querySelector(".clear-btn");
const submitBtn = document.querySelector(".submit-btn");
const cancelBtn = document.querySelector(".cancel-btn");

let editFlag = false;
let editElement;
let editID;

let LSkey = "items";


form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);
cancelBtn.addEventListener("click", setBackToDefault);
window.addEventListener("DOMContentLoaded", setupItems);

function createLIS(val, id) {
  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  li.setAttribute("data-id", id);
  li.innerHTML = `
                <p class="text mb-0 flex-grow-1">${val}</p>
                <div class="btn-group">
                    <button class="btn btn-icon edit text-white bx bxs-edit"></button>
                    <button class="btn btn-icon check text-white bx bx-check"></button>
                    <button class="btn btn-icon delete text-white bx bxs-trash"></button>
                </div>`;

  li.querySelector(".edit").addEventListener("click", editItem);
  li.querySelector(".check").addEventListener("click", checkItem);
  li.querySelector(".delete").addEventListener("click", deleteItem);

  ul.appendChild(li);
  updateEmptyState();
}

function addItem(e) {
  e.preventDefault();
  let val = entry.value.trim();
  let id = new Date().getTime().toString();

  if (val && !editFlag) {
    createLIS(val, id);
    displayAlert("Item adicionado com sucesso!", "success");
    clearBtn.classList.remove("d-none");
    addToLS(val, id);
    entry.value = "";
  } else if (val && editFlag) {
    editElement.innerText = val;
    displayAlert("Item alterado com sucesso!", "info");
    editLS(val, editID);
    setBackToDefault();
  } else {
    displayAlert("Por favor, digite um item!", "danger");
  }
}

function displayAlert(msg, type) {
  alertP.innerText = msg;
  alertP.className = `alert alert-${type} show`;
  setTimeout(() => {
    alertP.className = "alert";
  }, 1500);
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = element.querySelector(".text");
  entry.value = editElement.innerText;
  editFlag = true;
  editID = element.dataset.id;

  submitBtn.innerHTML = '<i class="bx bx-check-circle me-1"></i>Editar';
  cancelBtn.classList.remove("d-none");
  clearBtn.classList.add("d-none");
}

function checkItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  element.classList.toggle("liChecked");
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  ul.removeChild(element);
  displayAlert("Item removido com sucesso!", "warning");

  updateEmptyState();
  if (ul.children.length === 0) {
    clearBtn.classList.add("d-none");
  }
  removeFromLS(id);
}

function clearItems() {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  displayAlert("Todos os itens foram removidos!", "danger");
  clearBtn.classList.add("d-none");
  localStorage.removeItem(LSkey);
  setBackToDefault();
  updateEmptyState();
}

function setBackToDefault() {
  entry.value = "";
  editFlag = false;
  editElement = undefined;
  editID = undefined;
  submitBtn.innerHTML = '<i class="bx bx-plus-circle me-1"></i>Enviar';
  cancelBtn.classList.add("d-none");
  if (ul.children.length > 0) {
    clearBtn.classList.remove("d-none");
  }
}

function addToLS(val, id) {
  const item = { id, val };
  let items = getLS();
  items.push(item);
  localStorage.setItem(LSkey, JSON.stringify(items));
}

function removeFromLS(id) {
  let items = getLS();
  items = items.filter((item) => item.id !== id);
  if (items.length > 0) {
    localStorage.setItem(LSkey, JSON.stringify(items));
  } else {
    localStorage.removeItem(LSkey);
  }
}

function editLS(val, id) {
  let items = getLS();
  items = items.map((item) => {
    if (item.id === id) {
      item.val = val;
    }
    return item;
  });
  localStorage.setItem(LSkey, JSON.stringify(items));
}

function getLS() {
  return localStorage.getItem(LSkey)
    ? JSON.parse(localStorage.getItem(LSkey))
    : [];
}

function setupItems() {
  let items = getLS();
  if (items.length > 0) {
    items.forEach((item) => {
      createLIS(item.val, item.id);
    });
    clearBtn.classList.remove("d-none");
  }
  updateEmptyState();
}

function updateEmptyState() {
  if (ul.children.length === 0) {
    emptyState.classList.remove("d-none");
  } else {
    emptyState.classList.add("d-none");
  }
}
