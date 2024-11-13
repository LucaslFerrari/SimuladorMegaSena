# SimuladorMegaSena

O professor Otávio pediu para seus alunos escrever uma função em javascript que gere 6 números aleatórios a fim de ficar milionário na mega sena. Ao esboçar a solução com os alunos, percebeu que o problema é uma questão bastante interessante da computação. 

Num primeiro momento, podemos gerar uma função simples que se encarrega da tarefa, que pode ser vista a seguir:

function gerarAleatorios(){
    var vetor = []
    while (vetor.length < 6){
        var aleatorio = Math.floor(Math.random()*60+1)
        vetor.push(aleatorio)
    }
    return vetor
}


Porém, essa função traz repetições entre os números gerados. Para deixar a solução mais acertiva, um caminho pode ser tomado, como segue:

function gerarAleatorios(){
    var vetor = []
    while (vetor.length < 6){
        var aleatorio = Math.floor(Math.random()*60+1)

        if (vetor.includes(aleatorio)){
            continue
        }{
            vetor.push(aleatorio)
        }
    }
    return vetor
}


Agora, nossa função gera números aleatórios sem repetições. Porém, uma pergunta veio à mente. Se pedirmos para gerar mais números aleatórios, quantas "repetições inúteis" teremos feito? Chegamos então a uma variante do problema:

function gerarAleatorios(){
    var vetor = []
    var geracoes = []
    while (vetor.length < 6){
        var aleatorio = Math.floor(Math.random()*60+1)
        geracoes.push(aleatorio)
        if (vetor.includes(aleatorio)){
            continue
        }{
            vetor.push(aleatorio)
        }
    }
    console.log("Gerações:", geracoes)
    console.log("Finais:", vetor)
}

Com isso, podemos, por exemplo, pedir para gerar 50 números aleatórios, obtendo o seguinte resultado de que para gerar 50 números aleatórios por esta abordagem, tivemos de gerar 85 números. 35 repetições são completamente inúteis. Este é um grande problema da computação que motiva uma área extremamente nobre conhecida como otimização, a qual visa melhorar a performance dos algoritmos e consequemente aproveitar melhor os recursos computacionais disponíveis, reduzindo desperdícios.

Redução de desperdícios que está completamente alinhada ao conceito de TI VERDE e faz parte da agenda de Objetivos Sustentáveis das Nações Unidas (https://brasil.un.org/pt-br/sdgs).

 *Consumo e produção responsáveis*
 *Ação contra a mudança global do clima*

Portanto, o objetivo deste trabalho foi desenvolver uma nova versão deste algoritmo que desperdice menos recursos computacionais que o aqui mostrado. Eu devia provar que o meu algoritmo é melhor e informar, em termos percentuais, quanto tempo menos o algoritmo levou para processar e entregar o resultado.
