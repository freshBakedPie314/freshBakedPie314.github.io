let id = 0;
var answer;
let random = () =>
{
    
    id = Math.floor(Math.random() * 650);
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +id + ".svg";
    document.getElementById("gameImage").src = imgUrl;

    let url = "https://pokeapi.co/api/v2/pokemon/" + id;
    fetch(url)
    .then(response => response.json())
    .then(data => {displayData(data)});
    

    document.getElementById("text").textContent = "";
    document.getElementById("start").innerText = "Next";
    document.getElementById("getAns").disabled = false;
    document.getElementById("check").disabled = false;
    document.getElementById("answer").disabled = false;
    document.getElementById("answer").value = "";
   
}

let displayData=(data) =>
{
    answer = capitaliseFirstLetter(data.forms[0].name);
}

let err = () =>
{
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +id + ".svg";
    document.getElementById("gameImage").src = imgUrl;
}

check = () =>
{
    var playerAnwer =  document.getElementById("answer").value;
    if(playerAnwer.toLowerCase() == answer.toLowerCase())
    {
        document.getElementById("text").textContent = "Correct!! It's " + answer;
    }else
    {
        document.getElementById("text").textContent = "Incorrect..try again or Reveal Answer";
        document.getElementById("getAns").disabled = false;
    }
}

revelio = () =>
{
    document.getElementById("text").textContent = "It's " + answer + "!!";
    document.getElementById("check").disabled = true;
    document.getElementById("answer").disabled = true;
}

capitaliseFirstLetter = (s) =>
{
    var s1 = s.replace(s.charAt(0) , s.charAt(0).toUpperCase());
    return s1;
}