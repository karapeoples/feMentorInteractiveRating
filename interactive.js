let star
const idOne = document.getElementById("one")
const idTwo = document.getElementById("two")
const idThree = document.getElementById("three")
const idFour = document.getElementById("four")
const idFive = document.getElementById("five")

const chooseStarOne = () => {
        star = 1
        idOne.setAttribute('id', "chosen-star") 
        idTwo.setAttribute("id", 'two')
        idThree.setAttribute('id', 'three')
        idFour.setAttribute("id", "four")
        idFive.setAttribute("id", "five")
    
}
const chooseStarTwo = () => {
    star = 2
    idTwo.setAttribute('id', "chosen-star")
    idOne.setAttribute("id", 'one')
        idThree.setAttribute('id', 'three')
        idFour.setAttribute("id", "four")
        idFive.setAttribute("id", "five") 
}
const chooseStarThree = () => {
    star = 3
    idThree.setAttribute('id', "chosen-star")
    idTwo.setAttribute("id", 'two')
        idOne.setAttribute('id', 'one')
        idFour.setAttribute("id", "four")
        idFive.setAttribute("id", "five") 

}
const chooseStarFour = () => {
    star = 4
    idFour.setAttribute('id', "chosen-star")
    idTwo.setAttribute("id", 'two')
    idThree.setAttribute("id", "three")
        idOne.setAttribute('id', 'one')
        idFive.setAttribute("id", "five") 

}

const chooseStarFive = () => {
    star = 5
    idFive.setAttribute('id', "chosen-star")
    idTwo.setAttribute("id", 'two')
    idThree.setAttribute("id", "three")
    idFour.setAttribute("id", "four") 
    idOne.setAttribute('id', 'one')

}
const onClick = () => {
document.getElementById('rating-state-main').style.display = "none"
document.getElementById("thank-you-state-main").style.display = "block"
document.getElementById("announcement").textContent = `You selected ${star} out of 5`
}




