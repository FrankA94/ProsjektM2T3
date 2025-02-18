let appDiv = document.getElementById('app');


function changePage(side) {
    model.app.currentpage = side;
    updateView();
}
updateView();

function updateView() {
    const side = model.app.currentpage;
    if (side == "Film Velger") login();
    if (side == "Kategorier") categories();
    if (side == "movie") movie();
    if (side == "series") series();
    if (side == "favs") favs();
    if (side == "random") random();
    if (side == "Min Side") minside();
    if (side == "skjult") skjult();
}

function login() {
    let html = `
    <br>
        <Center>
        <h1> ${model.app.currentpage} </h1>
        <input type = "text" onchange="model.inputs.startpage.login = this.value" placeholder ="User Name">
        <br><br>
        <input type = "password" onchange="model.inputs.startpage.pwd = this.value" placeholder ="Password">
        <br><br>
        <button onclick ="random()"> Login </button>
        </Center>
    `;
    appDiv.innerHTML = html;
}

function showmeny() {
    let html = /*html*/`
    <div class="btn-group">
    <center>
    <Button type="button" class="button" onclick="changePage('Min Side')">Min Side</button>
    <Button type="button" class="button" onclick="changePage('Kategorier')">Kategorier</button>
    <Button type="button" class="button" onclick="changePage('movie')">Alle filmer</button>
    <Button type="button" class="button" onclick="changePage('series')">Alle serier</button>
    <Button type="button" class="button" onclick="changePage('random')">Tilfeldig Film / Serie</button>
    </center>
</div>


    `;
    return html;
}

function loggpå() {
    let html = `
    ${showmeny()}
    <h1>Velkommen ${model.app.currentuser} </h1>`
    appDiv.innerHTML = html;
}

function movie() {
    let html = `
    ${showmeny()}
    <h1> Filmer </h1>`;
    for (let i = 0; i < model.movies.length; i++) {
        html += `
        <br>
        <img class="bilde" src="${model.movies[i].picture}" alt="spiderman">
        <img src="h.jpg" class="favoritt" onclick="addFavoritt(${i})">
        <img src="x.png" class="fjern" onclick="hideMovie(${i})">
        <br><br>
        <b>Tittel: ${model.movies[i].title}</b>
        <br><br>
        <Button onclick="openInNewTab('${model.movies[i].Netflix}');"> Se den på Netflix</Button>
        <br><br>
        <hr> 
        `;

    };
    appDiv.innerHTML = html;
}

function series() {
    let html = `
    ${showmeny()}
    <h1> Serier </h1>`
    for (let i = 0; i < model.series.length; i++) {
        html += `
        <br>
        <img class="bilde" src="${model.series[i].picture}" alt="The mentalist">
        <img src="h.jpg" class="favoritt" onclick="addSerie(${i})">
        <img src="x.png" class="fjern" onclick="hideSerie(${i})">
        <br><br>
        <b>Tittel: ${model.series[i].title}</b>
        <br><br>
        <Button onclick="openInNewTab('${model.series[i].hbo}');"> Se den på HBO max</Button>
        <br><br>
        <hr>
        `;
    };
    appDiv.innerHTML = html;
}

function minside() {
    let html = `
    ${showmeny()}
    <center>
    <h1> ${model.app.currentpage} </h1>
    <img class="profilbilde" src="https://kvener.no/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png"></img>
    <br><br>
    Navn: ${model.app.currentuser} <button> Endre Navn </button> <br>
    Epost: ${model.app.currentepost} <button> Endre Epost </button> <br>
    Passord: ***** <button> Endre Passord </button> <br>
    <br><br>
    <div class="btn-group">
    <Button type="button" class="button" onclick="changePage('favs')">Mine favoritter(${model.app.antallFavoritter})</button>
    <Button type="button" class="button" onclick="changePage('skjult')">Skjult innhold(${model.app.antallHidet})</button>
    </div>
    </center>
    `;

    appDiv.innerHTML = html;
}

function favs() {
    let html = `
    ${showmeny()}
    <h1> Dine favoritter </h1>
     `;
    for (let i = 0; i < model.app.favOs.length; i++) {
        html += `
         <b>
        ${model.app.favOs[i]}
        <button onclick="slett(${i})">Slett</button>
        </b>
        <hr>
        `};
    appDiv.innerHTML = html;
}


function random() {
    let html = `
    ${showmeny()}
    <center>
        <h1> Velkommen ${model.app.currentuser}!</h1>
        <h3> Trykk på hjulet for å finne en tilfeldig film / serie </h3>
        <img src="spinning-shit.png" class="spinner" onclick = "spin()"> 
        <br><br>
        </center>
        <div class="rand" id="random"></div>
    `;
    appDiv.innerHTML = html;
}

function categories() {
    let html = `
${showmeny()}
    <h1> Kategorier </h1>`;
    for (let i = 0; i < model.categories.length; i++) {
        html += `<button onclick="showUnder()">${model.categories[i].categoryName} </button>`;
    }
    appDiv.innerHTML = html;
}

function showUnder() {
    let html = `
    ${showmeny()}
    <h1> Underkategorier </h1>`;
    for (let i = 0; i < model.categories.length; i++) {
        html += `<button> ${model.categories[i].underCategory1}</button>`

    }

    appDiv.innerHTML = html;
}

function skjult() {
    let html = `
    ${showmeny()}
    <h1> Skjult innhold </h1>
     `;
    for (let i = 0; i < model.app.hide.length; i++) {
        html += `
         <b>
        ${model.app.hide[i]}
        <button onclick="gjennopprett(${i})">Gjennopporett</button>
        </b>
        <hr>
        `};
    appDiv.innerHTML = html;
}


function openInNewTab(url) {
    window.open(url, '_blank').focus();
}