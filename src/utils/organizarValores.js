function validarEntradas(valor, origem, destino) {

    const validar = [
        (!origem || !destino),
        (origem === destino),
        (origem.length !== 3 || destino.length !== 3),
        (valor <= 0),
    ]
    const [foremNulas, iguais, tem3caracteres, iguaisZero] = validar;

    if (foremNulas) return {
        verificar: false,
        mensagem: 'As moedas de origem e destino não podem ser nulas ou indefinidas'
    };

    if (iguais) return {
        verificar: false,
        mensagem: 'A moeda de origem e a moeda de destino não podem ser iguais'
    };

    if (tem3caracteres) return {
        verificar: false,
        mensagem: 'As moedas devem ter exatamente 3 caracteres'
    };

    if (iguaisZero) return {
        verificar: false,
        mensagem: 'O valor deve ser maior que zero'
    };

    return true;
}

function formatarValor(valor) {
    return valor.toFixed(2);
}

export { validarEntradas, formatarValor };
