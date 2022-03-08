let comment = document.querySelector(".comment-sidebar");

document.querySelector("#comment").onclick = () => {
  comment.classList.remove("d-none");
  comment.classList.add("d-flex");
};
document.querySelector("#close").onclick = () => {
  comment.classList.add("d-none");
};
window.onscroll = function () {
  myFunction();
};

window.onscroll = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  let sidebar = document.querySelector(".left-sidebar");
  if (scrolled) {
    sidebar.classList.remove("d-none");
  }
};
