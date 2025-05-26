
function gcseSearch(form) {
const input = form.querySelector('input[name="search"]');
const query = input.value.trim();

if (query) {
  // Aquí defines qué quieres hacer con la búsqueda.
  // Por ejemplo, redirigir a Google Custom Search:
  const url = `https://https://www.google.com//search?q=${encodeURIComponent(query)}`;
  window.open(url, "_blank");

  // O podrías mostrar los resultados en una <div> con JavaScript.
} else {
  alert("Por favor ingresa un término de búsqueda.");
}





}