const socket = io()

// --------------------------------------------- programa  -------------------------------------------------

function EnviarPalpite() {
    let palpites = []
    let troca = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < 10; i++) {
        if (troca[i] == 0) {
            palpites.push(document.getElementById('inputavel').value)
            document.getElementById('inputavel').value = null

            let seguraPalpite = parseInt(document.getElementById('certoOUerrado').value)
            document.getElementById('certoOUerrado').value = seguraPalpite + ", " + palpites[i]

            troca[i] = 1

            break;
        }
    }
    for (let i = 0; i < 10; i++) {
        alert(palpites[i])
    }
}