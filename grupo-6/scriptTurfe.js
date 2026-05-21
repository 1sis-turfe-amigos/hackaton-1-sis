
let vt_cavalo1 = [];
let vt_cavalo2 = [];
let vt_cavalo3 = [];
let vt_cavalo4 = [];
let vt_cavalo5 = [];

let vt_acm = [];

let qtd_fichasatual = 100;




function apostar() {
    let valor = ipt_valor.value;
    // PRECISA MOSTRAR A QTD DE FICHAS QTD_FICHASATUAL NA DIV DE APOSTA

    if ( valor <= 0 || valor > qtd_fichasatual) {
        alert('Quantidade de fichas indisponível')
    }
    else {

    }

}

function jogar() {

    let cavalo = ipt_cavalo.value;
    let valor = ipt_valor.value;

    let cavalo1 = Number(0);
    let cavalo2 = Number(0);
    let cavalo3 = Number(0);
    let cavalo4 = Number(0);
    let cavalo5 = Number(0);

    let acm1 = Number(0);
    let acm2 = Number(0);
    let acm3 = Number(0);
    let acm4 = Number(0);
    let acm5 = Number(0);

    let primeiro = 9999;
    let segundo = 9999;
    let terceiro = 9999;

    let cavaloPrimeiro = 0;
    let cavaloSegundo = 0;
    let cavaloTerceiro = 0;

    let i = 0; 

        let intervalo = setInterval(() => {
            
            
            cavalo1 = Number((Math.random() * 2 + 7).toFixed(1));
        cavalo2 = Number((Math.random() * 2 + 7).toFixed(1));
        cavalo3 = Number((Math.random() * 2 + 7).toFixed(1));
        cavalo4 = Number((Math.random() * 2 + 7).toFixed(1));
        cavalo5 = Number((Math.random() * 2 + 7).toFixed(1));
        
        vt_cavalo1.push(cavalo1);
        vt_cavalo2.push(cavalo2);
        vt_cavalo3.push(cavalo3);
        vt_cavalo4.push(cavalo4);
        vt_cavalo5.push(cavalo5);
        
        console.log(`Cavalo 1: ${cavalo1} Cavalo 2: ${cavalo2} Cavalo 3: ${cavalo3} Cavalo 4: ${cavalo4} Cavalo 4: ${cavalo4} Cavalo 5: ${cavalo5}`)

        acm1 += cavalo1;
        acm2 += cavalo2;
        acm3 += cavalo3;
        acm4 += cavalo4;
        acm5 += cavalo5;

        div_msg.innerHTML = `<b> Volta: ${i + 1} </b> <br><br>
        Cavalo 1 – ${cavalo1} – ${acm1.toFixed(1)} <br>
        Cavalo 2 – ${cavalo2} – ${acm2.toFixed(1)} <br>
        Cavalo 3 – ${cavalo3} – ${acm3.toFixed(1)} <br>
        Cavalo 4 – ${cavalo4} – ${acm4.toFixed(1)} <br>
        Cavalo 5 – ${cavalo5} – ${acm5.toFixed(1)} <br><br>
        `

        i++;

        if (i >= 7) {
            clearInterval(intervalo)
        }

        
    }, 1700);
    setTimeout(() => {
        vt_acm.push(acm1);
        vt_acm.push(acm2);
        vt_acm.push(acm3);
        vt_acm.push(acm4);
        vt_acm.push(acm5);

        let ultimasVoltas = [
            vt_cavalo1[6],
            vt_cavalo2[6],
            vt_cavalo3[6],
            vt_cavalo4[6],
            vt_cavalo5[6]
        ];
        
        let ultimaVoltaPrimeiro = 9999;
        let ultimaVoltaSegundo = 9999;
        let ultimaVoltaTerceiro = 9999;
        
        for (let i = 0; i < vt_acm.length; i++) {

            let tempoAtual = vt_acm[i];
            let ultimaAtual = ultimasVoltas[i];
            
            if (
                tempoAtual < primeiro ||
                (
                    tempoAtual == primeiro &&
                    ultimaAtual < ultimaVoltaPrimeiro
                )
            ) {

                terceiro = segundo;
                cavaloTerceiro = cavaloSegundo;
                ultimaVoltaTerceiro = ultimaVoltaSegundo;
                
                segundo = primeiro;
                cavaloSegundo = cavaloPrimeiro;
                ultimaVoltaSegundo = ultimaVoltaPrimeiro;

                primeiro = tempoAtual;
                cavaloPrimeiro = i + 1;
                ultimaVoltaPrimeiro = ultimaAtual;
            }
            
            else if (
                tempoAtual < segundo ||
                (
                    tempoAtual == segundo &&
                    ultimaAtual < ultimaVoltaSegundo
                )
            ) {

                terceiro = segundo;
                cavaloTerceiro = cavaloSegundo;
                ultimaVoltaTerceiro = ultimaVoltaSegundo;
                
                segundo = tempoAtual;
                cavaloSegundo = i + 1;
                ultimaVoltaSegundo = ultimaAtual;
            }
            
            else if (
                tempoAtual < terceiro ||
                (
                    tempoAtual == terceiro &&
                    ultimaAtual < ultimaVoltaTerceiro
                )
            ) {

                terceiro = tempoAtual;
                cavaloTerceiro = i + 1;
                ultimaVoltaTerceiro = ultimaAtual;
            }
        }
        
        div_msg.innerHTML += `1º Lugar - Cavalo ${cavaloPrimeiro} com ${primeiro.toFixed(1)}s <br>
        2º Lugar - Cavalo ${cavaloSegundo} com ${segundo.toFixed(1)}s <br> 
        3º Lugar - Cavalo ${cavaloTerceiro} com ${terceiro.toFixed(1)}s <br>`
        if ( cavalo == cavaloPrimeiro) {
            if ( qtd_fichasatual == 0) {
                qtd_fichasatual += 5
            }
            qtd_fichasatual += valor * 150/100
            console.log(qtd_fichasatual)
            div_msg.innerHTML+=`<br> O Cavalo ${cavalo} foi campeão, você venceu sua aposta! Receba ${ valor * 50/100} fichas`
        }
        else {
            qtd_fichasatual -= valor 
            console.log(qtd_fichasatual)
            div_msg.innerHTML+=`O Cavalo ${cavalo} não foi o melhor dessa vez, você perdeu sua aposta, tente novamente...` 
        }
    }, 12000);
    ipt_cavalo.value=0;
    ipt_valor.value=''
}
    




function selecionar() {
    let cavalo = ipt_cavalo.value;

    if ( cavalo == 0 ) {
        alert('Selecione um Cavalo')
    }
    else {

    }


}