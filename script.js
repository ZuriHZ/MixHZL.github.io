document.addEventListener('DOMContentLoaded', function() {
    // Simular un retraso en la carga de la página (puedes eliminar esto en un entorno real)
    setTimeout(function() {
        // Ocultar el preloader
        document.getElementById('loading').style.display = 'none';

        // Mostrar el contenido de la página
        document.getElementById('content').style.display = 'block';
    }, 2000); // Simula un retraso de 2 segundos, puedes ajustar esto según tus necesidades
});

document.addEventListener('DOMContentLoaded', function() {
    // Simular un retraso en la carga de la página
    setTimeout(function() {
        // Ocultar el preloader
        document.getElementById('preloader').style.display = 'none';

        // Mostrar el contenido de la página
        document.getElementById('content').style.display = 'block';
    }, 2000); // Simula un retraso de 2 segundos, puedes ajustar esto según tus necesidades
});

function mostrarSeccion(seccion) {
    // Ocultar todas las secciones
    document.querySelectorAll('.seccion').forEach(function(seccionElement) {
        seccionElement.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    document.getElementById(seccion).style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos de video
    const videos = document.querySelectorAll(".video-wrapper video");
  
    // Añade un evento de clic a cada video
    videos.forEach(video => {
      video.addEventListener("click", function() {
        // Desactiva la clase fullscreen en todos los videos
        videos.forEach(otherVideo => {
          if (otherVideo !== video && otherVideo.classList.contains("fullscreen")) {
            otherVideo.classList.remove("fullscreen");
          }
        });
  
        // Activa o desactiva la clase fullscreen en el video actual
        this.classList.toggle("fullscreen");
      });
    });
  });
  