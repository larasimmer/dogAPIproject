let divInformationContainer = document.getElementById("information-container");

async function getInformation() {
    let response = await fetch('https://api.thedogapi.com/v1/images/search');
    let data = await response.json();

    return data[0];
}

async function showInformation() {
    let information = await getInformation();
    let image = document.createElement("img");

    image.setAttribute("src", information['url']);
    divInformationContainer.appendChild(image);
}

showInformation();

