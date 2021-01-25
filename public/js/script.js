const socket = io()


let colocacaoNome = ['ge_01', 'ge_02', 'ge_03', 'ge_04', 'ge_05', 'ge_06', 'ge_07', 'ge_08', 'ge_09', 'ge_10',
    'ge_11', 'ge_12', 'ge_13', 'ge_14', 'ge_15', 'ge_16', 'ge_17', 'ge_18', 'ge_19', 'ge_20',
    'ge_21', 'ge_22', 'ge_23', 'ge_24', 'ge_25', 'ge_26', 'ge_27', 'ge_28', 'ge_29', 'ge_30',
    'ge_31', 'ge_32', 'ge_33', 'ge_34', 'ge_35', 'ge_36', 'ge_37', 'ge_38', 'ge_39', 'ge_40',]

let var_colocacaoNome = ['nome_01', 'nome_02', 'nome_03', 'nome_04', 'nome_05', 'nome_06', 'nome_07', 'nome_08',
    'nome_09', 'nome_10', 'nome_11', 'nome_12', 'nome_13', 'nome_14', 'nome_15', 'nome_16', 'nome_17', 'nome_18', 'nome_19',
    'nome_20', 'nome_21', 'nome_22', 'nome_23', 'nome_24', 'nome_25', 'nome_26', 'nome_27', 'nome_28', 'nome_29', 'nome_30',
    'nome_31', 'nome_32', 'nome_33', 'nome_34', 'nome_35', 'nome_36', 'nome_37', 'nome_38', 'nome_39', 'nome_40',]

let contagem_posicao = []
let troca = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]


window.onload = function () {
    ColocacaoNome()
    function ColocacaoNome() {
        for (let i = 0; i < 40; i++) {
            contagem_posicao.push(i + 1)
            window.document.getElementById(colocacaoNome[i]).innerHTML = contagem_posicao[i] + "º -"

            if (troca[i] == 0) {
                socket.on("connect", function () {
                    $("#" + var_colocacaoNome[i]).append(socket.id)
                })
            }
            troca[i] = 1
            break

        }
    }
}


/*else {
                socket.on('msg', function(user){
                    $('#'+ var_colocacaoNome[i]).append(user)
                })
            }

            */
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