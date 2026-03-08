/**
 * Folosim cheia 'htimeCart' pentru a fi in sincron cu magazin.html 
 * si celelalte pagini care au scripturi interne.
 */
const COS_KEY = 'htimeCart';

/**
 * Adauga un produs in cos.
 * Aceasta functie este apelata de butoanele din magazin.html.
 */
function adaugaInCos(id) {
    const produsId = parseInt(id);
    
    if (typeof produse === 'undefined') {
        console.error("Eroare: produse.js nu este incarcat.");
        return;
    }

    const produsGasit = produse.find(p => p.id === produsId);
    
    if (!produsGasit) {
        console.error("Produsul cu ID-ul " + produsId + " nu a fost gasit.");
        return;
    }

    // Citim cosul actual
    let cos = JSON.parse(localStorage.getItem(COS_KEY)) || [];
    
    // Verificam daca produsul exista deja
    const indexExistent = cos.findIndex(p => p.id === produsId);
    
    if (indexExistent !== -1) {
        // Daca exista, incrementam cantitatea (folosim campul 'qty' sau 'cantitate' - ramanem la qty pentru consistenta)
        cos[indexExistent].qty = (cos[indexExistent].qty || 1) + 1;
    } else {
        // Salvam obiectul folosind aceleasi campuri ca in produse.js: nume, pret, imagine
        cos.push({
            id: produsGasit.id,
            nume: produsGasit.nume,
            pret: produsGasit.pret,
            imagine: produsGasit.imagine,
            qty: 1
        });
    }

    // Salvam inapoi in localStorage sub cheia folosita de magazin.html
    localStorage.setItem(COS_KEY, JSON.stringify(cos));
    
    // Actualizam cifra din meniu
    actualizeazaNumarCos();
    
    // Notificare vizuala
    afiseazaNotificare(`"${produsGasit.nume}" a fost adăugat în coș!`);
}

/**
 * Actualizeaza textul din butonul de Cart (X)
 */
function actualizeazaNumarCos() {
    const cos = JSON.parse(localStorage.getItem(COS_KEY)) || [];
    // Pentru consistenta cu magazin.html, afisam numarul de intrari unice (cart.length)
    // sau suma cantitatilor. Aici folosim cart.length pentru a se potrivi cu restul paginilor tale.
    const total = cos.length;
    
    const navBtn = document.getElementById('cart-nav-btn');
    if (navBtn) {
        navBtn.innerText = `Cart (${total})`;
    }
}

/**
 * Notificare eleganta folosind culorile tale
 */
function afiseazaNotificare(mesaj) {
    const notif = document.createElement('div');
    notif.textContent = mesaj;
    notif.style.cssText = `
        position: fixed; bottom: 30px; right: 30px;
        background: #111; color: #fcbf88; padding: 15px 25px;
        border-radius: 30px; z-index: 10000; font-family: 'Montserrat', sans-serif;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3); font-weight: 600;
        animation: slideInNotif 0.3s ease-out;
    `;
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.opacity = '0';
        notif.style.transition = 'opacity 0.5s ease';
        setTimeout(() => notif.remove(), 500);
    }, 2500);
}

// Stiluri pentru animatia notificarii
if (!document.getElementById('notif-styles')) {
    const style = document.createElement('style');
    style.id = 'notif-styles';
    style.textContent = `
        @keyframes slideInNotif {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// Rulam actualizarea la incarcarea paginii
document.addEventListener('DOMContentLoaded', actualizeazaNumarCos);
