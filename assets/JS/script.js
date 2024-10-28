//  javascript ----------------------
const container = document.getElementById("container");
const mainContainer = document.getElementById("mainContainer");
const refarenceElement = container.firstChild
console.log(refarenceElement)
mainContainer.addEventListener("mousemove", (e) => {
  const span = document.createElement("span");
  let x = -75 + e.offsetX + "px";
  let y = -75 + e.offsetY + "px";

  span.style.left = x;
  span.style.top = y;
  // span.style.left = `${x}px`;
  // span.style.top = `${y}px`  ;

  container.appendChild(span);
  clearSpan(span);
});

function clearSpan(element) {
  setTimeout(() => {
    element.remove();
  }, 1200);
}
