
function answerBox() {
    const characterNameInput = document.getElementById('characterNameInput')
    const characterNameOutput = characterNameInput.value;
    const name = document.getElementById('characterNameSpan');
    name.textContent = characterNameOutput;

    const locationInput = document.getElementById('locationInput');
    const locationOutput = locationInput.value;
    const onePlace = document.getElementById('onePlaceSpan');
    onePlace.textContent = locationOutput;

    const object = document.getElementById('animalInput');
    const objectPlural = object.value;
    const someObject = document.getElementById('someAnimal');
    someObject.textContent = objectPlural;

    const differentPlace = document.getElementById('differentPlaceInput');
    const differentPlaceOutput = differentPlace.value;
    const thePlace = document.getElementById('thePlace');
    thePlace.textContent = differentPlaceOutput;

    const verb = document.getElementById('activityInput');
    const verbOutput = verb.value;
    const verb1 = document.getElementById("activityOutput");
    verb1.textContent = verbOutput;

    
}

const myButton = document.getElementById ('button')
myButton.addEventListener('click', answerBox)