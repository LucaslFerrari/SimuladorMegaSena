// Função original para comparação
function gerarAleatoriosOriginal() {
    var vetor = [];
    var geracoes = [];
    while (vetor.length < 6) {
        var aleatorio = Math.floor(Math.random() * 60 + 1);
        geracoes.push(aleatorio);
        if (vetor.includes(aleatorio)) {
            continue;
        }
        vetor.push(aleatorio);
    }
    return vetor;
}

// Função otimizada com Set
function gerarAleatoriosSet() {
    const numeros = new Set();
    while (numeros.size < 6) {
        const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
        numeros.add(numeroAleatorio);
    }
    return Array.from(numeros).sort((a, b) => a - b);
}

// Função para calcular o tempo médio de execução
function medirTempoExecucao(func, iteracoes = 10000) {
    const inicio = performance.now();
    for (let i = 0; i < iteracoes; i++) {
        func();
    }
    const fim = performance.now();
    return (fim - inicio) / iteracoes; // Tempo médio em ms
}

// Executa a medição de tempo
const iteracoes = 10000;
const tempoOriginal = medirTempoExecucao(gerarAleatoriosOriginal, iteracoes);
const tempoSet = medirTempoExecucao(gerarAleatoriosSet, iteracoes);

// Calcula a diferença percentual
const diferencaPercentual = ((tempoOriginal - tempoSet) / tempoOriginal) * 100;

console.log(`Tempo médio - Função Original: ${tempoOriginal.toFixed(4)} ms`);
console.log(`Tempo médio - Função com Set: ${tempoSet.toFixed(4)} ms`);
console.log(`A função com Set é aproximadamente ${diferencaPercentual.toFixed(2)}% mais rápida.`);
