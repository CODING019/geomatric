// triangle base ver korar nium
function triangle(){
    const triangleBaseInput = document.getElementById('triangleBase')
    const triangleValue = triangleBaseInput.value;
    const triangleFinalBaseInput =parseFloat(triangleValue)
    // triangle hight ber korar nium
    // console.log(triangleFinalBaseInput)
    const triangleHightInput = document.getElementById('triangleHight');
    const triangleHightValue = triangleHightInput.value;
    const triangleHightFinalInput = parseFloat(triangleHightValue)
    // console.log(triangleHightFinalInput);

    // area total value ver korar nium
    const totalValue = 0.5*triangleFinalBaseInput*triangleHightFinalInput;
    console.log(totalValue);

    // total value display
    const totalDisplay = document.getElementById ('totalValueDisplay')
    totalDisplay.innerText = totalValue;
}