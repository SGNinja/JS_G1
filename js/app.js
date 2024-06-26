

// import datos from './datos.js';
// Función para generar el HTML de cada producto
function generarPropiedadHTML(propiedad) {
  const img1 = './imagenes/' + propiedad.foto1
  const img2 = './imagenes/' + propiedad.foto2
  const img3 = './imagenes/' + propiedad.foto3
  const Id = 'carouselExampleIndicators'+propiedad.id
  var colorOperacion = 'bg-red'
  if (propiedad.operacion == 'Venta'){
    colorOperacion = 'bg-red'
  }
  else{
    colorOperacion = 'bg-green'
  }

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

          <div class="flex-col align-center">
            <p class="button ${colorOperacion}">${propiedad.operacion}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
// Function to fetch all properties using async/await from table propiedades
async function fetchAllProperties() {
  // The URL of the API endpoint
  const url = 'https://codo-a-codo-backend.vercel.app/api/propiedades';
  try {
    // Making a GET request using fetch and awaiting the response
    const response = await fetch(url);
    // Checking if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    // Parsing the response as JSON and awaiting the result
    const data = await response.json();
    console.log("Data: ", data)
    // Returning the data
    return data;

  } catch (error) {
    // Handling errors
    console.error('There was a problem with the fetch operation:', error);
  }
}
// Call the function to make the request and store the result in a constant
fetchAllProperties()
  .then(data => {
    const propertiesData = data;
    // Genera el HTML para todas las casas
    const htmlCasas = propertiesData.map(propiedad => generarPropiedadHTML(propiedad)).join('');
    // Agrega el HTML generado a otro sitio (en este caso, un div con el ID "propiedades")
    document.getElementById('propiedades').innerHTML = htmlCasas;
  })
  .catch(error => {
    console.error('Error:', error);
  });

// document.getElementById('filterForm').addEventListener('submit', function(e) {
//   e.preventDefault();
//   applyFilter();
// });



// function applyFilter() {
//   const tipo = document.getElementById('tipo').value;
//   const maxPrecio = document.getElementById('maxPrecio').value;
//   const minHabitaciones = document.getElementById('minHabitaciones').value;

//   let filteredData = propertiesData;
//   if (tipo) {
//       filteredData = filteredData.filter(property => property.tipo === tipo);
//   }
//   if (maxPrecio) {
//       filteredData = filteredData.filter(property => property.precio <= maxPrecio);
//   }
//   if (minHabitaciones) {
//       filteredData = filteredData.filter(property => property.habitaciones >= minHabitaciones);
//   }
//   console.log("Datos filtrados: ", filteredData)
//   const htmlCasas = filteredData.map(propiedad => generarPropiedadHTML(propiedad)).join('');
//   document.getElementById('propiedades').innerHTML = htmlCasas;
// }