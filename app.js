// Operações com string

var person = {
    name: 'Luccas Souza',
    height: 7.5,
    sayHello: function(){
        console.log("Hello")
    },
}

person.sayHello()

// --------------------- //

var text = 'Hello Cataline'

var value = text.length             //Tamanho do texto
            text.text[1]            // posição da letra que sera exibida
            text.replace('o','@')   // mudar a letra com os parametros:
            text.toUpperCase()      // Transformar todo o texto em maiuscula
            text.toLowerCase()      // Trasnformar todo o texto em minuscula
            text.trim()             // Remover os espaçamentos
            text.split(' ')         // Retornar um vetor com 2 posições 

console.log(value)