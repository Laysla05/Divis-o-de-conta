// Função para calcular a proporção de cada pessoa com base na renda
function calcularProporcao(renda1, renda2, valorConta) {
    const totalRenda = renda1 + renda2;

    // Evitar divisão por zero
    if (totalRenda === 0) {
        return [0, 0];
    }

    // Calcular a proporção de cada pessoa em relação ao total da renda
    const proporcao1 = renda1 / totalRenda;
    const proporcao2 = renda2 / totalRenda;

    // Calcular o valor que cada pessoa deve pagar com base na proporção
    const valor1 = valorConta * proporcao1;
    const valor2 = valorConta * proporcao2;

    // Retornar os valores calculados para cada pessoa
    return [valor1, valor2];

}

function calcular() {
    //nome e renda da pessoa 1
    const nome1 = document.querySelector('[name="nome1"]').value;
    const renda1 = parseFloat(document.querySelector('[name="renda1"]').value);

    //nome e renda da pessoa 2
    const nome2 = document.querySelector('[name="nome2"]').value;
    const renda2 = parseFloat(document.querySelector('[name="renda2"]').value);

    //valor total da conta
    const valorConta = parseFloat(document.querySelector('[name="valor_conta"]').value);

    // Calcular os valores que cada pessoa deve pagar
    const [valor1, valor2] = calcularProporcao(renda1, renda2, valorConta);

    // Exibir os resultados na página
    const resultadoDiv = document.querySelector('.resultado');

    // Exibir resultados formatados com os nomes e os valores que cada pessoa deve pagar
    resultadoDiv.innerHTML = `
        <p>${nome1} deve pagar: R$ ${valor1.toFixed(2)}</p>
        <p>${nome2} deve a pagar: R$ ${valor2.toFixed(2)}</p>
    `;
     
    // Exibir o botão "Nova Conta" após o cálculo
    document.querySelector('#btnNovaConta').style.display = "inline-block";
}

    // Se o usuário confirmar
   function novaConta() {

        // Limpar nome e renda da pessoa 1
        document.querySelector('[name="nome1"]').value = "";
        document.querySelector('[name="renda1"]').value = "";

        // Limpar nome e renda da pessoa 2
        document.querySelector('[name="nome2"]').value = "";
        document.querySelector('[name="renda2"]').value = "";

        // Limpar valor da conta
        document.querySelector('[name="valor_conta"]').value = "";

        // Limpar os resultados exibidos na tela
        document.querySelector('.resultado').innerHTML = "";

        // Esconder o botão "Nova Conta" novamente
         document.querySelector('#btnNovaConta').style.display = "none";
    }
