
function handleSubmit(event) {
  event.preventDefault(); // Evitar el comportamiento por defecto del formulario
  const elements = event.target.elements;
  console.log("form was submitted!");
//busco el elemento div donde voy a generar las imágenes
const pictures = document.getElementById('pictures');
// creo nuevo div donde insertar las imágenes
const picture = document.createElement('div');
//doy la clase picture al div
picture.classList.add('picture')
//guardar el valor del imput del formulario
const link= elements.link.value;
//adicionar al div de pictures
pictures.appendChild(picture);
picture.innerHTML = `<img src="${link}">`
}
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);