const textInput = document.querySelector('.textInput');
const outputParagraph = document.querySelector('.outputParagraph');

textInput.addEventListener('keyup', (ev) => {
    //debugger;
    const letra = ev.key;
    const actual = ev.currentTarget;
    outputParagraph.innerHTML = outputParagraph.innerHTML + letra;
    outputParagraph.innerHTML = actual.value;
});
