const button = document.getElementById("button");
const body = document.getElementById("body");
let mouseChecker2 = true;
// console.log(card)
card.addEventListener("mousemove", (e) => {
  if (!mouseChecker2) return;
  const span = document.createElement("span");
  let x = -75 + e.offsetX + "px";
  let y = -75 + e.offsetY + "px";

  span.style.left = x;
  span.style.top = y;


  card.appendChild(span);
  clearCardSpan(span);
});

function clearCardSpan(element) {
  setTimeout(() => {
    element.remove();
  }, 1200);
}

// button mouse enter and out ================
button.addEventListener("mouseenter", () => {
  mouseChecker2 = false;
});
button.addEventListener("mouseleave", () => {
  mouseChecker2 = true;
});
