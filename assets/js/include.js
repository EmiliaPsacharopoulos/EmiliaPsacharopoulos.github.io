async function loadHTML(id, file) {
  let element = document.getElementById(id);
  if (element) {
    let response = await fetch(file);
    if (response.ok) {
      element.innerHTML = await response.text();
    } else {
      element.innerHTML = "Error loading " + file;
    }
  }
}
