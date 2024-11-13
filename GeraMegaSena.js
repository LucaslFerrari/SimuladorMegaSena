function gerarNumerosAleatorios() {
    const numeros = new Set();
  
    while (numeros.size < 6) {
      const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
      numeros.add(numeroAleatorio);
    }
  
    return Array.from(numeros).sort((a, b) => a - b); // Ordena os números em ordem crescente
  }
  
  function gerarMegaSena() {
    const numeros = gerarNumerosAleatorios();
    document.getElementById('resultado').textContent = `Números sorteados: ${numeros.join(', ')}`;
  }
  