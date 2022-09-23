const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    const randomnum = getRandomnum()
    document.body.style.backgroundColor = colors[randomnum]
    color.textContent = colors[randomnum]
}
)

function getRandomnum(){
    return Math.floor(Math.random() * colors.length)
}