const btn = document.getElementById("boton");
const contenedor = document.getElementById ("contenedor")

btn.addEventListener ("click", () => {
  
  fetch ('https://v2.jokeapi.dev/joke/Any?lang=es&type=single')
      .then(response => response.json())
      .then(data => contenedor.innerHTML = `<p>${data.joke}</p>`)
      .catch(err => console.log("Solución fallida", err))
  
})
  