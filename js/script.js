function Viagem(nome, email, telefone, passagem, data, metodo) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.passagem = passagem;
    this.data = data;
    this.metodo = metodo;

    this.id = Viagem.length;

    this.limpar = function () {
        this.nome = null;
        this.email = null;
        this.telefone = null;
        this.passagem = null;
        this.data = null;
        this.metodo = null;

    }

    this.gerar = function () {
        viagensRealizadas[viagensRealizadas.length] = new Viagem(
            this.nome,
            this.email,
            this.telefone,
            this.passagem,
            this.data,
            this.metodo
        )


        var row = table.insertRow();
        var cell = row.insertCell();
        cell.innerHTML = this.nome;
        var cell = row.insertCell();
        cell.innerHTML = this.passagem.nome;
        var cell = row.insertCell();
        cell.innerHTML = this.data;
        var cell = row.insertCell();
        cell.innerHTML = "R$ " + this.passagem.valor;



        this.limpar();




    }
}

var viagemAtual = new Viagem(null, null, null, null, null, null);
var viagensRealizadas = [];

function Passagem(nome, valor) {
    this.nome = nome;
    this.valor = valor;
}

function Pais(nome) {
    this.nome = nome;
    this.passagens = [];

    this.addPassagem = function (passagem) {
        this.passagens.push(passagem);
    }
}

var passagemRio = new Passagem('Rio de Janeiro', 280);
var passagemFlor = new Passagem('Florianópolis', 316);
var passagemNatal = new Passagem('Natal', 333);

var brazil = new Pais("Brasil");

brazil.addPassagem(passagemRio);
brazil.addPassagem(passagemFlor);
brazil.addPassagem(passagemNatal);

var passagemTokyo = new Passagem('Tokyo', 3.940);
var passagemKyoto = new Passagem('Kyoto', 6.281);
var passagemOsaka = new Passagem('Osaka', 5.808);

var japan = new Pais("Japão");

japan.addPassagem(passagemTokyo);
japan.addPassagem(passagemKyoto);
japan.addPassagem(passagemOsaka);

var passagemPolok = new Passagem('Polokwane', 8.453);
var passagemKim = new Passagem('Kimberley', 6.352);
var passagemJoha = new Passagem('Johanesburgo', 6.652);

var africa = new Pais("Africa");

africa.addPassagem(passagemPolok);
africa.addPassagem(passagemKim);
africa.addPassagem(passagemJoha);


var inputViagem = document.querySelector('input#viagem');
var clienteForm = document.querySelector("form#cliente-form");
var pagamentoForm = document.querySelector("form#pagamento-form");

var selectPagamento = document.querySelector("#pagamento-form select#forma")

var cartaoForm = document.querySelector("fieldset.form-cartao");
var boletoForm = document.querySelector("fieldset.form-boleto");

var table = document.querySelector("table");





function selecionar(passagem) {
    viagemAtual.limpar();

    viagemAtual.passagem = passagem;

    inputViagem.value = viagemAtual.passagem.nome;
}

function avancar() {
    pagamentoForm.setAttribute('style', 'display: block;');
    clienteForm.setAttribute('style', 'display: none;');

    viagemAtual.nome = $("input#nome").val();
    viagemAtual.email = $("input#email").val();
    viagemAtual.telefone = $("input#telefone").val();
    viagemAtual.data = $("input#data").val();

}

function regredir() {
    pagamentoForm.setAttribute('style', 'display: none;');
    clienteForm.setAttribute('style', 'display: block;');
}

function finalizar() {

    viagemAtual.metodo = $("select#metodo").val();
    viagemAtual.gerar();

    regredir();

    $('input').val(null);
    $('select option').prop("selected", false);

}


selectPagamento.addEventListener('input', function (evt) {
    if (selectPagamento.value == 0) {
        cartaoForm.setAttribute('style', 'display: block;');
        boletoForm.setAttribute('style', 'display: none;');
    } else if (selectPagamento.value == 1) {
        cartaoForm.setAttribute('style', 'display: none;');
        boletoForm.setAttribute('style', 'display: block;');
    }
    else {
        cartaoForm.setAttribute('style', 'display: none;');
        boletoForm.setAttribute('style', 'display: none;');
    }
});