

import datos from './datos.js';
// Función para generar el HTML de cada producto
function generarPropiedadHTML(propiedad) {
  const img1 = './imagenes/casa' + propiedad.id + '/' + propiedad.foto1
  const img2 = './imagenes/casa' + propiedad.id + '/' + propiedad.foto2
  const img3 = './imagenes/casa' + propiedad.id + '/' + propiedad.foto3
  const Id = 'carouselExampleIndicators'+propiedad.id

  return `
    <div class="col pb-5">
      <div class="card">

        <div id="${Id}" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#${Id}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#${Id}" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#${Id}" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="${img1}" class="d-block w-100" alt="${img1}">
            </div>
            <div class="carousel-item">
              <img src="${img2}" class="d-block w-100" alt="${img2}">
            </div>
            <div class="carousel-item">
              <img src="${img3}" class="d-block w-100" alt="${img3}">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#${Id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#${Id}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      <div class="card-body">
          <h5 class="card-title">${propiedad.titulo}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <div class="flex cardIcons">
            <div class="flex-col align-center">
              <img class="icon" src="./imagenes/icons/sleeping.png"/>
              <p>${propiedad.habitaciones}</p>
            </div>
            <div class="flex-col align-center">
              <img class="icon" src="./imagenes/icons/measurement.png"/>
              <p>${propiedad.metros}</p>
            </div>
            <div class="flex-col align-center">
              <img class="icon" src="./imagenes/icons/dollar.png"/>
              <p>${propiedad.precio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  `;
}



// Genera el HTML para todas las casas
const htmlCasas = datos.map(propiedad => generarPropiedadHTML(propiedad)).join('');

// Agrega el HTML generado a otro sitio (en este caso, un div con el ID "casas")
document.getElementById('propiedades').innerHTML = htmlCasas;