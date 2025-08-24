function loadHTML(id, url) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.text();
    })
    .then(html => {
      const el = document.getElementById(id);
      if (!el) return;

      el.innerHTML = html;

      // Re-execute <script> tags
      el.querySelectorAll("script").forEach(oldScript => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript);
        oldScript.remove();
      });
    })
    .catch(err => console.error("❌ loadHTML error:", url, err));
}

console.log("✅ loadhtml.js loaded");
