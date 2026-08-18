const menu = document.getElementById("myclinxMenu");
const nav = document.getElementById("myclinxNavigation");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".myclinx-navigation a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".myclinx-navigation a").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
    nav.classList.remove("open");
  });
});

document.addEventListener("click", e => {
  if (!nav.contains(e.target) && !menu.contains(e.target)) {
    nav.classList.remove("open");
  }
});


/*footer year code start*/

document.getElementById("myclinxYear").textContent = new Date().getFullYear();

/*footer year code end*/