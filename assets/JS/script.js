//  javascript ----------------------
const card = document.getElementById("card");
const container = document.getElementById("container");
const mainContainer = document.getElementById("mainContainer");
let mouseChecker = true;

mainContainer.addEventListener("mousemove", (e) => {
  if (mouseChecker) {
    return;
  }
  console.log("message");

  // console.log(mouseChecker);
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

// console.log(cards);

// card mouse enter and out ================
card.addEventListener("mouseenter", () => {
  mouseChecker = true;
});
card.addEventListener("mouseleave", () => {
  mouseChecker = false;
});
