const text = document.querySelector(".text p");

const length = text.innerText.length;

text.innerHTML = text.innerText
  .split("")
  .map(
    (char, index) =>
      `<span style="transform: rotate(${
        (index * 360) / length
      }deg)">${char}</span>`
  )
  .join("");
