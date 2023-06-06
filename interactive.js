let star = 0
const idOne = document.getElementById("one")
const idTwo = document.getElementById("two")
const idThree = document.getElementById("three")
const idFour = document.getElementById("four")
const idFive = document.getElementById("five")

const chooseStar = (number) => {
    switch(document.getElementById(number)){
        case number == "one":
        idOne.setAttribute('id', 'chosen-star')
        star = 1
        break;
        case number === "two":
            idTwo.setAttribute('id', 'chosen-star')
            star = 2
            break;
        case number === "three":
            idThree.setAttribute('id', 'chosen-star')
            star = 3
            break;
        case number === "four":
            idFour.setAttribute('id', 'chosen-star')
            star = 4
            break;
        case number === "five":
            idFive.setAttribute('id', 'chosen-star')
            star =  5 
            break;          
    }
}



const onClick = () => {

    document.getElementById("announcement").textContent = `You selected ${star} out of 5`
}




