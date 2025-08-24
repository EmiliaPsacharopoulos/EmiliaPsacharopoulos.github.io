function loadHTML(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const element = document.getElementById(id);
      if (!element) return;

      element.innerHTML = data;

      // Execute any <script> tags inside the loaded HTML
      const scripts = element.querySelectorAll("script");
      scripts.forEach(oldScript => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript); // execute
        oldScript.remove(); // clean up duplicate
      });
    })
    .catch(err => console.error("Error loading", url, err));
}
