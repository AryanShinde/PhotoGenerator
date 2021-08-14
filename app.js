const apiKey = "563492ad6f91700001000001b7b3fa9fca7d4fa3b2172a3d2c39994c";
const apiUrlSearch = "https://api.pexels.com/v1/search?query=nature+query&per_page=15&page=1"
const apiUrl = "https://api.pexels.com/v1/curated?per_page=15&page=1";

const galleryMain = document.querySelector(".images");
const submitBtn = document.querySelector(".submit-btn");
const Form = document.querySelector("form");
const inputBox = document.querySelector("input");
let inputvalue;


Form.addEventListener("submit", (e) => {
    e.preventDefault();
    inputvalue = inputBox.value;
    SearchPhotos(inputvalue);
})

async function fetchApi(api) {
    const photo = await fetch(api, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            Authorization: apiKey
        }
    });
    const json = photo.json();
    return json;
}

function generatePhotos(response) {
    response.photos.forEach((photo) => {
        const src = photo.src.large;
        const photDiv=document.createElement("div");
        photDiv.innerHTML = `<div class="per-photo" ><div class="gallery-info"> <p>${photo.photographer}</p><a href=${photo.src.original} Download>Download</a></div>
        <img src=${src}></img></div>`;
        galleryMain.appendChild(photDiv);
    });
}

async function getImages() {
    const response = await fetchApi(apiUrl);
    generatePhotos(response);


}

async function SearchPhotos(query) {
    clear();
    const photo = await fetchApi(`https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=1`);
    generatePhotos(photo);
}

function clear() {
    galleryMain.innerHTML = "";
    inputBox.value = "";
}

// function getImages2(){
//     console.log("f")
//     fetch(apiUrl,{
//         method:"GET",
//         headers:{
//             Accept: "application/json",
//             Authorization: apiKey
//         }
//     }).then(response=> response.json())
//     .then(json=>console.log(json));
// }
getImages();