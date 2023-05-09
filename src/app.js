const doc = {
    weightInput: document.querySelector('#weight'),
    heightInput: document.querySelector('#height'),
    indexInput: document.querySelector('#index'),
    calcButton: document.querySelector('#calcButton')
};

const state = {
    index: 0
};

window.addEventListener('load', () => {}) {
    init();
};

function init() {       //eseménykezelő
    doc.calcButton.addEventListener('click',  () => {
        console.log('működik')
    });
}

function startCalc() {
    let weight = doc.weightInput.value;      //változóba tároljujk
    let height = doc.heightInput.value; 
    state.index = calcBodyIndex(weight, height);
    doc.indexInput.value = state.index;

}

function calcBodyIndex(weight, height) {    //testtömegindex számítása
    return weight / Math.pow(height, 2);
}