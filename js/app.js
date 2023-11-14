let totalGeral;
limpar();

function adicionar() {
    //recuperar valores -> nome, quantidade e valor

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantProduto = document.getElementById('quantidade').value;

    //calcular o preço

    let preco = quantProduto * valorUnitario;
    
    //adicionar no carrinho

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`

    //atualizar o valor total da compra

    totalGeral += preco;

    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;    

}

function limpar() {

    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0'

}