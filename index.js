document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("title"); 
    const description = document.getElementById("description");
    const table = document.getElementById("table");
    const alert = document.getElementById("alert");
    const btn = document.getElementById("add");
  
    function addTodo() { // Función para agregar una tarea
      if (title.value === '' || description.value === '') { // Si el titulo o la descripción están vacíos
        alert.classList.remove('d-none');
        alert.innerText = 'Son requeridos el titulo y la descripción';
        return;
      }
  
      alert.classList.add("d-none"); 
      const row = table.insertRow();
      row.innerHTML = `
      <td>${title.value}</td>
      <td>${description.value}</td>
      <td class="text-center">
          <input type="checkbox">
      </td>
      <td class="text-right">
          <button class="btn btn-primary mb-1">
              <i class="fa fa-pencil"></i>
          </button>
          <button class="btn btn-danger mb-1 ml-1">
              <i class="fa fa-trash"></i>
          </button>
      </td>
      `;
    }
    btn.onclick = addTodo; // Al hacer click en el botón se ejecuta la función addTodo
  });
  