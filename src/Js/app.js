/*Criando a função que gera as imagens*/
function gerarImagem(){
    let valor_selecionado = document.querySelector('select').value; //obtém o valor selecionado do campo "select"

    if(!valor_selecionado){
        alert("Nenhum Personagem foi Selecionado!");
        return; //Sai da função se nenhum personagem for selecionado
    }

    // Cria um elemento <img> usando JavaScript
    let gerar_imagem = document.createElement('img');

    // Define o atributo src da imagem com base no valor selecionado
    gerar_imagem.src = `./src/img/${valor_selecionado}.jpg`;

       // Obtém a seção onde a imagem será exibida  
    let secao_imagem = document.querySelector('.gerar-personagem');

    // Limpa a seção de imagem
    secao_imagem.innerHTML = "";
    secao_imagem.appendChild(gerar_imagem); 

    //habilita o botao deletar imagem
    habilitarBotao('.botao-deletar');
    habilitarBotao('.botao-wallpaper');
}

/* Criando uma função AUTOMATICA que habilita os botões "disabled" */
function habilitarBotao(seletor){
    const botao = document.querySelector(seletor); // Procura o elemento com base no seletor fornecido.

    if (botao) { // Se o elemento for encontrado.
        if (botao.tagName.toLowerCase() === 'button') { // Verifica se o elemento é um botão.
            botao.disabled = false; // Habilita o botão.
            botao.style.cursor = "pointer"; // Altera o cursor para indicar que o botão está clicável.

            // Adiciona o evento "mouseover" para mudar a cor de fundo quando o mouse passar por cima.
            botao.addEventListener('mouseover', function() {
                this.style.backgroundColor = '#30276898'; 
            });

            // Adiciona o evento "mouseout" para restaurar a cor de fundo original quando o mouse sair.
            botao.addEventListener('mouseout', function() {
                this.style.backgroundColor = ''; // Volta ao estilo padrão quando o mouse sai.
            });
        } else {
            // Exibe uma mensagem de erro no console se o elemento não for um botão.
            console.error(`O elemento com o seletor "${seletor}" não é um botão.`);
        }
    } else {
        // Exibe uma mensagem de erro no console se nenhum elemento for encontrado com o seletor fornecido.
        console.error(`Elemento com o seletor "${seletor}" não encontrado.`);
    }
}

/*Criando a função que deleta a imagem */
function deletarImagem(){
    document.querySelector('select').value = ""; // Retorna a opção que tem o valor vazio.
    let secao_imagem = document.querySelector('.gerar-personagem');
    secao_imagem.innerHTML = ""; // Limpa a seção de imagem

    // Reseta a imagem de fundo
    document.body.style.backgroundImage = "";
}       

/*Criando a função que transforma o personagem em wallpaper */
function wallpaperImagem(){
    let valor_selecionado = document.querySelector('select').value; //obtem o campo selecionado no "select" 

    if (!valor_selecionado) {
        alert("Nenhum Personagem foi Selecionado!");
        return; // Sai da função se nenhum personagem for selecionado
    }

    document.body.style.backgroundImage = `url('./src/img/${valor_selecionado}.jpg')`;
    document.body.style.backgroundSize = "cover"; // Ajusta a imagem para cobrir toda a tela
    document.body.style.backgroundPosition = "center"; // Centraliza a imagem
    document.body.style.backgroundRepeat = "no-repeat"; // Evita repetição da imagem
}