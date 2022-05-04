export function changeValueTop() {
  let valueToTake = document.querySelector(".input-left");
  let valueToSet = valueToTake.value;

  if (valueToSet.length > 0) {
    document.querySelector(".upper-text-content").classList.remove("isHidden");
  } else {
    document.querySelector(".upper-text-content").classList.add("isHidden");
  }

  document.querySelector(".upper-text-content").innerHTML = valueToSet;
}
export function changeValueBot() {
  let valueToTake = document.querySelector(".input-right");
  let valueToSet = valueToTake.value;

  if (valueToSet.length > 0) {
    document.querySelector(".lower-text-content").classList.remove("isHidden");
  } else {
    document.querySelector(".lower-text-content").classList.add("isHidden");
  }

  document.querySelector(".lower-text-content").innerHTML = valueToSet;
}
