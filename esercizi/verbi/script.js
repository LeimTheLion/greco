let esercizi = document.querySelector('.esercizi');
let inserisci = document.querySelector('.inserisci');
let scrivi;
let verbi = [];

let domande = ["είμαι", "έχω", "αγαπώ", "μπορώ", "θέλω", "ξέρω", "ακούω", "λέω", "τρώω", "κλαίω", "καίω", "ζω", "υπάρχω", "φταίω", "διαβάζω", "γράφω"];
function randomize() {
    let x = Math.floor((Math.random() * domande.length));
    let uno1 = document.createElement('p'); //  qui: aggiungili uno alla volta ad ESERCIZI!
    uno1.textContent = domande[x];
    esercizi.appendChild(uno1);
    verbi.push(domande[x]);
    domande.splice(x, 1);
}
function global() {
    for (let q = 16; q > 0; q--) {
        if (q > 0) {
            randomize();
            scrivi = document.createElement('input');
            scrivi.classList.add('input');
            inserisci.appendChild(scrivi);
        }
    }

    let controlla = document.querySelector('button');
    controlla.onclick = () => {
        let risposte = [];
        let rispostaData = document.querySelectorAll('input');
        risposte.push(rispostaData[0].value);
        risposte.push(rispostaData[1].value);
        risposte.push(rispostaData[2].value);
        risposte.push(rispostaData[3].value);
        risposte.push(rispostaData[4].value);
        risposte.push(rispostaData[5].value);
        risposte.push(rispostaData[6].value);
        risposte.push(rispostaData[7].value);
        risposte.push(rispostaData[8].value);
        risposte.push(rispostaData[9].value);
        risposte.push(rispostaData[10].value);
        risposte.push(rispostaData[11].value);
        risposte.push(rispostaData[12].value);
        risposte.push(rispostaData[13].value);
        risposte.push(rispostaData[14].value);
        risposte.push(rispostaData[15].value);
        function controlla() {
            let v1 = verbi.indexOf("είμαι");
            let v2 = verbi.indexOf("έχω");
            let v3 = verbi.indexOf("αγαπώ");
            let v4 = verbi.indexOf("μπορώ");
            let v5 = verbi.indexOf("θέλω");
            let v6 = verbi.indexOf("ξέρω");
            let v7 = verbi.indexOf("ακούω");
            let v8 = verbi.indexOf("λέω");
            let v9 = verbi.indexOf("τρώω");
            let v10 = verbi.indexOf("κλαίω");
            let v11 = verbi.indexOf("καίω");
            let v12 = verbi.indexOf("ζω");
            let v13 = verbi.indexOf("υπάρχω");
            let v14 = verbi.indexOf("φταίω");
            let v15 = verbi.indexOf("διαβάζω");
            let v16 = verbi.indexOf("γράφω");

            if (risposte.includes("ήμουν") == true) {
                let r1 = risposte.indexOf("ήμουν");
                if (v1 == r1) {
                    let giusto = document.querySelector('input');
                    giusto.style.backgroundColor = "green"; // COSÌ PERÒ, NATURALMENTE, "ILLUMINA" IL PRIMO...
                }
            }
            if (risposte.includes("είχα") == true) {
                let r2 = risposte.indexOf("είχα");
                if (v2 == r2) {
                    alert("Giusto! Ora però devi fare tutta la roba che esce il colore verde, ecc.")
                }
            }
            if (risposte.includes("αγαπούσα") == true) {
                let r3 = risposte.indexOf("αγαπούσα");
                if (v3 == r3) {
                    alert("Giusto! Ora però devi fare tutta la roba che esce il colore verde, ecc.")
                }
            }
            if (risposte.includes("μπορούσα") == true) {
                let r4 = risposte.indexOf("μπορούσα");
                if (v4 == r4) {
                    alert("Giusto! Ora però devi fare tutta la roba che esce il colore verde, ecc.")
                }
            }
            if (risposte.includes("ήθελα") == true) {
                let r5 = risposte.indexOf("ήθελα");
                if (v5 == r5) {
                    alert("Giusto! Ora però devi fare tutta la roba che esce il colore verde, ecc.")
                }
            }
            if (risposte.includes("ήξερα") == true) {
                let r6 = risposte.indexOf("ήξερα");
                if (v6 == r6) {
                    alert("Giusto! Ora però devi fare tutta la roba che esce il colore verde, ecc.")
                }
            }
            if (risposte.includes("άκουγα") == true) {
                let r7 = risposte.indexOf("άκουγα");
                if (v7 == r7) {
                    alert("Giusto! Ora però devi fare tutta la roba che esce il colore verde, ecc.")
                }
            }
            if (risposte.includes("έλεγα") == true) {
                let r8 = risposte.indexOf("έλεγα");
                if (v8 == r8) {
                    alert("Giusto! Ora però devi fare tutta la roba che esce il colore verde, ecc.")
                }
            }
            if (risposte.includes("έτρωγα") == true) {
                let r9 = risposte.indexOf("έτρωγα");
                if (v9 == r9) {
                    alert("Giusto! Ora però devi fare tutta la roba che esce il colore verde, ecc.")
                }
            }
            if (risposte.includes("έκλαιγα") == true) {
                let r10 = risposte.indexOf("έκλαιγα");
                if (v10 == r10) {
                    alert("Giusto! Ora però devi fare tutta la roba che esce il colore verde, ecc.")
                }
            }
            if (risposte.includes("έκαιγα") == true) {
                let r11 = risposte.indexOf("έκαιγα");
                if (v11 == r11) {
                    alert("Giusto! Ora però devi fare tutta la roba che esce il colore verde, ecc.")
                }
            }
            if (risposte.includes("ζούσα") == true) {
                let r12 = risposte.indexOf("ζούσα");
                if (v12 == r12) {
                    alert("Giusto! Ora però devi fare tutta la roba che esce il colore verde, ecc.")
                }
            }
            if (risposte.includes("υπήρχα") == true) {
                let r13 = risposte.indexOf("υπήρχα");
                if (v13 == r13) {
                    alert("Giusto! Ora però devi fare tutta la roba che esce il colore verde, ecc.")
                }
            }
            if (risposte.includes("έφταιγα") == true) {
                let r14 = risposte.indexOf("έφταιγα");
                if (v14 == r14) {
                    alert("Giusto! Ora però devi fare tutta la roba che esce il colore verde, ecc.")
                }
            }
            if (risposte.includes("διάβαζα") == true) {
                let r15 = risposte.indexOf("διάβαζα");
                if (v15 == r15) {
                    alert("Giusto! Ora però devi fare tutta la roba che esce il colore verde, ecc.")
                }
            }
            if (risposte.includes("έγραφα") == true) {
                let r16 = risposte.indexOf("έγραφα");
                if (v16 == r16) {
                    alert("Giusto! Ora però devi fare tutta la roba che esce il colore verde, ecc.")
                }
            }
        }
        controlla();
    }
}
global();