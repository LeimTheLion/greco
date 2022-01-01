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

let domande = ["βρίσκομαι", "πλένομαι", "εργάζομαι", "χαίρομαι", "ντρέπομαι", "κουράζομαι", "λούζομαι", "χάνομαι", "θυμάμαι", "κοιμάμαι", "βαριέμαι", "παραπονιέμαι", "κρατιέμαι", "διηγούμαι", "συγκινούμαι", "ικανοποιούμαι"];
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
        risposte.push(rispostaData[0].value.toUpperCase().trim());
        risposte.push(rispostaData[1].value.toUpperCase().trim());
        risposte.push(rispostaData[2].value.toUpperCase().trim());
        risposte.push(rispostaData[3].value.toUpperCase().trim());
        risposte.push(rispostaData[4].value.toUpperCase().trim());
        risposte.push(rispostaData[5].value.toUpperCase().trim());
        risposte.push(rispostaData[6].value.toUpperCase().trim());
        risposte.push(rispostaData[7].value.toUpperCase().trim());
        risposte.push(rispostaData[8].value.toUpperCase().trim());
        risposte.push(rispostaData[9].value.toUpperCase().trim());
        risposte.push(rispostaData[10].value.toUpperCase().trim());
        risposte.push(rispostaData[11].value.toUpperCase().trim());
        risposte.push(rispostaData[12].value.toUpperCase().trim());
        risposte.push(rispostaData[13].value.toUpperCase().trim());
        risposte.push(rispostaData[14].value.toUpperCase().trim());
        risposte.push(rispostaData[15].value.toUpperCase().trim());
        function controlla() {
            let v1 = verbi.indexOf("βρίσκομαι");
            let v2 = verbi.indexOf("πλένομαι");
            let v3 = verbi.indexOf("εργάζομαι");
            let v4 = verbi.indexOf("χαίρομαι");
            let v5 = verbi.indexOf("ντρέπομαι");
            let v6 = verbi.indexOf("κουράζομαι");
            let v7 = verbi.indexOf("λούζομαι");
            let v8 = verbi.indexOf("χάνομαι");
            let v9 = verbi.indexOf("θυμάμαι");
            let v10 = verbi.indexOf("κοιμάμαι");
            let v11 = verbi.indexOf("βαριέμαι");
            let v12 = verbi.indexOf("παραπονιέμαι");
            let v13 = verbi.indexOf("κρατιέμαι");
            let v14 = verbi.indexOf("διηγούμαι");
            let v15 = verbi.indexOf("συγκινούμαι");
            let v16 = verbi.indexOf("ικανοποιούμαι");

            let g = 0;
            if (risposte.includes("βρεθήκατε".toUpperCase().trim()) == true) {
                let r1 = risposte.indexOf("βρεθήκατε".toUpperCase().trim());
                if (v1 == r1) {
                    g++;
                    rispostaData[r1].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("βρεθήκατε".toUpperCase().trim()) == false) {
                rispostaData[v1].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("πλυθήκατε".toUpperCase().trim()) == true) {
                let r2 = risposte.indexOf("πλυθήκατε".toUpperCase().trim());
                if (v2 == r2) {
                    g++;
                    rispostaData[r2].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("πλυθήκατε".toUpperCase().trim()) == false) {
                rispostaData[v2].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("εργαστήκατε".toUpperCase().trim()) == true) {
                let r3 = risposte.indexOf("εργαστήκατε".toUpperCase().trim());
                if (v3 == r3) {
                    g++;
                    rispostaData[r3].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("εργαστήκατε".toUpperCase().trim()) == false) {
                rispostaData[v3].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("χαρήκατε".toUpperCase().trim()) == true) {
                let r4 = risposte.indexOf("χαρήκατε".toUpperCase().trim());
                if (v4 == r4) {
                    g++;
                    rispostaData[r4].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("χαρήκατε".toUpperCase().trim()) == false) {
                rispostaData[v4].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("ντραπήκατε".toUpperCase().trim()) == true) {
                let r5 = risposte.indexOf("ντραπήκατε".toUpperCase().trim());
                if (v5 == r5) {
                    g++;
                    rispostaData[r5].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("ντραπήκατε".toUpperCase().trim()) == false) {
                rispostaData[v5].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("κουραστήκατε".toUpperCase().trim()) == true) {
                let r6 = risposte.indexOf("κουραστήκατε".toUpperCase().trim());
                if (v6 == r6) {
                    g++;
                    rispostaData[r6].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("κουραστήκατε".toUpperCase().trim()) == false) {
                rispostaData[v6].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("λουστήκατε".toUpperCase().trim()) == true) {
                let r7 = risposte.indexOf("λουστήκατε".toUpperCase().trim());
                if (v7 == r7) {
                    g++;
                    rispostaData[r7].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("λουστήκατε".toUpperCase().trim()) == false) {
                rispostaData[v7].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("χαθήκατε".toUpperCase().trim()) == true) {
                let r8 = risposte.indexOf("χαθήκατε".toUpperCase().trim());
                if (v8 == r8) {
                    g++;
                    rispostaData[r8].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("χαθήκατε".toUpperCase().trim()) == false) {
                rispostaData[v8].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("θυμηθήκατε".toUpperCase().trim()) == true) {
                let r9 = risposte.indexOf("θυμηθήκατε".toUpperCase().trim());
                if (v9 == r9) {
                    g++;
                    rispostaData[r9].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("θυμηθήκατε".toUpperCase().trim()) == false) {
                rispostaData[v9].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("κοιμηθήκατε".toUpperCase().trim()) == true) {
                let r10 = risposte.indexOf("κοιμηθήκατε".toUpperCase().trim());
                if (v10 == r10) {
                    g++;
                    rispostaData[r10].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("κοιμηθήκατε".toUpperCase().trim()) == false) {
                rispostaData[v10].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("βαρεθήκατε".toUpperCase().trim()) == true) {
                let r11 = risposte.indexOf("βαρεθήκατε".toUpperCase().trim());
                if (v11 == r11) {
                    g++;
                    rispostaData[r11].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("βαρεθήκατε".toUpperCase().trim()) == false) {
                rispostaData[v11].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("παραπονεθήκατε".toUpperCase().trim()) == true) {
                let r12 = risposte.indexOf("παραπονεθήκατε".toUpperCase().trim());
                if (v12 == r12) {
                    g++;
                    rispostaData[r12].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("παραπονεθήκατε".toUpperCase().trim()) == false) {
                rispostaData[v12].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("κρατηθήκατε".toUpperCase().trim()) == true) {
                let r13 = risposte.indexOf("κρατηθήκατε".toUpperCase().trim());
                if (v13 == r13) {
                    g++;
                    rispostaData[r13].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("κρατηθήκατε".toUpperCase().trim()) == false) {
                rispostaData[v13].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("διηγηθήκατε".toUpperCase().trim()) == true) {
                let r14 = risposte.indexOf("διηγηθήκατε".toUpperCase().trim());
                if (v14 == r14) {
                    g++;
                    rispostaData[r14].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("διηγηθήκατε".toUpperCase().trim()) == false) {
                rispostaData[v14].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("συγκινηθήκατε".toUpperCase().trim()) == true) {
                let r15 = risposte.indexOf("συγκινηθήκατε".toUpperCase().trim());
                if (v15 == r15) {
                    g++;
                    rispostaData[r15].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("συγκινηθήκατε".toUpperCase().trim()) == false) {
                rispostaData[v15].style.backgroundColor = "#D11212";
            }
            if (risposte.includes("ικανοποιηθήκατε".toUpperCase().trim()) == true) {
                let r16 = risposte.indexOf("ικανοποιηθήκατε".toUpperCase().trim());
                if (v16 == r16) {
                    g++;
                    rispostaData[r16].style.backgroundColor = "#46EB1F";
                }
            }
            else if (risposte.includes("ικανοποιηθήκατε".toUpperCase().trim()) == false) {
                rispostaData[v16].style.backgroundColor = "#D11212";
            }
            voti.textContent = "Risposte corrette: " + g + " / 16";
        }
        controlla();
    }
}
global();