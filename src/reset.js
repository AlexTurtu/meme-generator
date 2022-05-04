export default function resetTxt() {
  document.querySelector(".input-left").value = "";
  document.querySelector(".input-right").value = "";
  document.querySelector(".lower-text-content").classList.add("isHidden");
  document.querySelector(".upper-text-content").classList.add("isHidden");
}
