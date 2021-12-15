const header = document.querySelector('header');
header.onclick = () => {
    window.open("https://leimthelion.github.io/greco/", "_self");
}
let esercizi = document.querySelector('.esercizi');
let inserisci = document.querySelector('.inserisci');
let scegli;
let lessico = [];
let voti = document.createElement('p');
voti.textContent = "Risposte corrette: 0 / 16";
let voti0 = document.querySelector('.voti');
voti0.appendChild(voti);

let domande = ["il certificato", "il postino", "il mittente", "il destinatario", "la busta", "lo sciopero", "il passaporto", "la bolletta", "η πιστωτική κάρτα", "ο φόρος", "το χαρτόσημο", "τα χαρτιά", "η προπληρωμένη κάρτα", "το συνάλλαγμα", "το γραμματόσημο", "το γραμματοκιβώτιο"];

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
    let l9 = lessico.indexOf("η πιστωτική κάρτα");
    let l10 = lessico.indexOf("ο φόρος");
    let l11 = lessico.indexOf("το χαρτόσημο");
    let l12 = lessico.indexOf("τα χαρτιά");
    let l13 = lessico.indexOf("η προπληρωμένη κάρτα");
    let l14 = lessico.indexOf("το συνάλλαγμα");
    let l15 = lessico.indexOf("το γραμματόσημο");
    let l16 = lessico.indexOf("το γραμματοκιβώτιο");

    let rispostaData = document.querySelectorAll('select');
    let r2a = rispostaData[l2];
    rispostaVuota(r2a);
    function rispostaVuota(r2a) {
        let risp0 = document.createElement('option');
        risp0.textContent = "";
        r2a.appendChild(risp0);
    }
    let r1a = rispostaData[l1];
    rispostaVuota(r1a);
    let r3a = rispostaData[l3];
    rispostaVuota(r3a);
    let r4a = rispostaData[l4];
    rispostaVuota(r4a);
    let r5a = rispostaData[l5];
    rispostaVuota(r5a);
    let r6a = rispostaData[l6];
    rispostaVuota(r6a);
    let r7a = rispostaData[l7];
    rispostaVuota(r7a);
    let r8a = rispostaData[l8];
    rispostaVuota(r8a);
    let r9a = rispostaData[l9];
    rispostaVuota(r9a);
    let r10a = rispostaData[l10];
    rispostaVuota(r10a);
    let r11a = rispostaData[l11];
    rispostaVuota(r11a);
    let r12a = rispostaData[l12];
    rispostaVuota(r12a);
    let r13a = rispostaData[l13];
    rispostaVuota(r13a);
    let r14a = rispostaData[l14];
    rispostaVuota(r14a);
    let r15a = rispostaData[l15];
    rispostaVuota(r15a);
    let r16a = rispostaData[l16];
    rispostaVuota(r16a);

    let r2 = ["ο ταχυδρόμος", "ο τεμπέλης", "ο εφοριακός"];
    function risposta1(r2, r2a) {
        let x3 = Math.floor((Math.random() * 3));
        let risp1 = document.createElement('option');
        risp1.textContent = (r2)[x3];
        r2.splice(x3, 1);
        r2a.appendChild(risp1);
    }
    function risposta2(r2, r2a) {
        let x2 = Math.floor((Math.random() * 2));
        let risp2 = document.createElement('option');
        risp2.textContent = r2[x2];
        r2.splice(x2, 1);
        r2a.appendChild(risp2);
    }
    function risposta3(r2, r2a) {
        let x1 = Math.floor(Math.random());
        let risp3 = document.createElement('option');
        risp3.textContent = r2[x1];
        r2.splice(x1, 1);
        r2a.appendChild(risp3);
    }
    risposta1(r2, r2a);
    risposta2(r2, r2a);
    risposta3(r2, r2a);
    let r1 = ["το πιστοποιητικό", "το έντυπο", "το χαρτόσημο"];
    risposta1(r1, r1a);
    risposta2(r1, r1a);
    risposta3(r1, r1a);
    let r3 = ["ο αποστολέας", "ο δήμαρχος", "ο ταμίας"];
    risposta1(r3, r3a);
    risposta2(r3, r3a);
    risposta3(r3, r3a);
    let r4 = ["ο παραλήπτης", "το επιτόκιο", "ο αφέντης"];
    risposta1(r4, r4a);
    risposta2(r4, r4a);
    risposta3(r4, r4a);
    let r5 = ["ο φάκελος", "το φακελάκι", "η απόδειξη"];
    risposta1(r5, r5a);
    risposta2(r5, r5a);
    risposta3(r5, r5a);
    let r6 = ["η απεργία", "η ανάληψη", "η κατάθεση"];
    risposta1(r6, r6a);
    risposta2(r6, r6a);
    risposta3(r6, r6a);
    let r7 = ["το διαβατήριο", "ο λογαριασμός", "το βιβλιάριο"];
    risposta1(r7, r7a);
    risposta2(r7, r7a);
    risposta3(r7, r7a);
    let r8 = ["ο λογαριασμός", "ο υπάλληλος ", "το ειδοποιητήριο"];
    risposta1(r8, r8a);
    risposta2(r8, r8a);
    risposta3(r8, r8a);
    let r9 = ["la carta di credito", "l'autorizzazione", "la cartolina"];
    risposta1(r9, r9a);
    risposta2(r9, r9a);
    risposta3(r9, r9a);
    let r10 = ["la tassa", "la ricevuta", "la moneta"];
    risposta1(r10, r10a);
    risposta2(r10, r10a);
    risposta3(r10, r10a);
    let r11 = ["la marca da bollo", "il francobollo", "il timbro"];
    risposta1(r11, r11a);
    risposta2(r11, r11a);
    risposta3(r11, r11a);
    let r12 = ["i documenti", "i contanti", "la buca delle lettere"];
    risposta1(r12, r12a);
    risposta2(r12, r12a);
    risposta3(r12, r12a);
    let r13 = ["la carta prepagata", "la carta di identità", "la fiiale"];
    risposta1(r13, r13a);
    risposta2(r13, r13a);
    risposta3(r13, r13a);
    let r14 = ["il cambio", "il mutuo", "il pacco"];
    risposta1(r14, r14a);
    risposta2(r14, r14a);
    risposta3(r14, r14a);
    let r15 = ["il francobollo", "il codice postale", "il tasso di interesse"];
    risposta1(r15, r15a);
    risposta2(r15, r15a);
    risposta3(r15, r15a);
    let r16 = ["la buca delle lettere", "la dichiarazione dei redditi", "la lettera"];
    risposta1(r16, r16a);
    risposta2(r16, r16a);
    risposta3(r16, r16a);

    let controlla = document.querySelector('button');
    controlla.onclick = () => {
        let g = 0;
        if (r1a.value == "το πιστοποιητικό") {
            g++;
            r1a.style.backgroundColor = "#46EB1F";
        }
        else
            r1a.style.backgroundColor = "#D11212";
        if (r2a.value == "ο ταχυδρόμος") {
            g++;
            r2a.style.backgroundColor = "#46EB1F";
        }
        else
            r2a.style.backgroundColor = "#D11212";
        if (r3a.value == "ο αποστολέας") {
            g++;
            r3a.style.backgroundColor = "#46EB1F";
        }
        else
            r3a.style.backgroundColor = "#D11212";
        if (r4a.value == "ο παραλήπτης") {
            g++;
            r4a.style.backgroundColor = "#46EB1F";
        }
        else
            r4a.style.backgroundColor = "#D11212";
        if (r5a.value == "ο φάκελος") {
            g++;
            r5a.style.backgroundColor = "#46EB1F";
        }
        else
            r5a.style.backgroundColor = "#D11212";
        if (r6a.value == "η απεργία") {
            g++;
            r6a.style.backgroundColor = "#46EB1F";
        }
        else
            r6a.style.backgroundColor = "#D11212";
        if (r7a.value == "το διαβατήριο") {
            g++;
            r7a.style.backgroundColor = "#46EB1F";
        }
        else
            r7a.style.backgroundColor = "#D11212";
        if (r8a.value == "ο λογαριασμός") {
            g++;
            r8a.style.backgroundColor = "#46EB1F";
        }
        else
            r8a.style.backgroundColor = "#D11212";
        if (r9a.value == "la carta di credito") {
            g++;
            r9a.style.backgroundColor = "#46EB1F";
        }
        else
            r9a.style.backgroundColor = "#D11212";
        if (r10a.value == "la tassa") {
            g++;
            r10a.style.backgroundColor = "#46EB1F";
        }
        else
            r10a.style.backgroundColor = "#D11212";
        if (r11a.value == "la marca da bollo") {
            g++;
            r11a.style.backgroundColor = "#46EB1F";
        }
        else
            r11a.style.backgroundColor = "#D11212";
        if (r12a.value == "i documenti") {
            g++;
            r12a.style.backgroundColor = "#46EB1F";
        }
        else
            r12a.style.backgroundColor = "#D11212";
        if (r13a.value == "la carta prepagata") {
            g++;
            r13a.style.backgroundColor = "#46EB1F";
        }
        else
            r13a.style.backgroundColor = "#D11212";
        if (r14a.value == "il cambio") {
            g++;
            r14a.style.backgroundColor = "#46EB1F";
        }
        else
            r14a.style.backgroundColor = "#D11212";
        if (r15a.value == "il francobollo") {
            g++;
            r15a.style.backgroundColor = "#46EB1F";
        }
        else
            r15a.style.backgroundColor = "#D11212";
        if (r16a.value == "la buca delle lettere") {
            g++;
            r16a.style.backgroundColor = "#46EB1F";
        }
        else
            r16a.style.backgroundColor = "#D11212";
        voti.textContent = "Risposte corrette: " + g + " / 16";
    }
}
global()