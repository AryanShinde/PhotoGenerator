const apiKey="563492ad6f91700001000001b7b3fa9fca7d4fa3b2172a3d2c39994c";
const apiUrl="https://api.pexels.com/v1/curated?per_page=15&page=1";

const galleryMain=document.querySelector(".images");
const submitBtn=document.querySelector(".submit-btn");

async function getImages(){
    const photo=await fetch(apiUrl,{
        method:'GET',
        headers:{
            Accept: "application/json",
            Authorization: apiKey
        }
    });
    const response= await photo.json();
    response.photos.forEach((photo)=>{
        const src=photo.src.large;
        const perPhoto=document.createElement("div");
        perPhoto.classList.add("per-photo");
        perPhoto.innerHTML=` <p>${photo.photographer}</p> <img src=${src}></img>`;
        galleryMain.appendChild(perPhoto);

    })


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