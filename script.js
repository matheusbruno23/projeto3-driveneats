function escolherComida1(seletorComida){
    const selecionado = document.querySelector('.itens .verdinho');
    if (selecionado !== null){
        selecionado.classList.remove('verdinho');
    }
    const elemento = document.querySelector(seletorComida);
    elemento.classList.toggle('verdinho')
}

function escolherComida2(seletorComida1){
    const selecionado = document.querySelector('.itens1 .verdinho');
    if (selecionado !== null){
        selecionado.classList.remove('verdinho');
    }
    const elemento1 = document.querySelector(seletorComida1);
    elemento1.classList.toggle('verdinho')
}

function escolherComida3(seletorComida2){
    const selecionado = document.querySelector('.itens2 .verdinho');
    if (selecionado !== null){
        selecionado.classList.remove('verdinho');
    }
    const elemento = document.querySelector(seletorComida2);
    elemento.classList.toggle('verdinho')
}

function finalizarPedido(){
    const final = document.querySelector('.botfinal');
    const apertados = document.querySelector('.itens2 .itens1 .itens')
    if (apertados.classList.contains('verdinho')){
        final.innerHTML = "Fechar Pedido"
    }
    
}
