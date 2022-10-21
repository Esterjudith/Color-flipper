const colors = ["green", "red", "rgba(133, 122,200)", "#f15025"]

const bnt = document.getElementById('btn')
const color = document.querySelector('.color')

bnt.addEventListener('click', ()=>{
    //get random number between index 0-3

    const randomNumber = getRandomNumber()
    console.log(getRandomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
    
    function getRandomNumber(){
        return Math.floor(Math.random() * colors.length)
    }
})



// const btn = document.getElementById('btn')
// const color = document.querySelector(".color")

// btn.addEventListener('click', function () {
    // get random number between 0-3 
//     const randomNumber = getRandomNumber()
//     console.log(randomNumber)
//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber]
// })

// function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length) // Math.random returns numbers between 0-1, to get anything higher need to multiply by the length of the colors avariable (4) but that will still give you decimals that don't make it all the way to 4 so we need to use the Math.floor() method to make them a round number.
// }