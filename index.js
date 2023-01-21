const colorPicker = document.getElementById('color')
const getColorBtn = document.getElementById('get-color-btn')


getColorBtn.addEventListener('click', getColor)
window.onload = function () {
    colorPicker.value = randomHexValue()
    getColor()
}
function getColor() {
    const mode = document.getElementById('mode-select')
    const selectedMode = mode.value
    let colorSwatch = colorPicker.value
    let noHex = colorSwatch.substring(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${noHex}&mode=${selectedMode}&count=5`)
        .then(res => res.json())
        .then(json => {
            console.log(json.colors)
            let colorColumns = document.querySelectorAll('.color-column')
            let hexCodes = document.querySelectorAll('.hex-code')
            json.colors.forEach((color, index) => {
                colorColumns[index].style.backgroundColor = `${color.hex.value}`
                colorColumns[index].innerHTML = `${color.name.value}`
                hexCodes[index].innerHTML = `${color.hex.value}`
            })
        })
}

const randomHexValue = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

console.log(random_hex_color_code())