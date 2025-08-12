async function rickAndMortyAPI() {
    try{
        const values = await fetch("https://rickandmortyapi.com/api/character")
        const dados = await values.json();
        const results = dados.results;
        results.forEach(element => {
            const createUl = document.createElement("li")
            createUl.innerHTML = `<img src="${element.image}"></img> <p>${element.name}</p>`
            list.appendChild(createUl)
        });
    }catch(erro){
        console.log(erro)
    }
}

const list = document.querySelector(".list-images")

rickAndMortyAPI()