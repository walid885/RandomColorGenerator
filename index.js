const containerEL = document.querySelector(".container");
for ( let index = 0 ; index < 30; index++){
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container"); 
    containerEL.appendChild(colorContainerEl);
}

function RandomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength =6;
    let colorCode = "";
    for ( let index =0; index < 6; index++){
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum,randomNum+1);
    }
    return colorCode
}

const colorsContainersEl = document.querySelectorAll(".color-container")
function generateColors(){
    colorsContainersEl.forEach((colorContainerEl)=>{
        const newColorCode = RandomColor()
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode
;
    })

}
generateColors();