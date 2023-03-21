const btn = document.getElementById("btn");
const showHex = document.getElementById('show-hex')

btn.addEventListener("click", () => {

// reference the rge variable
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  let colorValue = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`

  const bgColor = document.body.style;
  bgColor.backgroundColor = colorValue;

//   false disable 
     showHex.disabled = false
  showHex.value =colorValue
});

