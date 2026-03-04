// produse.js - Baza de date completă H-TIME
const produse = [
    // --- CEASURI ---
    { 
        id: 1, 
        nume: "Ceas Rolex Oyster Perpetual", 
        categorie: "ceasuri", 
        imagine: "ceas.jpg", 
        pret: 950, 
        pretVechi: 1200, 
        isSale: true,
        descriere: "Simbolul eleganței universale. Oyster Perpetual oferă precizie cronometrică și un design care nu se demodează niciodată.",
        galerie: ["ceas1.jpg", "ceas2.jpg"],
        materiale: ["Oțel 904L", "Aur Alb 14K"]
    },
    { 
        id: 2, 
        nume: "Ceas Rolex Submariner Gold", 
        categorie: "ceasuri", 
        imagine: "ceas1.jpg", 
        pret: 1450, 
        pretVechi: null, 
        isSale: false,
        descriere: "Esența ceasurilor de scufundări. Ediția Gold îmbină robustețea legendară cu luxul aurului masiv.",
        galerie: ["ceas.jpg", "ceas2.jpg"],
        materiale: ["Aur Galben 18K", "Aur Roz 18K"]
    },
    { 
        id: 3, 
        nume: "Ceas TISSOT Heritage", 
        categorie: "ceasuri", 
        imagine: "ceas2.jpg", 
        pret: 750, 
        pretVechi: 980, 
        isSale: true,
        descriere: "Un omagiu adus tradiției orologere elvețiene. Design retro cu mecanism modern automatic.",
        galerie: ["ceas.jpg", "ceas1.jpg"],
        materiale: ["Oțel Inoxidabil", "Piele Naturală"]
    },
    { 
        id: 4, 
        nume: "Ceas Chronograph Sport", 
        categorie: "ceasuri", 
        imagine: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=400&q=80", 
        pret: 2100, 
        pretVechi: null, 
        isSale: false,
        descriere: "Performanță și stil. Un cronograf precis pentru cei care apreciază dinamismul și detaliile tehnice.",
        galerie: [],
        materiale: ["Titan", "Silicon Premium"]
    },

    // --- INELE ---
    { 
        id: 5, 
        nume: "Inel De Aur 18K cu Diamant", 
        categorie: "inele", 
        imagine: "inel1.jpg", 
        pret: 250, 
        pretVechi: null, 
        isSale: false,
        descriere: "Eleganță pură. Un diamant central strălucitor montat pe o bandă fină din aur de 18 karate.",
        galerie: ["inel2.jpg", "ring.jpg"],
        materiale: ["Aur Galben 18K", "Aur Alb 18K", "Aur Roz 18K"]
    },
    { 
        id: 6, 
        nume: "Inel Din Argint Moonlight", 
        categorie: "inele", 
        imagine: "inel2.jpg", 
        pret: 95, 
        pretVechi: 120, 
        isSale: true,
        descriere: "Inspirat de lumina lunii, acest inel din argint 925 oferă un design minimalist și modern.",
        galerie: ["inel1.jpg"],
        materiale: ["Argint 925", "Argint Rodiat"]
    },
    { 
        id: 7, 
        nume: "Inel Eternity Gold", 
        categorie: "inele", 
        imagine: "ring.jpg", 
        pret: 140, 
        pretVechi: 185, 
        isSale: true,
        descriere: "Simbolul iubirii eterne, încrustat cu pietre prețioase pe întreaga circumferință.",
        galerie: ["inel1.jpg"],
        materiale: ["Aur 14K", "Aur 18K"]
    },
    { 
        id: 8, 
        nume: "Inel Sapphire Royal", 
        categorie: "inele", 
        imagine: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=400&q=80", 
        pret: 310, 
        pretVechi: null, 
        isSale: false,
        descriere: "Un safir impunător înconjurat de o coroană de diamante mici. Un design regal.",
        galerie: [],
        materiale: ["Platină", "Aur Alb 18K"]
    },

    // --- CERCEI ---
    { 
        id: 9, 
        nume: "Cercei Diamond Drops", 
        categorie: "cercei", 
        imagine: "earring.jpg", 
        pret: 240, 
        pretVechi: 310, 
        isSale: true,
        descriere: "Cercei rafinați care captează lumina la fiecare mișcare. Perfecți pentru ocazii speciale.",
        galerie: ["cercel1.jpg"],
        materiale: ["Aur Alb 14K", "Aur Alb 18K"]
    },
    { 
        id: 10, 
        nume: "Cercei Hoop Gold", 
        categorie: "cercei", 
        imagine: "cercel1.jpg", 
        pret: 121, 
        pretVechi: null, 
        isSale: false,
        descriere: "Clasicii cercei rotunzi, reinterpretați cu o textură modernă și finisaj de oglindă.",
        galerie: ["earring.jpg"],
        materiale: ["Aur 14K", "Argint Placat cu Aur"]
    },
    { 
        id: 11, 
        nume: "Cercei Pearl Elegance", 
        categorie: "cercei", 
        imagine: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&w=400&q=80", 
        pret: 50, 
        pretVechi: 75, 
        isSale: true,
        descriere: "Perle naturale de cultură montate pe suport discret de argint. Eleganță simplă.",
        galerie: [],
        materiale: ["Argint 925", "Oțel Chirurgical"]
    },
    { 
        id: 12, 
        nume: "Cercei Geometric Modern", 
        categorie: "cercei", 
        imagine: "https://images.unsplash.com/photo-1599643478514-46b15d21a8cd?auto=format&fit=crop&w=400&q=80", 
        pret: 240, 
        pretVechi: null, 
        isSale: false,
        descriere: "Linii drepte și unghiuri precise pentru un look contemporan și îndrăzneț.",
        galerie: [],
        materiale: ["Aur Galben 18K", "Titan"]
    },

    // --- BRĂȚĂRI ---
    { 
        id: 13, 
        nume: "Brățară Tennis Diamond", 
        categorie: "bratari", 
        imagine: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80", 
        pret: 65, 
        pretVechi: null, 
        isSale: false,
        descriere: "O linie continuă de strălucire. Brățara Tennis este un must-have în colecția oricărei femei.",
        galerie: ["https://images.unsplash.com/photo-1573408301145-b98c4af01086?auto=format&fit=crop&w=400&q=80"],
        materiale: ["Argint 925", "Cristale Cubic Zirconia"]
    },
    { 
        id: 14, 
        nume: "Brățară Cuff Gold", 
        categorie: "bratari", 
        imagine: "https://images.unsplash.com/photo-1573408301145-b98c4af01086?auto=format&fit=crop&w=400&q=80", 
        pret: 99, 
        pretVechi: 130, 
        isSale: true,
        descriere: "Brățară rigidă, reglabilă, cu un finisaj mat sofisticat. Ideală pentru layering.",
        galerie: [],
        materiale: ["Aur 14K", "Alamă Placată cu Aur"]
    },
    { 
        id: 15, 
        nume: "Brățară Charm Silver", 
        categorie: "bratari", 
        imagine: "https://images.unsplash.com/photo-1602752250014-411db109559c?auto=format&fit=crop&w=400&q=80", 
        pret: 90, 
        pretVechi: null, 
        isSale: false,
        descriere: "Personalizează-ți povestea cu această brățară din argint veritabil.",
        galerie: [],
        materiale: ["Argint 925"]
    },
    { 
        id: 16, 
        nume: "Brățară Leather & Gold", 
        categorie: "bratari", 
        imagine: "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?auto=format&fit=crop&w=400&q=80", 
        pret: 150, 
        pretVechi: 180, 
        isSale: true,
        descriere: "Mix între duritatea pielii naturale și finețea aurului. Un accesoriu unisex deosebit.",
        galerie: [],
        materiale: ["Piele + Aur 14K", "Piele + Oțel"]
    }
];
