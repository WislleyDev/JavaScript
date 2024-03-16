function Contar() {
    let inicio = document.getElementById('num1')
    let fim = document.getElementById('num2')
    let passo = document.getElementById('num3')
    let resultado = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = "Impossível contar!"
        // alert('[ERROR] Faltam dados!')
    } else {
        resultado.innerHTML = "Contando: <br>"
        let ini = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerande PASSO 1')
            p = 1
        }
        if (ini <= f) {
            //* Contagem crescente
            for (let c = ini; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
        } else {
            //* Contagem decrescente
            for (let c = ini; c >= f; c -= p) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}