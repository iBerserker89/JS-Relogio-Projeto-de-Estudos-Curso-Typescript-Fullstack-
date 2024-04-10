// Criar um relógio com função de iniciar, pausar e zerar.
// Quando pausado, a cor fica vermelha.

// não é mais necessário selecionar os botões porque estou fazendo isso no document.addeventlistener
/*
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
*/

// Por último é melhor mover tudo para dentro de uma única função:
function relogio(){
    const relogio = document.querySelector('.relogio');
    let segundos = 0; // armazena os segundos.
    let timer; // variável que será manipulada ao pausar

    // Criar uma função que pega a data em milissegundos
    function getTimeFromSecs() {
        // Js recebe segundos em milésimos, por isso multiplicar segundos por mil
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC' // Ignora meu time zone e pega o tempo exato de 01/01/1970 00:00:00
        });
    }

    // Função que inicia o relógio
    function startTimer() {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = getTimeFromSecs(segundos);
        }, 1000);
    }

    // Uma forma de poupar memória é usando o addeventlistener direto no documento.
    document.addEventListener('click', function(e) {
        const el = e.target; // e.target mostra qual elemento está sendo clicado na página.

        // Se a classe do elemento contém x, faça isso
        if (el.classList.contains('iniciar')) {
            clearInterval(timer);
            startTimer();
            relogio.classList.remove('pausado');
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            relogio.classList.remove('pausado');
        }
    });
}
relogio();



// Recebe o evento de clique no botão
/*
iniciar.addEventListener('click', function(event) {
    // É necessário limpar o intervalo pra que não haja um timer rodando sobre outro e gere bug
    clearInterval(timer);
    startTimer();
    relogio.classList.remove('pausado');
}); 

// Pausar funciona porque a variável segundos só mantém o seu estado atual e depois retoma, ela não é criada novamente.
pausar.addEventListener('click', function(event) {
    // limpa o intervalo de startTimer
    clearInterval(timer);
    // muda a cor do relógio para vermelho quando pausado.
    relogio.classList.add('pausado');

}); 

zerar.addEventListener('click', function(event) {
    // limpa e zera o relógio
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    relogio.classList.remove('pausado');
});
*/
