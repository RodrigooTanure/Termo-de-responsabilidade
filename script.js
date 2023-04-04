let nomeSoc = document.querySelector('#nome-socio');
let matSoc = document.querySelector('#mat-socio');
let dataComeco = document.querySelector('#data-comeco');
let dataFim = document.querySelector('#data-fim');
let horaComeco = document.querySelector('#hora-comeco');
let horaFinal = document.querySelector('#hora-fim');
let salao = document.querySelector('#salao-select');
let gerente = document.querySelector('#gerente');

// ===================================================================
// ===== LOCAIS ONDE SERÁ ESCRITO!! ==================================
// ===================================================================

const nomeSocInner = document.querySelector('.nome-socInner');
const nomeSocInner02 = document.querySelector('#nome-socInner02');
const matSocInner = document.querySelector('#mat-soc');
const matSocInner02 = document.querySelector('#mat-soc02');
const dataInicioInner = document.querySelector('#data-inicial');
const dataFimInner = document.querySelector('#data-final');
const horaInicioInner = document.querySelector('#hora-inicial');
const horaFinalInner = document.querySelector('#hora-final');
const salaoInner = document.querySelector('#salao');
const nomeGerenteInner = document.querySelector('#nome-gerente');

// =================================================================

let p = false;

document.querySelector('#adicionar-dados').addEventListener('click', () => {
    addDados();
});

document.querySelector('#imprimir').addEventListener('mouseenter', () => {
    if (p == true) {
        document.querySelector('#imprimir').style.backgroundColor = 'white';
        document.querySelector('#imp').style.color = 'green';
    } 
});

document.querySelector('#imprimir').addEventListener('mouseleave', () => {
    if (p == true) {
        document.querySelector('#imprimir').style.backgroundColor = 'green';
        document.querySelector('#imp').style.color = 'white';
    } 
});

document.querySelector('#imprimir').addEventListener('click', () => {
    if (p == false) {
        alert('Insira os dados da impressão');
    } else {
        document.body.style.overflow = 'hidden';
        document.querySelector('main').style.marginBottom = '4000px';
        document.querySelector('.impressao').style.display = 'block';
        // document.body.style.background = 'none';
        print();
        document.querySelector('.impressao').style.display = 'none';
        document.querySelector('main').style.marginBottom = '0px';
        document.body.style.overflow = 'auto';
    }
});

addDados = () => {
    if (nomeSoc.value.length == 0) {
        alert('ESCOLHA O NOME DO SÓCIO!');
        nomeSoc.style.boxShadow = '0 0 0 1px red'
        nomeSoc.focus();
    } else if (matSoc.value.length != 8) {
        alert('DIGITE UMA MÁTRICULA VÁLIDA');
        matSoc.style.boxShadow = '0 0 0 1px red'
        matSoc.focus();
    } else if (dataComeco.value.length == 0) {
        alert('ESCOLHA A DATA INICIAL');
        dataComeco.style.boxShadow = '0 0 0 1px red';
        dataComeco.focus();
    } else if (dataFim.value.length == 0) {
        alert('ESCOLHA A DATA FINAL');
        dataFim.style.boxShadow = '0 0 0 1px red';
        dataFim.focus();
    } else if (horaComeco.value.length == 0) {
        alert('ESCOLHA A HORA DE INÍCIO!');
        horaComeco.style.boxShadow = '0 0 0 1px red';
        horaComeco.focus();
    } else if (horaFinal.value.length == 0) {
        alert('ESCOLHA A HORA FINAL!');
        horaFinal.style.boxShadow = '0 0 0 1px red';
        horaFinal.focus();
    } else if (salao.value == 'x') {
        alert('ESCOLHA O SALÃO!');
        salao.style.boxShadow = '0 0 0 1px red';
    } else if (gerente.value == 'x') {
        alert('ESCOLHA O GERENTE');
        gerente.style.boxShadow = '0 0 0 1px red';
    } else {
        nomeSocInner.innerHTML = nomeSoc.value;
        nomeSocInner02.innerHTML = nomeSoc.value;
        matSocInner.innerHTML = matSoc.value;
        matSocInner02.innerHTML = matSoc.value;
        dataInicioInner.innerText = dataComeco.value.split('-').reverse().join('/');
        dataFimInner.innerText = dataFim.value.split('-').reverse().join('/');
        horaInicioInner.innerText = horaComeco.value.replace(':', ' h e ') + " min";
        horaFinalInner.innerText = horaFinal.value.replace(':', ' h e ') + " min";
        salaoInner.innerText = salao.value;
        nomeGerenteInner.innerText = gerente.value;
        nomeSoc.style.boxShadow = '0 0 0 2px green'
        matSoc.style.boxShadow = '0 0 0 2px green'
        dataComeco.style.boxShadow = '0 0 0 2px green';
        dataFim.style.boxShadow = '0 0 0 2px green';
        horaComeco.style.boxShadow = '0 0 0 2px green';
        horaFinal.style.boxShadow = '0 0 0 2px green';
        salao.style.boxShadow = '0 0 0 1px green';
        gerente.style.boxShadow = '0 0 0 1px green';
        document.querySelector('#imp').innerText = 'print';
        document.querySelector('#imprimir').style.backgroundColor = 'green';
        document.querySelector('#imprimir').style.cursor = 'pointer';
        p = true;
    };
};
