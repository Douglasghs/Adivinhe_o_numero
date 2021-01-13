const socket = io()


let colocacaoNome = ['ge_01', 'ge_02', 'ge_03', 'ge_04', 'ge_05', 'ge_06', 'ge_07', 'ge_08', 'ge_09', 'ge_10',
    'ge_11', 'ge_12', 'ge_13', 'ge_14', 'ge_15', 'ge_16', 'ge_17', 'ge_18', 'ge_19', 'ge_20',
    'ge_21', 'ge_22', 'ge_23', 'ge_24', 'ge_25', 'ge_26', 'ge_27', 'ge_28', 'ge_29', 'ge_30',
    'ge_31', 'ge_32', 'ge_33', 'ge_34', 'ge_35', 'ge_36', 'ge_37', 'ge_38', 'ge_39', 'ge_40',]

let var_colocacaoNome = []

window.onload = function(){
    ColocacaoNome()
    function ColocacaoNome() {
        for (let i = 0; i < 40; i++) {
            var_colocacaoNome.push(i + 1)
            window.document.getElementById(colocacaoNome[i]).innerHTML = var_colocacaoNome[i] +"º -"

           
        }
    }
}

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