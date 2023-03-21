const btn = document.getElementById("btn");
const showHex = document.getElementById('show-hex')

// copy button
const copyBtn = document.getElementById('copy-btn')

btn.addEventListener("click", () => {

// reference the rge variable
const bgColor =generateColor();
document.body.style.backgroundColor=bgColor;
//   false disable 
     showHex.disabled = false
  showHex.value = bgColor;

});

copyBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(showHex.value)
})







function generateColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
     return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`

}

