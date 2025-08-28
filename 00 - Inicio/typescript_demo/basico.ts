//1* Tipos primitivos
let nome: string = "Juan";
let idade: number = 30;
let casado: boolean = true;

nome = 'Leonildo'
casado = false;

//2* Tipos mais complexos 
let hobbies: string[]; 
// let pessoa; // uma variável sem um tipo especificado, vai assumur o tipo any, podendo passar valores de any tipos. (O topo any deve ser evitado)

// hobbies = ['Ler', 'Viajar','Estudar'];

// pessoa = [
//     { nome: 'Maria', idade: 28, casado: false },
//     { nome: 'Pedro', idade: 35, casado: true }
// ];


// let pessoaComTipos: {
//     nome: string;
//     idade: number;
//     eCasado: boolean;
// };

// pessoaComTipos = { 
//     nome: 'Ana', 
//     idade: 25, 
//     eCasado: false 
// };

//arrey de pessoas --> posso passar uma lista de pessoas 
let gente: {
    nome: string;
    idade: number;
    eCasado: boolean;
}[];

//Inferencias de tipos 
// let curso = 'TypeScript';
// curso = 1234;

let curso: string | number = 'TypeScript total';
curso = 1234;
curso = 'abcd ';

let userName: string | string[]; // pode ser string ou array de strings

userName = 'João';
userName = ['João', 'Maria'];

//Criando o nosso proprio tipo 
type Pessoa = {
    nome: string;
    idade: number;
    casado: boolean;
};


let pessoa: Pessoa[]; // Usando o nosso proprio tipo 'Pessoa'

pessoa = [
    { nome: 'Maria', idade: 28, casado: false },
    { nome: 'Pedro', idade: 35, casado: true }
];


//*3 Tipos de funçoes, parametros e outros
// - funçoes e tipos 
function soma(a: number, b: number){
    return a + b;
};

function mostrar(valor: any){
    console.log(valor);
};

// Generics (Genericos) - caso 1 
function InserirA1Ptimrito(array: any[], valor: any){
    const novoArray = [valor, ...array];
    return novoArray;
}; 

const demoArray = [2, 3, 4];
const arrayModificado = InserirA1Ptimrito(demoArray, -2);
arrayModificado[0].split['']


// Generics (Genericos) - caso 2 --> deixar generico
function InserirA1Ptimrito2<T>(array: T[], valor: T){
    const novoArray = [valor, ...array];
    return novoArray;
}; 

const demoArray2 = [2, 3, 4];

const arrayModificado2 = InserirA1Ptimrito2(demoArray2, -3);
// arrayModificado2[0].split['']// aqui dará numero pq o tipo assumiu como numerico 

const arrayString = InserirA1Ptimrito2(['a','b','c'], 'teste');
arrayString[0].split['']// aqui dará string pq o tipo assumiu como string

// classes 

class Estudante {
    nome: string;
    apelido: string;
    idade: number;
    private cursos: string[];

    constructor(nome: string, apelido: string, idade: number, cursos: string[]) {
        this.nome = nome;
        this.apelido = apelido;
        this.idade = idade;
        this.cursos = cursos;
    }

    subscreverCurso(novoCurso: string) {
        this.cursos.push(novoCurso);
    }

    mostrarCursos() {
       return this.cursos;
    }
}

var estudanteA = new Estudante('Maria', 'Silva', 28, ['Matemática', 'Física']);
var estudanteB = new Estudante('João', 'Souza', 22, ['Química', 'Biologia']);

estudanteA.subscreverCurso('SQL Server Total');
this.mostrarCursos();
// estudanteA.cursos[0] // dá erro pq a propriedade cursos é privada, só pode ser acessada dentro da classe.l


//Interfaces 
interface Humano{
    nome: string;
    idade: number;

    saudar(): void;
}

let leonildo: Humano;

leonildo = {
    nome: 'Leonildo',
    idade: 30,
    saudar: () => {
        console.log(`Olá, meu nome é ${leonildo.nome} e tenho ${leonildo.idade} anos.`);
    }
}


class Instructor implements Humano{
    nome: string;
    idade: number;
    saudar(): void {
        throw new Error("Method not implemented.");
    }
}