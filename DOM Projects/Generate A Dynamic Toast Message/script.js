const btn = document.getElementById("btn");
const showHex = document.getElementById('show-hex')

// copy button
const copyBtn = document.getElementById('copy-btn')

// gloabl declear
let div = null;


btn.addEventListener("click", () => {

// reference the rge variable
const bgColor =generateColor();
document.body.style.backgroundColor=bgColor;
//   false disable 
     showHex.disabled = false
  showHex.value = bgColor;

});

// copy event lisener
copyBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(showHex.value)
    if(div != null){
      div.remove()
      div = null;
    }
    generateToastMesg(`${showHex.value}`)
})





function generateToastMesg(mesg){
     div = document.createElement('div');
    div.innerText=mesg
    div.classList.add('div-style')
    div.classList.add('slide-in')
    div.classList.add('close-style')

    // out the animation in class and add out class
      div.addEventListener('click', function(){
        div.classList.remove('slide-in')
        div.classList.add('slide-out')

        // when we click div then it out so when we add animationend event

        div.addEventListener('animationend',()=>{
          div.remove()
          div = null;
        })

      })

    document.body.appendChild(div)

    


}




function generateColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
     return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`

}

