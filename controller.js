//Funksjon som legger til favoritt serie
function addSerie(index) {
    model.app.antallFavoritter++;
    model.app.favOs.push(model.series[index].title);
    series();
}
//Funksjon som legger til favoritt film
function addFavoritt(index) {
    model.app.antallFavoritter++;
    model.app.favOs.push(model.movies[index].title);
    movie();
}
//Funksjon som legger til favoritt random
function addTilfeldig(index) {
    model.app.antallFavoritter++;
    model.app.favOs.push(model.movies[index].title);
    random();
}
//Funksjon som skjuler film
function hideMovie(index) {
    model.app.antallHidet++;
    model.app.hide.push(model.movies[index].title);
    movie();
}
//Funksjon som skjuler serie
function hideSerie(index) {
    model.app.antallHidet++;
    model.app.hide.push(model.series[index].title);
    series();
}
//Funksjon som skjuler random
function hideRandom(index) {
    model.app.antallHidet++;
    model.app.hide.push(model.movies[index].title);
    random();
}
//Funksjon som fjerner favoritter
function slett(index) {
    model.app.favOs.splice(index, 1);
    model.app.antallFavoritter--;
    favs();

}
//Funksjon som gjennoppretter skjult innhold
function gjennopprett(index) {
    model.app.hide.splice(index, 1);
    model.app.antallHidet--;
    skjult();

}
// Div funksjoner
function loggpå() {
    if (model.inputs.startpage.login == model.users[0].name && model.inputs.startpage.pwd == model.users[0].pwd) {
        changePage("random")

    } else {
        alert("Feil Passord eller Brukernavn")

    }
}


function spin() {
    let random = Math.floor(Math.random() * model.movies.length);
    for (let i = 0; i < model.movies.length; i++) {
        document.getElementById("random").innerHTML = `
        <center>
        <img class= "bilde2" src="${model.movies[random].picture}"> 
        <h3> ${model.movies[random].title}</h3>
        <Button onclick="openInNewTab('${model.movies[random].Netflix}');"> Se den på Netflix</Button>
        <br>
        <img src="h.jpg" class="favoritt-r" onclick="addTilfeldig(${random})">
        <img src="x.png" class="fjern-r" onclick="hideRandom(${random})">
       </center>
        `;

    }
}




