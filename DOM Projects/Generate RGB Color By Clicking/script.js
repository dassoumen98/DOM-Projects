const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
// reference the rge variable
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const bgColor = document.body.style;
  bgColor.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

