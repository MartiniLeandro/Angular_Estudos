const novoP = document.createElement("p")
const body = document.querySelector("body")
novoP.textContent = "apenas teste de criação de P"
novoP.classList.add("expense")
novoP.style.textAlign = "center";
body.appendChild(novoP)

const btnChangeColor = document.querySelector(".btn-color")
btnChangeColor.addEventListener("click", () => {
    const corAleatoria = gerarCorAleatoria();
    body.style.backgroundColor = corAleatoria;
})

function gerarCorAleatoria(){
    const letras = "0123456789ABCDEF"
    let cor = "#"
    for(let i = 0; i< 6; i++){
        cor += letras[Math.floor(Math.random() * 16)];
    }

    return cor
}


const minhaPromise = new Promise((resolve, reject) => {
    const sucesso = true;
    if(sucesso){
        resolve("Deu certo!")
    }else{
        reject("Deu errado!")
    }
});

minhaPromise
    .then(resultado => console.log(resultado))
    .catch(erro => console.log(erro));

async function firstFetch() {
    try{
        const resposta = await fetch("https://rickandmortyapi.com/api/character");
        const dados = await resposta.json()
        const results = dados.results;
        results.forEach(element => {
            console.log(element)
        });

    }catch(erro){
        console.log(erro)
    }
}

firstFetch()
