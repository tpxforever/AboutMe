// Fade In Hello Text
window.onload = function(){
    document.getElementById("Hello").style.opacity = 1;
    document.body.classList.add("remove-scrolling")
    document.getElementById("down-arrow").style.opacity = 1;
}
let timeout = setTimeout(() => {
    document.querySelector('Name').scrollIntoView();
  }, 5000);

// When website is reloaded, scroll set to top

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

document.getElementById("down-arrow").addEventListener("click", function() {
    document.body.classList.remove("remove-scrolling")
    document.getElementsByClassName("Name")[0].scrollIntoView({
        behavior: "smooth"
    });
});