const pessoa = [
    {
        nome: 'Eduarda',
        sobrenome: 'Velho',
        idade: 30,
    },
    {
        nome: 'Vinicius',
        sobrenome: 'Ferreira',
        idade: 18 + 2,
        mostrarIdade() {
            alert(this.nome + " " + this.sobrenome);
        },
    },
    {
        nome: 'Nikolas',
        sobrenome: 'Lopes',
        idade: 19,
    },
];

// alert(pessoa[2].nome);
// alert(duda.nome);

const duda = {
    nome: "Eduarda",
    sobrenome: "Velho",
    odade: 30,
};

const { nome, sobrenome } = duda;
//Isso aqui é a mesma coisa que fazer:
//const nome = nome.duda;
//const sobrenome = sobrenome.duda;

// mostrarNomeCompleto (nome, sobrenome)

// function mostrarNomeCompleto(nome, sobrenome) {
//     alert(nome + " " + sobrenome);
// }

const cores = ['azul','verde', 'vermelho', 'amarelo', 'roxo'];
const [primeiraCor, segundaCor, terceiraCor, ...coresRestantes] = cores
// const { 2: primeiraCor} = cores;
// alert(coresRestantes)

const pessoaSecreta = {
    nome: "Rodolfo",
    sobrenome: "Josefino",
    idade: 67,
    profissao: "Esmilhirador",
    genero: "Rock",
    signo: "Alfa",
    idolo: "Superchoque",
    artistaFavorita: "Caneta Azul",
    filmeFavorito: "Minecraft"
};

const {artistaFavorita, filmeFavorito, ...informacoesRestantes } = pessoaSecreta

// console.log (informacoesRestantes)

const numerosA = [6, 7, 8];
const numerosB = [4, 2, 1];

const todosOsNumeros = [...numerosA, ...numerosB];

const pessoaBase = {
    nome: "Goku",
    sobrenome: "Vegeta",
};

const pessoaExtra = {
    signo: "Serpentário",
    idade: null,
};

const pessoaCompleta = {
    ...pessoaBase,
    ...pessoaExtra
}

// ATIVIDADE: Desestruturação vetores de objetos com operador rest (...) para capturar elementos restantes
//     const carros = [
//         { 
//             nome: "Corolla", 
//             marca: "Toyota",
//             ano: 2023,
//             cor: "Prata",
//             preco: 142900,
//             cavalos: 144,
//             combustivel: "Flex"
//         },
//         { 
//             nome: "Civic", 
//             marca: "Honda",
//             ano: 2024,
//             cor: "Preto",
//             preco: 169900,
//             cavalos: 173,
//             combustivel: "Flex"
//         },
//         { 
//             nome: "Golf", 
//             marca: "Volkswagen",
//             ano: 2023,
//             cor: "Branco",
//             preco: 189900,
//             cavalos: 150,
//             combustivel: "Gasolina"
//         },
//         { 
//             nome: "Mustang", 
//             marca: "Ford",
//             ano: 2024,
//             cor: "Vermelho",
//             preco: 489900,
//             cavalos: 450,
//             combustivel: "Gasolina"
//         },
//         { 
//             nome: "Onix", 
//             marca: "Chevrolet",
//             ano: 2024,
//             cor: "Cinza",
//             preco: 89900,
//             cavalos: 116,
//             combustivel: "Flex"
//         }
//     ];


//     //Desestruturação do objeto

// console.log(carros[2].nome + " " + carros[2].marca)

// //Desestruturação do vetor

// const [primeiroCarro, segundoCarro, terceiraCarro, ...carrosRestantes] = carros

// console.log (primeiroCarro);
// console.log (segundoCarro);
// console.log (terceiraCarro);
// console.log (carrosRestantes);


// const carroNormal = {
//     nome: "Marea",
//     marca: "Fiat",
// };

// const carroTurbo = {
//     troca: " turbo",
//     cavalos: 700,
// };

// const carroCompleto = {
//     ...carroNormal,
//     ...carroTurbo
// };

// console.log (carroCompleto);

const pessoas = [
    { nome: 'Eduarda', sobrenome: 'Velho', idade: 30 },
    { nome: 'Vinicius', sobrenome: 'Ferreira', idade: 20 },
    { nome: 'Nikolas', sobrenome: 'Lopes', idade: 19 },
]; 

// const ul = document.querySelector("ul"); // O querySelector busca esse elemento e guarda na variável no caso vai fazer uma ponte com o HTML

// const pessoasLi = pessoas.map(({ nome, sobrenome, idade }) => {
//   const pessoa = document.createElement("li");
//   pessoa.innerHTML = `${nome} ${sobrenome}`;
//   pessoa.className = "pessoa";
//   pessoa.onclick = () => {
//     alert(`A idade da pessoa é: ${idade}`);
//   };
//   return pessoa;
// });

// ul.append(...pessoasLi);

const ul = document.querySelector("ul"); //Aqui ele vai buscar o elemento ul que está no html e vai criar uma ponte com o JS

const pessoasLi = pessoas.map(({ nome, sobrenome, idade }) => {  //aqui ele puxou um .map para mapear da constante pessoas nome, sobrenome e idade
    const li = document.createElement("li"); //aqui criou uma classe li para poder listar
    li.className = "pessoa"; //definiu o nome da classe li como "Pessoa"
    li.innerHTML = `${nome} ${sobrenome}`; //"Ele vai puxar no html nome e sobrenome "
    li.addEventListener("click", () => { //aqui ele vai adicionar um evento de clique
        alert(`A idade de ${nome} é: ${idade}`); //quando der o evento de clique em cima do nome da pessoa, vai mostra novamente o nome dela e a idade
    });
    return li;
});

ul.append(...pessoasLi);