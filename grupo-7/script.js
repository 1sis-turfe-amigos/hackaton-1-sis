let voltas = 0;

let cavalos = [
    {
        nome: "Trovoada",
        tempos: []
    },

    {
        nome: "Relâmpago",
        tempos: []
    },

    {
        nome: "Tempestade",
        tempos: []
    },

    {
        nome: "Tsunami",
        tempos: []
    },

    {
        nome: "Ciclone",
        tempos: []
    }
];

const corpoTabela = document.getElementById("corpoTabela");
const tituloVolta = document.getElementById("tituloVolta");
const podio = document.getElementById("podio");
const btnIniciar = document.getElementById("btnIniciar");

function mostrarTabela() {

    tituloVolta.innerHTML = `Volta ${voltas} / 7`;

    corpoTabela.innerHTML = "";

    for (let i = 0; i < cavalos.length; i++) {

        let linha = `
            <tr>
                <td>${cavalos[i].nome}</td>
        `;

        let total = 0;

        for (let v = 0; v < 7; v++) {

            let tempo = cavalos[i].tempos[v];

            if (tempo != undefined) {

                linha += `
                    <td>
                        ${tempo.toFixed(1)}s
                    </td>
                `;

                total += tempo;

            } else {

                linha += `
                    <td>
                        --
                    </td>
                `;
            }
        }

        linha += `
                <td>
                    ${total.toFixed(1)}s
                </td>
            </tr>
        `;

        corpoTabela.innerHTML += linha;
    }
}

function volta() {

    if (voltas >= 7) {
        return;
    }

    voltas++;

    for (let i = 0; i < cavalos.length; i++) {

        let tempo = Math.random() * 2 + 7;

        cavalos[i].tempos.push(tempo);
    }

    mostrarTabela();

    if (voltas == 7) {

        mostrarPodio();

        btnIniciar.disabled = true;
        btnIniciar.innerHTML = "Corrida Finalizada";
    }
}

function mostrarPodio() {

    let ranking = [];

    for (let i = 0; i < cavalos.length; i++) {

        let total = 0;

        for (let v = 0; v < cavalos[i].tempos.length; v++) {

            total += cavalos[i].tempos[v];
        }

        ranking.push({
            nome: cavalos[i].nome,
            total: total
        });
    }

    ranking.sort((a, b) => a.total - b.total);

    podio.innerHTML = `
    
        <h2>🏆 Pódio</h2>

        <ol class="lista-podio">

            <li class="item-podio">
                🥇 ${ranking[0].nome} - ${ranking[0].total.toFixed(1)}s
            </li>

            <li class="item-podio">
                🥈 ${ranking[1].nome} - ${ranking[1].total.toFixed(1)}s
            </li>

            <li class="item-podio">
                🥉 ${ranking[2].nome} - ${ranking[2].total.toFixed(1)}s
            </li>

        </ol>
    `;
}

function reiniciar() {

    voltas = 0;

    for (let i = 0; i < cavalos.length; i++) {

        cavalos[i].tempos = [];
    }

    podio.innerHTML = "";

    btnIniciar.disabled = false;
    btnIniciar.innerHTML = "Iniciar Volta";

    mostrarTabela();
}

mostrarTabela();