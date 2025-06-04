
# 📚 Gestión de Libros

**Gestión de Libros** es una aplicación web desarrollada con Node.js y Express que permite gestionar una colección de libros, incluyendo funcionalidades para agregar, editar, eliminar y listar libros. Además, permite la carga de imágenes asociadas a cada libro, facilitando una gestión visual y organizada.

## 🚀 Características

* **Agregar libros**: Introduce nuevos libros con detalles como título, autor, ISBN, género y una imagen de portada.
* **Editar libros**: Modifica la información existente de cualquier libro en la colección.
* **Eliminar libros**: Elimina libros de la base de datos de forma sencilla.
* **Listar libros**: Visualiza todos los libros registrados en un formato organizado.
* **Carga de imágenes**: Asocia una imagen de portada a cada libro para una mejor identificación visual.

## 🛠️ Tecnologías utilizadas

* **Backend**: [Node.js](https://nodejs.org/) con [Express](https://expressjs.com/)
* **Frontend**: HTML, CSS y JavaScript
* **Base de datos**: [MongoDB](https://www.mongodb.com/) (a través de Mongoose)
* **Manejo de archivos**: [Multer](https://github.com/expressjs/multer) para la carga de imágenes
* **Control de versiones**: [Git](https://git-scm.com/) y [GitHub](https://github.com/)

## 📂 Estructura del proyecto

```
Gestion-de-libros/
├── models/           # Modelos de datos (Mongoose)
├── routes/           # Rutas de la aplicación
├── public/           # Archivos estáticos (CSS, JS, imágenes)
├── uploads/          # Imágenes subidas por los usuarios
├── app.js            # Archivo principal de la aplicación
├── package.json      # Dependencias y scripts del proyecto
└── README.md         # Documentación del proyecto
```

## ⚙️ Instalación y ejecución

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/Francisco172005/Gestion-de-libros.git
   ```

2. **Instala las dependencias**:

   ```bash
   cd Gestion-de-libros
   npm install
   ```

3. **Configura la base de datos**:

   Asegúrate de tener MongoDB instalado y en ejecución. Puedes configurar la URI de conexión en un archivo `.env` si es necesario.

4. **Inicia la aplicación**:

   ```bash
   node app.js
   ```

5. **Accede a la aplicación**:

   Abre tu navegador y visita `http://localhost:3000` para interactuar con la aplicación.

## 📸 Capturas de pantalla



## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
