//  javascript ----------------------
const card = document.getElementById("card");
const mainContainer = document.getElementById("mainContainer");
const containerSpan = document.getElementById("containerSpan");
let mouseChecker = false;

mainContainer.addEventListener("mousemove", (e) => {
  if (mouseChecker) {
    return;
  }
  // console.log("message");
  containerSpan.style.display = "block";

  let x = -5 + e.offsetX + "px";
  let y = -5 + e.offsetY + "px";

  containerSpan.style.left = x;
  containerSpan.style.top = y;
});

mainContainer.addEventListener("mouseleave", (e) => {
  containerSpan.style.display = "none";
  console.log("leave");
});

// card mouse enter and out ================
card.addEventListener("mouseenter", () => {
  mouseChecker = true;
  containerSpan.style.display = "none";
});
card.addEventListener("mouseleave", () => {
  mouseChecker = false;
  containerSpan.style.display = "block";
});
