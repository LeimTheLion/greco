const header = document.querySelector('header');
header.onclick = () => {
    window.open("../../index.html", "_self");
}
const esercizi = document.querySelector('.esercizi');
let domande = ["verbo1", " verbo2", " verbo3", " verbo4", " verbo5", " verbo6", " verbo7", " verbo8", " verbo9", " verbo10", " verbo11", " verbo12", " verbo13", " verbo14", " verbo15", " verbo16" ];
let pDomande = document.createElement('p');
pDomande.textContent = domande;

let primo = domande[0];
let pPrimo = document.createElement('p');
pPrimo.textContent = primo;
let scrivi1 = document.createElement('input');
scrivi1.classList.add('input');
esercizi.appendChild(pPrimo);
pPrimo.appendChild(scrivi1);

let due = domande[1];
let pDue = document.createElement('p');
pDue.textContent = due;
let scrivi2 = document.createElement('input');
scrivi2.classList.add('input');
esercizi.appendChild(pDue);
pDue.appendChild(scrivi2);

let tre = domande[2];
let pTre = document.createElement('p');
pTre.textContent = tre;
let scrivi3 = document.createElement('input');
scrivi3.classList.add('input');
esercizi.appendChild(pTre);
pTre.appendChild(scrivi3);

let quattro = domande[3];
let pQuattro = document.createElement('p');
pQuattro.textContent = quattro;
let scrivi4 = document.createElement('input');
scrivi4.classList.add('input');
esercizi.appendChild(pQuattro);
pQuattro.appendChild(scrivi4);

let cinque = domande[4];
let pCinque = document.createElement('p');
pCinque.textContent = cinque;
let scrivi5 = document.createElement('input');
scrivi5.classList.add('input');
esercizi.appendChild(pCinque);
pCinque.appendChild(scrivi5);

let sei = domande[5];
let pSei = document.createElement('p');
pSei.textContent = sei;
let scrivi6 = document.createElement('input');
scrivi6.classList.add('input');
esercizi.appendChild(pSei);
pSei.appendChild(scrivi6);

let sette = domande[6];
let pSette = document.createElement('p');
pSette.textContent = sette;
let scrivi7 = document.createElement('input');
scrivi7.classList.add('input');
esercizi.appendChild(pSette);
pSette.appendChild(scrivi7);

let otto = domande[7];
let pOtto = document.createElement('p');
pOtto.textContent = otto;
let scrivi8 = document.createElement('input');
scrivi8.classList.add('input');
esercizi.appendChild(pOtto);
pOtto.appendChild(scrivi8);

let nove = domande[8];
let pNove = document.createElement('p');
pNove.textContent = nove;
let scrivi9 = document.createElement('input');
scrivi9.classList.add('input');
esercizi.appendChild(pNove);
pNove.appendChild(scrivi9);

let dieci = domande[9];
let pDieci = document.createElement('p');
pDieci.textContent = dieci;
let scrivi10 = document.createElement('input');
scrivi10.classList.add('input');
esercizi.appendChild(pDieci);
pDieci.appendChild(scrivi10);

let undici = domande[10];
let pUndici = document.createElement('p');
pUndici.textContent = undici;
let scrivi11 = document.createElement('input');
scrivi11.classList.add('input');
esercizi.appendChild(pUndici);
pUndici.appendChild(scrivi11);

let dodici = domande[11];
let pDodici = document.createElement('p');
pDodici.textContent = dodici;
let scrivi12 = document.createElement('input');
scrivi12.classList.add('input');
esercizi.appendChild(pDodici);
pDodici.appendChild(scrivi12);

let tredici = domande[12];
let pTredici = document.createElement('p');
pTredici.textContent = tredici;
let scrivi13 = document.createElement('input');
scrivi13.classList.add('input');
esercizi.appendChild(pTredici);
pTredici.appendChild(scrivi13);

let quattordici = domande[13];
let pQuattordici = document.createElement('p');
pQuattordici.textContent = quattordici;
let scrivi14 = document.createElement('input');
scrivi14.classList.add('input');
esercizi.appendChild(pQuattordici);
pQuattordici.appendChild(scrivi14);

let quindici = domande[14];
let pQuindici = document.createElement('p');
pQuindici.textContent = quindici;
let scrivi15 = document.createElement('input');
scrivi15.classList.add('input');
esercizi.appendChild(pQuindici);
pQuindici.appendChild(scrivi15);

let sedici = domande[15];
let pSedici = document.createElement('p');
pSedici.textContent = sedici;
let scrivi16 = document.createElement('input');
scrivi16.classList.add('input');
esercizi.appendChild(pSedici);
pSedici.appendChild(scrivi16);

//PRIMA DI AGGIUNGERE I VERBI VERI: VEDI SE, TOGLIENDO 'appendChild' CHE C'E' ORA, RIESCI A RANDOMIZZARLI!