const header = document.querySelector('header');
header.onclick = () => {
    window.open("../../index.html", "_self");
}
let esercizi = document.querySelector('.esercizi');
let inserisci = document.querySelector('.inserisci');
let scegli;
let lessico = [];
let voti = document.createElement('p');
voti.textContent = "Risposte corrette: 0 / 16";
let voti0 = document.querySelector('.voti');
voti0.appendChild(voti);

let domande = ["il certificato", "il postino", "il mittente", "il destinatario", "la busta", "lo sciopero", "il passaporto", "la bolletta", "g1", "g1", "g1", "g1", "g1", "g1", "g1", "g1"];

function randomize() {
    let x = Math.floor((Math.random() * domande.length));
    let uno1 = document.createElement('p');
    uno1.textContent = domande[x];
    esercizi.appendChild(uno1);
    lessico.push(domande[x]);
    domande.splice(x, 1);
}
function global() {
    for (let q = 16; q > 0; q--) {
        if (q > 0) {
            randomize();
            scegli = document.createElement('select');
            scegli.classList.add('select');
            inserisci.appendChild(scegli);
                    }
    }
    let l1 = lessico.indexOf("il certificato");
    let l2 = lessico.indexOf("il postino");
    let l3 = lessico.indexOf("il mittente");
    let l4 = lessico.indexOf("il destinatario");
    let l5 = lessico.indexOf("la busta");
    let l6 = lessico.indexOf("lo sciopero");
    let l7 = lessico.indexOf("il passaporto");
    let l8 = lessico.indexOf("la bolletta");
    let l9 = lessico.indexOf("g1");
    let l10 = lessico.indexOf("g1");
    let l11 = lessico.indexOf("g1");
    let l12 = lessico.indexOf("g1");
    let l13 = lessico.indexOf("g1");
    let l14 = lessico.indexOf("g1");
    let l15 = lessico.indexOf("g1");
    let l16 = lessico.indexOf("g1");
    
    let risposte = [];
    let rispostaData = document.querySelectorAll('select');
    let r2 = ["the mailman", "yuubinya", "le facteur"];
    let r2a = rispostaData[l2];
    let risp0 = document.createElement('option');
            risp0.textContent = "";
            r2a.appendChild(risp0);
            let risp1 = document.createElement('option');
            risp1.textContent = "MODIFICALO COLLA ROBA CASUALE";
            r2a.appendChild(risp1);
            let risp2 = document.createElement('option');
            risp2.textContent = "MODIFICALO COLLA ROBA";
            r2a.appendChild(risp2);
            let risp3 = document.createElement('option');
            risp3.textContent = "MODIFICALO";
            r2a.appendChild(risp3);
}

global()