function loadMarkdownFromHash() {
  const slug = location.hash.slice(1) || "home"; // fallback to home
  const file = `md/${slug}.md`;

  fetch(file)
    .then((res) => {
      if (!res.ok) throw new Error("Not found");
      return res.text();
    })
    .then((md) => {
      document.getElementById("markdown-box").innerHTML = marked.parse(md);
    })
    .catch(() => {
      window.location.href = "https://forrai-zoltan.github.io/404";
    });
}

window.addEventListener("hashchange", loadMarkdownFromHash);
window.addEventListener("DOMContentLoaded", loadMarkdownFromHash);
