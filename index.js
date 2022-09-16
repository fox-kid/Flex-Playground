function changeWrap(value) {
    const wrapBox = document.getElementById("flexWrap");
    const formatValue = value.includes("_") ? value.replace("_", "-") : value;

    wrapBox.style.setProperty('flex-wrap', formatValue);
}

function changeDirection(value) {
    const directionBox = document.getElementById("flexMixed");
    const formatValue = value.includes("_") ? value.replace("_", "-") : value;

    directionBox.style.setProperty('flex-direction', formatValue);
}

function changeJustify(value) {
    const justifyBox = document.getElementById("flexMixed");
    const formatValue = value.includes("_") ? value.replace("_", "-") : value;

    justifyBox.style.setProperty('justify-content', formatValue);
}


function changeAlign(value) {
    const alignBox = document.getElementById("flexMixed");
    const formatValue = value.includes("_") ? value.replace("_", "-") : value;

    alignBox.style.setProperty('align-items', formatValue);
}

function changeOrder(props) {
    const elementOne = document.getElementById("elementOne");
    const elementTwo = document.getElementById("elementTwo");
    const elementThree = document.getElementById("elementThree");
    const elementFour = document.getElementById("elementFour");
    const elementFive = document.getElementById("elementFive");

    switch(props.id) {
        case "elemOne":
            elementOne.style.setProperty('order', props.value);
            break;
        case "elemTwo":
            elementTwo.style.setProperty('order', props.value);
            break;
        case "elemThree":
            elementThree.style.setProperty('order', props.value);
        break;
        case "elemFour":
            elementFour.style.setProperty('order', props.value);
        break;
        case "elemFive":
            elementFive.style.setProperty('order', props.value);
        break;
        default: 
            console.log('break');
    }
}