async function loadHTML(id, file) {
  const el = document.getElementById(id);
  if (el) {
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(res.statusText);
      el.innerHTML = await res.text();
    } catch (err) {
      console.error("Error loading", file, err);
    }
  }
}
