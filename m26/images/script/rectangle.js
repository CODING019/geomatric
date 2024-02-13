// rectangle width input 
function rectangle(){
    const rectangleInput  = document.getElementById('rectangleWidth');
    const rectangleValue = rectangleInput.value;
    const rectangleFinalInput = parseFloat(rectangleValue)
    // console.log(rectangleFinalInput)

    // rectangle lenght 
    const rectangleLenghtInput = document.getElementById('rectangleLenght')
    const rectangleLenghtValue  = rectangleLenghtInput.value;
    const rectangleLenghtFinalInput = parseFloat(rectangleLenghtValue)
    // console.log(rectangleLenghtFinalInput)

    // total value
    const rectangleTotalValue = rectangleFinalInput*rectangleLenghtFinalInput
    console.log(rectangleTotalValue)

    // rectangle Total Value Display 
    const rectangleDisplay = document.getElementById('rectangleTotalValueDisplay')
    rectangleDisplay.innerText = rectangleTotalValue;
}




// function rectangleContainer() {

//     const base = allInput('rectangleWidth')
// }

// function allInput(inputFiled) {
//     const inputFiledId = document.getElementById('inputFiled')
//     console.log(inputFiled)
// }