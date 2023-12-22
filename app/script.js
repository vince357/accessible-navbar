var matches = document.querySelectorAll('.dropdown');
matches.forEach(element=>{
  element.addEventListener("focusin", (event) => {
    element.querySelector("button").setAttribute("aria-expanded", true);
  });
  element.addEventListener("focusout", (event) => {
    element.querySelector("button").setAttribute("aria-expanded", false);
  });
  element.addEventListener("mouseover", (event) => {
    element.querySelector("button").focus();
  });
  element.addEventListener("mouseleave", (event) => {
    element.querySelector("button").blur();
  });
})