const matches = document.querySelectorAll('.dropdown');
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

// Responsiveness. On label (burger menu) focus, check the according checkbox (if unchecked)
const menuTogglerLabel = document.querySelector('#menu-toggler-label');
const menuTogglerCheckbox = document.querySelector('#menu-toggler-checkbox');
menuTogglerLabel.addEventListener("focus", (event) => {
  if(menuTogglerCheckbox.checked === false){
    menuTogglerCheckbox.checked = true;
  }else{
    menuTogglerCheckbox.checked = false;
  }
});
// Same on click
menuTogglerLabel.addEventListener("click", (event) => {
  if(menuTogglerCheckbox.checked === false){
    menuTogglerCheckbox.checked = true;
  }else{
    menuTogglerCheckbox.checked = false;
  }
});