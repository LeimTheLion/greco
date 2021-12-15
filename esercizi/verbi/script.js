const header = document.querySelector('header');
header.onclick = () => {
    window.open("https://leimthelion.github.io/greco/", "_self");
}

let esercizi = document.querySelector('.esercizi');
let inserisci = document.querySelector('.inserisci');
let scrivi;
let verbi = [];
let voti = document.createElement('p');
voti.textContent = "Risposte corrette: 0 / 16";
let voti0 = document.querySelector('.voti');
voti0.appendChild(voti);

let domande = ["είμαι", "έχω", "αγαπώ", "μπορώ", "θέλω", "ξέρω", "ακούω", "λέω", "τρώω", "κλαίω", "καίω", "ζω", "υπάρχω", "φταίω", "διαβάζω", "γράφω"];
function randomize() {
    let x = Math.floor((Math.random() * domande.length));
    let uno1 = document.createElement('p');
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
        risposte.push(rispostaData[0].value.toUpperCase());
        risposte.push(rispostaData[1].value.toUpperCase());
        risposte.push(rispostaData[2].value.toUpperCase());
        risposte.push(rispostaData[3].value.toUpperCase());
        risposte.push(rispostaData[4].value.toUpperCase());
        risposte.push(rispostaData[5].value.toUpperCase());
        risposte.push(rispostaData[6].value.toUpperCase());
        risposte.push(rispostaData[7].value.toUpperCase());
        risposte.push(rispostaData[8].value.toUpperCase());
        risposte.push(rispostaData[9].value.toUpperCase());
        risposte.push(rispostaData[10].value.toUpperCase());
        risposte.push(rispostaData[11].value.toUpperCase());
        risposte.push(rispostaData[12].value.toUpperCase());
        risposte.push(rispostaData[13].value.toUpperCase());
        risposte.push(rispostaData[14].value.toUpperCase());
        risposte.push(rispostaData[15].value.toUpperCase());
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

            let g = 0;
            if (risposte.includes("Ήμουν".toUpperCase()) == true) {
                let r1 = risposte.indexOf("Ήμουν".toUpperCase());
                if (v1 == r1) {
                    g++;
                    rispostaData[r1].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("Ήμουν".toUpperCase()) == false) {
                rispostaData[v1].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("είχα".toUpperCase()) == true) {
                let r2 = risposte.indexOf("είχα".toUpperCase());
                if (v2 == r2) {
                    g++;
                    rispostaData[r2].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("είχα".toUpperCase()) == false) {
                rispostaData[v2].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("αγαπούσα".toUpperCase()) == true) {
                let r3 = risposte.indexOf("αγαπούσα".toUpperCase());
                if (v3 == r3) {
                    g++;
                    rispostaData[r3].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("αγαπούσα".toUpperCase()) == false) {
                rispostaData[v3].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("μπορούσα".toUpperCase()) == true) {
                let r4 = risposte.indexOf("μπορούσα".toUpperCase());
                if (v4 == r4) {
                    g++;
                    rispostaData[r4].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("μπορούσα".toUpperCase()) == false) {
                rispostaData[v4].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("ήθελα".toUpperCase()) == true) {
                let r5 = risposte.indexOf("ήθελα".toUpperCase());
                if (v5 == r5) {
                    g++;
                    rispostaData[r5].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("ήθελα".toUpperCase()) == false) {
                rispostaData[v5].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("ήξερα".toUpperCase()) == true) {
                let r6 = risposte.indexOf("ήξερα".toUpperCase());
                if (v6 == r6) {
                    g++;
                    rispostaData[r6].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("ήξερα".toUpperCase()) == false) {
                rispostaData[v6].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("άκουγα".toUpperCase()) == true) {
                let r7 = risposte.indexOf("άκουγα".toUpperCase());
                if (v7 == r7) {
                    g++;
                    rispostaData[r7].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("άκουγα".toUpperCase()) == false) {
                rispostaData[v7].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("έλεγα".toUpperCase()) == true) {
                let r8 = risposte.indexOf("έλεγα".toUpperCase());
                if (v8 == r8) {
                    g++;
                    rispostaData[r8].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("έλεγα".toUpperCase()) == false) {
                rispostaData[v8].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("έτρωγα".toUpperCase()) == true) {
                let r9 = risposte.indexOf("έτρωγα".toUpperCase());
                if (v9 == r9) {
                    g++;
                    rispostaData[r9].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("έτρωγα".toUpperCase()) == false) {
                rispostaData[v9].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("έκλαιγα".toUpperCase()) == true) {
                let r10 = risposte.indexOf("έκλαιγα".toUpperCase());
                if (v10 == r10) {
                    g++;
                    rispostaData[r10].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("έκλαιγα".toUpperCase()) == false) {
                rispostaData[v10].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("έκαιγα".toUpperCase()) == true) {
                let r11 = risposte.indexOf("έκαιγα".toUpperCase());
                if (v11 == r11) {
                    g++;
                    rispostaData[r11].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("έκαιγα".toUpperCase()) == false) {
                rispostaData[v11].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("ζούσα".toUpperCase()) == true) {
                let r12 = risposte.indexOf("ζούσα".toUpperCase());
                if (v12 == r12) {
                    g++;
                    rispostaData[r12].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("ζούσα".toUpperCase()) == false) {
                rispostaData[v12].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("υπήρχα".toUpperCase()) == true) {
                let r13 = risposte.indexOf("υπήρχα".toUpperCase());
                if (v13 == r13) {
                    g++;
                    rispostaData[r13].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("υπήρχα".toUpperCase()) == false) {
                rispostaData[v13].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("έφταιγα".toUpperCase()) == true) {
                let r14 = risposte.indexOf("έφταιγα".toUpperCase());
                if (v14 == r14) {
                    g++;
                    rispostaData[r14].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("έφταιγα".toUpperCase()) == false) {
                rispostaData[v14].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("διάβαζα".toUpperCase()) == true) {
                let r15 = risposte.indexOf("διάβαζα".toUpperCase());
                if (v15 == r15) {
                    g++;
                    rispostaData[r15].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("διάβαζα".toUpperCase()) == false) {
                rispostaData[v15].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("έγραφα".toUpperCase()) == true) {
                let r16 = risposte.indexOf("έγραφα".toUpperCase());
                if (v16 == r16) {
                    g++;
                    rispostaData[r16].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("έγραφα".toUpperCase()) == false) {
                rispostaData[v16].style.backgroundColor = "#D11212";
            }
            voti.textContent = "Risposte corrette: " + g + " / 16";
        }
        controlla();
    }
}
global();