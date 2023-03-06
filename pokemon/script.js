let getUrl = function ()
{
    let pokemon = document.getElementById("answer").value;
    let url = "https://pokeapi.co/api/v2/pokemon/"
    + pokemon;

let response = fetch(url)
.then( response => response.json())
.then(data => {displayData(data)});


let displayData=(data) =>
{
    // console.log(data[0].name.common);
    let id = data.id;
    let imgUrl = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/" + id + ".svg";
    console.log(imgUrl);
    document.getElementById("image").src = imgUrl;
}
}

