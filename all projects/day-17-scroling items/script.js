const tabBox = document.querySelector(".tab-box"),
  allTabs = document.querySelectorAll(".tab"),
  arrowicon = document.querySelectorAll(".icon i");
let isdragging = false;
const handleIcons = () => {
  let scrollVal = Math.round(tabBox.scrollLeft);
  let maxScrollablewidth = tabBox.scrollWidth - tabBox.clientWidth;
  arrowicon[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
  arrowicon[1].parentElement.style.display =
    maxScrollablewidth > scrollVal > 0 ? "flex" : "none";
};
arrowicon.forEach((icon) => {
  icon.addEventListener("click", () => {
    tabBox.scrollLeft += icon.id === "left" ? -350 : 350;
    setTimeout(() => handleIcons(), 50);
  });
});
allTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.querySelector(".active").classList.remove("active");
    classList.add("active");
  });
});
const dargging = (e) => {
  if (!isdragging) return;
  tabBox.classList.add("dragging");
  tabBox.scrollLeft -= e.movementX;
};
const dargstop = () => {
  isdragging = false;
  tabBox.classList.remove("dragging");
};
tabBox.addEventListener("mousedown", () => (isdragging = true));
tabBox.addEventListener("mousemove", dargging);
document.addEventListener("mouseup", dargstop);
