let divInformationContainer = document.getElementById('information-container');
let buttonRandom = document.getElementById('get-information');
let image = document.getElementById('image');
let breedSpan = document.getElementById('breed');
let temperamentSpan = document.getElementById('temperament');

async function getInformation() {
    let response = await fetch('https://api.thedogapi.com/v1/breeds?limit=10&page=0');
    let data = await response.json();
    let randomNumber = Math.floor(Math.random() * 10);

    return data[randomNumber];
}

async function showInformation() {
    let information;

    try {
        information = await getInformation();
    } catch (err) {
        let errorMessage = "Um problema ocorreu na geração das informações. Erro: " + err.status + ".";
        divInformationContainer.innerHTML = "<p>" + errorMessage + "</p";
    };

    image.setAttribute("src", information.image.url);
    divInformationContainer.appendChild(image);
    breedSpan.innerText = information.name;
    temperamentSpan.innerText = information.temperament;
}

buttonRandom.addEventListener('click',function() {
    image.innerHTML = '';
    showInformation();
});