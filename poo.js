
function pessoa(nome,idade,cpf){
    this.nome = nome
    this.idade = idade
    let _cpf = cpf

    this.getCpf = function(){
        return _cpf
    }
}

function enpregado(nome,idade,cpf,id){
    this.id = id

    pessoa.call(this,nome,idade,cpf)
}

function cliente(nome,idade,cpf,endereco){
    this.endereco = endereco

    pessoa.call(this,nome,idade,cpf)
}


const atos = new pessoa('atos',22,443.555)
const geovanna = new enpregado('geovanna',19,443.555,567)
const maria = new cliente('maria',20,675.448,'rua maranhao')

console.log(atos)
console.log(`cpf: ${atos.getCpf()}`)

console.log(geovanna)
console.log(`cpf: ${geovanna.getCpf()}`)

console.log(maria)
console.log(`cpf: ${maria.getCpf()}`)