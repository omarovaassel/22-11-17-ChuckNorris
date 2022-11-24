const jokeRandomURL = `https://api.chucknorris.io/jokes/random`;
const jokeCategoryURL = `https://api.chucknorris.io/jokes/categories`;
const jokeCategoryRandomURL = `https://api.chucknorris.io/jokes/random?category=`;
const jokeCategory = document.querySelector("#joke_category");
const jokeRandom = document.querySelector("#joke_random");
let joke = document.querySelector("#joke");

function loadJokeRandom(data){
    joke.innerHTML += `
    <p>${data.value}</p>`;
};

jokeRandom.addEventListener("click", async() => {
    joke.innerHTML = "";

    const response = await fetch(jokeRandomURL);
    const data = await response.json();
    loadJokeRandom(data);
});

;(async function(){
    let response = await fetch(jokeCategoryURL);
    let categories = await response.json();

    for(let i = 0; i < categories.length; i++){
        jokeCategory.innerHTML += `<option value="${categories[i]}">${categories[i]}</option>`
    }
})();

jokeCategory.addEventListener("change", async() => {
    joke.innerHTML = "";

    let jokeCategoryValue = jokeCategory.value;

    const response = await fetch(jokeCategoryRandomURL+jokeCategoryValue);
    const data = await response.json();
    console.log(data.value);
    loadJokeRandom(data);
});




// for(let rover of roversData){
//     roversSelect.innerHTML += `
//         <option value="${rover.roverName}">${rover.roverName}</option>
//     `;
// }

// мое решение
// roversSelect.addEventListener("change", () => {
//     cameraSelect.innerHTML = "";
//
//     for(let rover of roversData){
//         if(roversSelect.value == rover.roverName){
//             for(let i = 0; i < rover.cameras.length; i++){
//                     cameraSelect.innerHTML +=
//                         `
//                            <option value="${rover.cameras[i]}">${rover.cameras[i]}</option>
//                         `;
//             }
//         }
//     }
// });


// // вариант Алиби
// const drawCameras = (roverName) => {
//     for(let rover of roversData){
//         if(roverName.toLowerCase() == rover.roverName.toLowerCase()){
//             for(let camera of rover.cameras){
//                 cameraSelect.innerHTML += `<option value="${camera}">${camera}</option>`
//             }
//         }
//     }
// };
//
// drawCameras(roversData[0].roverName);
//
// roversSelect.addEventListener("change", () => {
//     cameraSelect.innerHTML = "";
//     drawCameras(roversSelect.value);
// });
//
// button.addEventListener("click", () => {
//     photosDiv.innerHTML = "";
//
//     const API_KEY = 'GRdTNQhddTGlqYbNNGMHjeshR4GWd4FmHeMFDGKS';
//     const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roversSelect.value}/photos?sol=${solInput.value}&camera=${cameraSelect.value}&api_key=${API_KEY}`; // обратные кавычки, чтобы можно было вставлять нужные нам переменные в ссылку кода
//
//     // мое решение
//     fetch(URL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             const photosArray = data.photos;
//
//             for(const photo of photosArray){
//                 photosDiv.innerHTML += `<img width="150px" height="150px" src="${photo.img_src}">`
//             }
//         });
//
//     // решение Алиби - наверху после click пишем async, а ниже:
//     // const response = await fetch(URL);
//     // const data = await response.json();
//     // console.log(data);
// });