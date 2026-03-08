/**
 * Cheia sub care salvam datele in memoria browserului.
 * Trebuie sa fie aceeasi si in checkout.html pentru ca paginile sa comunice intre ele.
 */
const COS_KEY = 'htime_cos';

/**
 * Adauga un produs in cos pe baza ID-ului trecut in onclick din magazin.html
 * @param {number|string} id - ID-ul produsului
 */
function adaugaInCos(id) {
    const produsId = parseInt(id);
    
    // Verificam daca baza de date de produse este incarcata (din produse.js)
    if (typeof produse === 'undefined') {
        console.error("Fisierul produse.js nu a fost gasit sau incarcat.");
        return;
    }

    // Cautam produsul in lista globala
    const produsGasit = produse.find(p => p.id === produsId);
    
    if (!produsGasit) {
        console.error("Produsul cu ID-ul " + produsId + " nu exista in baza de date.");
        return;
    }

    // Preluam cosul actual din memoria browserului
    let cos = JSON.parse(localStorage.getItem(COS_KEY)) || [];
    
    // Verificam daca produsul este deja in cos
    const indexExistent = cos.findIndex(p => p.id === produsId);
    
    if (indexExistent !== -1) {
        // Daca exista deja, ii crestem doar cantitatea
        cos[indexExistent].cantitate = (cos[indexExistent].cantitate || 1) + 1;
    } else {
        // Daca este nou, il adaugam cu toate detaliile (nume, pret, imagine)
        // pentru ca checkout.html sa le poata afisa direct.
        cos.push({
            id: produsGasit.id,
            nume: produsGasit.nume,
            pret: produsGasit.pret,
            imagine: produsGasit.imagine,
            cantitate: 1
        });
    }

    // Salvam lista actualizata
    localStorage.setItem(COS_KEY, JSON.stringify(cos));
    
    // Actualizam numarul afisat in meniu (Cart (X))
    actualizeazaNumarCos();
    
    // Notificare vizuala rapida
    afiseazaNotificare(`"${produsGasit.nume}" a fost adăugat în coș!`);
}

/**
 * Gaseste butonul de cart din nav si ii updateaza textul conform numarului de produse.
 * Identificat prin id="cart-nav-btn" din magazin.html-ul tau.
 */
function actualizeazaNumarCos() {
    const cos = JSON.parse(localStorage.getItem(COS_KEY)) || [];
    const totalProduse = cos.reduce((suma, item) => suma + (item.cantitate || 1), 0);
    
    const navCartBtn = document.getElementById('cart-nav-btn');
    if (navCartBtn) {
        navCartBtn.innerText = `Cart (${totalProduse})`;
    }
}

/**
 * Creeaza o notificare eleganta care dispare dupa 2 secunde.
 */
function afiseazaNotificare(mesaj) {
    const notif = document.createElement('div');
    notif.textContent = mesaj;
    notif.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #111;
        color: #fcbf88;
        padding: 15px 25px;
        border-radius: 30px;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 2000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.opacity = '0';
        notif.style.transition = 'opacity 0.5s ease';
        setTimeout(() => notif.remove(), 500);
    }, 2000);
}

// Cand se incarca orice pagina (magazin, index, etc.), verificam numarul din cos
document.addEventListener('DOMContentLoaded', actualizeazaNumarCos);

// Adaugam animatia pentru notificare
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideIn {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`;
document.head.appendChild(styleSheet);
