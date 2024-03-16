let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true 
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor Invalído ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let mais = 0
        
        for (let c = 0; c < valores.length; c++) {
            mais += valores[c]
        }

        let media = mais / tot

        for (let pos in valores) {
            if (valores[pos] > maior)
                maior = valores[pos]

             if (valores[pos] < menor)
                menor = valores[pos]
        }
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p><br>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p><br>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p><br>`
        res.innerHTML += `<p>A soma desses valores é ${mais}</p><br>`
        res.innerHTML += `<p>A media é ${media}</p>`
    }
}