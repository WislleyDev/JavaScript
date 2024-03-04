var agora = new Date()
var diaSem = agora.getDay()
/* 
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
 */

    // console.log(diaSem)
    switch (diaSem) {

        // Domingo

        case 0:
            console.log('Domingo')
            break

        // Segunda

        case 1:
        console.log('Segunda')
        break

        // Terça

        case 2:
        console.log('Terça')
        break

        // Quarta

        case 3:
        console.log('Quarta')
        break

        // Quinta

        case 4:
        console.log('Quinta')
        break

        // Sexta

        case 5:
        console.log('Sexta')
        break

        // Sábado

        case 6:
        console.log('Sábado')
        break

        // ERRO

        default:
            console.log('[ERROR] Dia invalido!]:(')
    }