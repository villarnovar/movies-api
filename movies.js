let inputField = document.getElementById("text2");
let button = document.getElementById("main-button");
let info = document.getElementById("returnMovie");
htmlContent="";

function validateResponse(response){
    if(!response.ok){
        throw Error(response.statusText);
     
    }
    return response;
}
button.addEventListener('click', function(e){
    e.preventDefault();
    console.log(inputField.value);
    fetch("https://www.omdbapi.com/?t="+inputField.value+"&apikey=3ed8a8b5")
    .then(validateResponse)
.then(function(response){
    return response.json();

}).then(processData)
});

function processData(data){
    console.log(data);
    htmlContent = `
    <div><img src="${data.Poster}"  id="image" alt="${data.Title}"></div>
    <div><h2>${data.Title}</h2></div>
    <div><h3>ACTORS: ${data.Actors}</h3></div>
    <div><h3>DIRECTOR: ${data.Director}</h3></div>
    <div><h3>WRITER: ${data.Writer}</h3></div>
    <div><h3>GENRE: ${data.Genre}</h3></div>
    <div><h3>PLOT: ${data.Plot}</h3></div>
    <div><h3>RELEASED DATE: ${data.Released}</h3></div>
    <div><h3>RUNTIME: ${data.Runtime}</h3></div>
    <div><h3>TYPE: ${data.Type}</h3></div>
    <div><h3>BOX OFFICE: ${data.BoxOffice}</h3></div>
    <div><h3>RATINGS: ${data.Ratings[0].Value}</h3></div>`;
    info.innerHTML = htmlContent;
}



