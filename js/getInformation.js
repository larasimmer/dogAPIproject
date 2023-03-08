let divInformationContainer = document.getElementById("information-container");
let buttonRandom = document.getElementById('get-information');
let image = document.getElementById('image');

async function getInformation() {
    let response = await fetch('https://api.thedogapi.com/v1/images/search');
    let data = await response.json();

    return data[0];
}

async function showInformation() {
    let information = await getInformation();

    image.setAttribute("src", information.url);
    divInformationContainer.appendChild(image);
}

buttonRandom.addEventListener('click',function() {
    divInformationContainer.innerHTML = '';
    showInformation();
});

