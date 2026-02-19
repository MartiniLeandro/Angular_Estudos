// Nullish Coalescing Operator
  //maneira mais restrita de tratar os falsy, ou seja, valores considerados falsos

const idade = 0;

//document.body.innerText = `Sua idade é: ${idade ?? "Não informado"}`;

// Objetos

const user = {
  nome: "leandro",
  idade: 20,
  endereco: {
    rua: "rua teste 1",
    numero: 5012,
  },
};

//const endereco = user.endereco;
  //desestruturação
const { endereco:address, nome:name, age = 20 } = user

function mostrarIdade({ idade:age }) {
  return age
}

//document.body.innerText = mostrarIdade(user); 

  //Rest Operator

const {endereco, ...rest} = user;

const array = [1,2,3,4,5,6,7,8,9,10]
const [first,,third, ...rest2] = array

//document.body.innerText = JSON.stringify([first,third, rest2])

let x;
function sayHello(){
  x = 3 * 4
}

const sayHello2 = function(){
  return "Hello World 2"
}
sayHello()

const sayHello3 = () => "Hello 3"


document.getElementById("app").innerHTML = sayHello3()
let a,b,c;
a = 5;
b = 6;
c = a + b;

a = 5; b = 6; c = a + b;
console.log(c)


const validacaoIf = a > b ? "a maior que b" : "b maior que a"

const fullname = function() {return this.firstName + ' ' + this.lastName}
const person = {}

person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
person.fullName = fullname

console.log(JSON.stringify(person))
console.log(person.fullName())

function myFunction() {
  return this;
}

document.getElementById("app").innerHTML = myFunction();

for (let x in person){
  console.log(x)
}

function Person(first,last,age,eyeColor){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
  this.fullname = fullname
}

const person2 = new Person("teste","teste",29,"teste")
console.log(JSON.stringify(person2))


const carrinho = []

const adicionarProduto = (id,nome,preco,quantidade) => {
  const produtoExiste = carrinho.find(p => p.id === id)
  if(produtoExiste){
    produtoExiste.quantidade += quantidade
  }else {
    carrinho.push({id,nome,preco,quantidade})
  }
}

adicionarProduto(1,"mesa",300, 1);
adicionarProduto(2,"notebook",2300, 1);
adicionarProduto(1,"mesa",300, 1);
console.log(carrinho)

// TESTE ASYNC/AWAIT (await utilizar uma função com promise)

const esperar = (ms) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Terminou!");
    }, ms);
  });
};

const executar = async() => {
    const esperarResultado = await esperar(3000);
    console.log(esperarResultado);
}

executar();

