const colorPicker = document.getElementById('color')
const getColorBtn = document.getElementById('get-color-btn')




getColorBtn.addEventListener('click', getColor)

function getColor(event) {
    const mode = document.getElementById('mode-select')
    const selectedMode = mode.value
    let colorSwatch = colorPicker.value
    console.log(colorSwatch)
    let noHex = colorSwatch.substring(1)
    fetch(`https://www.thecolorapi.com/id?hex=${noHex}&mode=${selectedMode}`)
        .then(res => res.json())
        .then(json => console.log(json))
}
// colorPicker.addEventListener('change', function (event) {
//     let colorSwatch = event.target.value
//     let noHex = colorSwatch.substring(1)
//     console.log(noHex)
//     fetch(`https://www.thecolorapi.com/id?hex=${noHex}`)
//         .then(res => res.json())
//         .then(json => console.log(json))

// })






// let firstCol = document.getElementById('first-column')
// let secondCol = document.getElementById('second-column')
// let thirdCol = document.getElementById('third-column')
// let fourthCol = document.getElementById('fourth-column')
// let fifthCol = document.getElementById('fifth-column')
    // firstCol.style.backgroundColor = `${colorSwatch}`
    // secondCol.style.backgroundColor = `${colorSwatch}`
    // thirdCol.style.backgroundColor = `${colorSwatch}`
    // fourthCol.style.backgroundColor = `${colorSwatch}`
    // fifthCol.style.backgroundColor = `${colorSwatch}`