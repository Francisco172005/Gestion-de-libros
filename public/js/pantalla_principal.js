document.addEventListener('DOMContentLoaded', function() {
  // Elementos principales
  const dialog = document.getElementById('list_book');
  const formLibro = document.getElementById('form-libro');
  const libroContainer = document.getElementById('libro-container');
  const adButton = document.getElementById('ad-book');
  const delButton = document.getElementById('delete_book');

  // Mostrar el modal para agregar libro
  adButton.addEventListener('click', () => dialog.showModal());

  // Cancelar y cerrar el modal
  delButton.addEventListener('click', () => {
    if (confirm('¿Está seguro que desea cancelar?')) {
      formLibro.reset();
      dialog.close();
    }
  });

  // Enviar el formulario por AJAX
  formLibro.addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(formLibro);
    try {
      const response = await fetch('/agregar', {
        method: 'POST',
        body: formData
      });
      const result = await response.json();
      if (response.ok) {
        agregarLibroAlDOM(result.libro);
        formLibro.reset();
        dialog.close();
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      alert('Error al agregar el libro');
    }
  });

  // Cargar libros al iniciar
  async function cargarLibros() {
    try {
      const response = await fetch('/api/libros');
      if (response.ok) {
        const libros = await response.json();
        libroContainer.innerHTML = '';
        libros.forEach(libro => agregarLibroAlDOM(libro));
      }
    } catch (error) {
      libroContainer.innerHTML = '<p>Error cargando libros</p>';
    }
  }

  // Agregar libro al DOM con estilo
  function agregarLibroAlDOM(libro) {
    const div = document.createElement('div');
    div.className = 'libro-card';
    div.innerHTML = `
      <img src="../img/favicon.png" alt="Portada del libro" class="libro-img"/>
      <div class="libro-info">
        <h3>${libro.title}</h3>
        <p><strong>Autor:</strong> ${libro.autorBook}</p>
        <p><strong>Año:</strong> ${libro.anoLibro}</p>
        <p><strong>Género:</strong> ${libro.generoLibro}</p>
        <p><strong>Descripción:</strong> ${libro.descrip_book}</p>
        <p><strong>Páginas:</strong> ${libro.nPagina}</p>
        ${libro.archivoPath ? `<a href="/${libro.archivoPath}" target="_blank">Ver archivo</a>` : ''}
      </div>
      <button class="delete-btn">Eliminar</button>
    `;
    // Eliminar del DOM (solo visual)
    div.querySelector('.delete-btn').addEventListener('click', function() {
      div.remove();
      // Aquí puedes agregar una petición para eliminar de la BD si lo deseas
    });
    libroContainer.appendChild(div);
  }

  cargarLibros();
});