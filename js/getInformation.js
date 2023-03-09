let divInformationContainer = document.getElementById('information-container');
let buttonRandom = document.getElementById('get-information');
let image = document.getElementById('image');

async function getImage() {
    let response = await fetch('https://api.thedogapi.com/v1/images/search');
    let data = await response.json();

    return data[0];
}

function getBreed() {
    $.ajax({
        url: "https://api.thedogapi.com/v1/breeds?limit=10&page=0",
        method: "GET",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "live_jO3TYHsD3aur2dghaat9o9GXXbu3Hr2oj5G6kQ0GBt0KkF0nYTYFtUsg461HerxC"
        },
        beforeSend: function() {
            console.log("Enviando...");
        }
    })
    .done(function(response) {
        let randomNumber = Math.floor(Math.random() * 10);
        console.log(response[randomNumber]);
    })
    .fail(function(err) {
        let errorMessage = "Um problema ocorreu na geração da imagem. Erro: " + err.status + ".";
        divInformationContainer.innerHTML = "<p>" + errorMessage + "</p";
    })
};

async function showInformation() {
    let information;

    try {
        information = await getImage();
    } catch (err) {
        let errorMessage = "Um problema ocorreu na geração da imagem. Erro: " + err.status + ".";
        divInformationContainer.innerHTML = "<p>" + errorMessage + "</p";
    };

    getBreed();
    image.setAttribute("src", information.url);
    divInformationContainer.appendChild(image);
}

buttonRandom.addEventListener('click',function() {
    divInformationContainer.innerHTML = '';
    showInformation();
});