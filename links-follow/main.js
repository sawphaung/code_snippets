const triggers = document.querySelectorAll("a");
const higlight = document.createElement("span");
higlight.classList.add("highlight");
document.body.append(higlight);

function highlightLink() {
  const linkCoordinate = this.getBoundingClientRect();

  const coords = {
    width: linkCoordinate.width,
    height: linkCoordinate.height,
    top: linkCoordinate.top + window.scrollY,
    left: linkCoordinate.left + window.scrollX,
  };

  higlight.style.width = `${coords.width}px`;
  higlight.style.height = `${coords.height}px`;
  higlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach((a) => a.addEventListener("mouseover", highlightLink));
