function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // hora = 11

    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`

    if (hora >= 0 && hora < 12) {
        //* BOM DIA!
        img.src = 'img/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //* BOA TARDE!
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'

    } else if (hora >= 18){
        //* BOA NOITE!
        img.src = 'img/noite.jpg'
        document.body.style.background = '#515154'
    }
}
