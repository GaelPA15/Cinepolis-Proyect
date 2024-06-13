$(document).ready(function () {
  // Inicializar tooltips de Bootstrap
  $('[data-toggle="tooltip"]').tooltip();

  // Inicializar popovers de Bootstrap
  $('[data-toggle="popover"]').popover();
});

function abrirModal(nombre, sinopsis, imagen) {
    document.getElementById('modalPeliculaLabel').innerText = nombre;
    document.getElementById('modalPeliculaContent').innerHTML = `
      <img src="${imagen}" class="img-fluid mb-2" alt="${nombre}" />
      <p>${sinopsis}</p>
    `;
    $('#modalPelicula').modal('show');
  }
</script>