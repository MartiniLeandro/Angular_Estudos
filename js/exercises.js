console.log("--------------EXERCISE 1--------------")
//EXERCISE 1

const checkNumbers = (n1,n2) => {
    if (n1 == 100 || n2 == 100){
        return true
    }else if(n1 + n2 == 100) {
         return true
    }
    return false
}

console.log(checkNumbers(50,100));
console.log(checkNumbers(50,50));
console.log(checkNumbers(50,51));

console.log("--------------EXERCISE 2--------------")
// EXERCISE 2

const extensionFile = (program) => program.slice(program.lastIndexOf('.'));

console.log(extensionFile("exercises.js"));
console.log(extensionFile("index.html"));
console.log(extensionFile("webpack.config.js"));

console.log("--------------EXERCISE 3--------------")
// EXERCISE 3
let media;
const sistemaAprovacao = (nome,nota1,nota2) => {
    if(nota1 > 10 || nota1 < 0){ console.log("ERRO!!")} else if(nota2 > 10 || nota2 < 0){{ console.log("ERRO!!")}};
    
    media = (nota1 + nota2) / 2;
    if(media >= 7){
        console.log(`Você passou de ano ${nome}!!`)
    }else if (media >= 5){
        console.log(`Você está de recuperação ${nome}!!`)
    }else {
        console.log("REPROVADO!!")
    }
}

sistemaAprovacao("Leandro",0,9)

console.log("--------------EXERCISE 4--------------")
// EXERCISE 4

const fizzBuzz = (number) => {
    const arrayFizzBuzz = []
    for(let i = 0; i <=number; i++){
        if(i % 3 === 0 && i % 5 === 0){
            arrayFizzBuzz.push("FizzBuzz")
        }else if(i % 5 === 0){
            arrayFizzBuzz.push("Buzz")

        }else if (i % 3 === 0){
            arrayFizzBuzz.push("Fizz")
        }else {
            arrayFizzBuzz.push(i)
        }
    }
    return arrayFizzBuzz
}

console.log(fizzBuzz(100))

console.log("--------------EXERCISE 5--------------")
// EXERCISE 5

const usuarios = [
  { nome: "Ana", ativo: true },
  { nome: "Carlos", ativo: false },
  { nome: "Maria", ativo: true }
]

function pegarUsuariosAtivos(arr) {
  const resultado = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].ativo === true) {
      resultado.push(arr[i].nome);
    }
  }

  return resultado;
}

console.log(pegarUsuariosAtivos(usuarios));

console.log("--------------EXERCISE 6--------------")
// EXERCISE 6

const estado = {
  nome: "Leandro",
  idade: 25
}

const {nome} = estado;
console.log({nome})