/**
 * Baza de date centrala a produselor H-TIME (35 produse).
 * Include suport pentru limbi (nume_en, descriere_en) si galerie foto (imagini).
 */
const produse = [
    // ================= CEASURI =================
    { 
        id: 1, nume: "Ceas Rolex Oyster", nume_en: "Rolex Oyster Watch",
        pret: 12000, pretVechi: 14000, categorie: "ceasuri", isSale: true,
        imagine: "produs1-1.png", imagini: ["produs1-1.png", "produs1-2.png", "produs1-3.png"],
        descriere: "O piesă de referință în orologerie. Acest model oferă eleganță absolută și precizie mecanică garantată, creat pentru a fi purtat o viață.",
        descriere_en: "A masterpiece in horology. This model provides absolute elegance and guaranteed mechanical precision, built to last a lifetime."
    },
    { 
        id: 2, nume: "Ceas TISSOT Heritage", nume_en: "TISSOT Heritage Watch",
        pret: 3500, pretVechi: 4000, categorie: "ceasuri", isSale: true,
        imagine: "produs2-1.png", imagini: ["produs2-1.png", "produs2-2.png", "produs2-3.png"],
        descriere: "Design vintage cu mecanism modern. Perfect pentru domnii care apreciază detaliile istorice și măiestria elvețiană.",
        descriere_en: "Vintage design with modern mechanism. Perfect for gentlemen who appreciate historical details and Swiss craftsmanship."
    },
    { 
        id: 3, nume: "Ceas Omega Seamaster", nume_en: "Omega Seamaster Watch",
        pret: 28000, pretVechi: null, categorie: "ceasuri", isSale: false,
        imagine: "produs3-1.png", imagini: ["produs3-1.png", "produs3-2.png"],
        descriere: "Un ceas scufundător legendar, recunoscut pentru durabilitatea sa subacvatică și designul iconic.",
        descriere_en: "A legendary diver's watch, renowned for its underwater durability and iconic design."
    },
    { 
        id: 4, nume: "Ceas Patek Philippe Calatrava", nume_en: "Patek Philippe Calatrava",
        pret: 150000, pretVechi: null, categorie: "ceasuri", isSale: false,
        imagine: "produs4-1.png", imagini: ["produs4-1.png", "produs4-2.png", "produs4-3.png"],
        descriere: "Esența ceasului de mână rotund. Calatrava este unul dintre cele mai frumoase simboluri ale stilului Patek Philippe.",
        descriere_en: "The essence of the round wristwatch. Calatrava is one of the most beautiful symbols of Patek Philippe style."
    },
    { 
        id: 5, nume: "Ceas Audemars Piguet Royal Oak", nume_en: "Audemars Piguet Royal Oak",
        pret: 110000, pretVechi: 125000, categorie: "ceasuri", isSale: true,
        imagine: "produs5-1.png", imagini: ["produs5-1.png", "produs5-2.png"],
        descriere: "Ceasul sport de lux cu un design avangardist, cadran cu model 'Tapisserie' și finisaje excepționale.",
        descriere_en: "The luxury sports watch with an avant-garde design, 'Tapisserie' dial pattern, and exceptional finishes."
    },
    { 
        id: 6, nume: "Ceas Cartier Tank", nume_en: "Cartier Tank Watch",
        pret: 18000, pretVechi: null, categorie: "ceasuri", isSale: false,
        imagine: "produs6-1.png", imagini: ["produs6-1.png", "produs6-2.png"],
        descriere: "Un design atemporal inspirat de arhitectura geometrică curată, o adevărată capodoperă a eleganței rafinate.",
        descriere_en: "A timeless design inspired by clean geometric architecture, a true masterpiece of refined elegance."
    },
    { 
        id: 7, nume: "Ceas TAG Heuer Carrera", nume_en: "TAG Heuer Carrera Watch",
        pret: 22000, pretVechi: 25000, categorie: "ceasuri", isSale: true,
        imagine: "produs7-1.png", imagini: ["produs7-1.png", "produs7-2.png"],
        descriere: "Cronograf sportiv și elegant, conceput pentru șoferii profesioniști și pasionații de mașini sport.",
        descriere_en: "Sporty and elegant chronograph, designed for professional drivers and sports car enthusiasts."
    },
    { 
        id: 8, nume: "Ceas Breitling Navitimer", nume_en: "Breitling Navitimer Watch",
        pret: 32000, pretVechi: null, categorie: "ceasuri", isSale: false,
        imagine: "produs8-1.png", imagini: ["produs8-1.png", "produs8-2.png", "produs8-3.png"],
        descriere: "Un instrument de zbor legendar, preferatul piloților datorită funcțiilor sale aviatice avansate.",
        descriere_en: "A legendary flight instrument, preferred by pilots for its advanced aviation functions."
    },
    { 
        id: 9, nume: "Ceas IWC Portugieser", nume_en: "IWC Portugieser Watch",
        pret: 35000, pretVechi: 38000, categorie: "ceasuri", isSale: true,
        imagine: "produs9-1.png", imagini: ["produs9-1.png", "produs9-2.png"],
        descriere: "Un design nautic clasic, remarcabil prin cadranul său curat și mecanismul de înaltă precizie.",
        descriere_en: "A classic nautical design, remarkable for its clean dial and high-precision mechanism."
    },
    { 
        id: 10, nume: "Ceas Vacheron Constantin Reverso", nume_en: "Vacheron Constantin Reverso",
        pret: 85000, pretVechi: null, categorie: "ceasuri", isSale: false,
        imagine: "produs10-1.png", imagini: ["produs10-1.png", "produs10-2.png"],
        descriere: "Eleganță clasică cu o istorie bogată, reprezentând standardul suprem al calității orologere.",
        descriere_en: "Classic elegance with a rich history, representing the ultimate standard of horological quality."
    },

    // ================= INELE =================
    { 
        id: 11, nume: "Inel Argint Moonlight", nume_en: "Moonlight Silver Ring",
        pret: 450, pretVechi: null, categorie: "inele", isSale: false,
        imagine: "produs11-1.png", imagini: ["produs11-1.png", "produs11-2.png"],
        descriere: "Un inel delicat din argint 925, cu o piatră strălucitoare de zirconiu ce captează lumina lunii.",
        descriere_en: "A delicate 925 silver ring with a shining cubic zirconia stone that catches the moonlight."
    },
    { 
        id: 12, nume: "Inel Eternity Gold", nume_en: "Eternity Gold Ring",
        pret: 1800, pretVechi: 2100, categorie: "inele", isSale: true,
        imagine: "produs12-1.png", imagini: ["produs12-1.png", "produs12-2.png", "produs12-3.png"],
        descriere: "Inel din aur galben de 18K cu incrustații de diamante pe întreaga sa circumferință. Simbolul iubirii eterne.",
        descriere_en: "18K yellow gold ring with diamond encrustations along its entire circumference. The symbol of eternal love."
    },
    { 
        id: 13, nume: "Inel Sapphire Halo", nume_en: "Sapphire Halo Ring",
        pret: 4500, pretVechi: null, categorie: "inele", isSale: false,
        imagine: "produs13-1.png", imagini: ["produs13-1.png", "produs13-2.png"],
        descriere: "Un safir albastru regal înconjurat de un halou de diamante strălucitoare, montat în platină.",
        descriere_en: "A royal blue sapphire surrounded by a halo of brilliant diamonds, set in platinum."
    },
    { 
        id: 14, nume: "Inel Ruby Princess", nume_en: "Ruby Princess Ring",
        pret: 3200, pretVechi: 3800, categorie: "inele", isSale: true,
        imagine: "produs14-1.png", imagini: ["produs14-1.png", "produs14-2.png"],
        descriere: "Un rubin central vibrant, tăietură princess, susținut de o bandă elegantă din aur roz.",
        descriere_en: "A vibrant central ruby, princess cut, supported by an elegant rose gold band."
    },
    { 
        id: 15, nume: "Inel Emerald Cut", nume_en: "Emerald Cut Ring",
        pret: 5600, pretVechi: null, categorie: "inele", isSale: false,
        imagine: "produs15-1.png", imagini: ["produs15-1.png", "produs15-2.png", "produs15-3.png"],
        descriere: "Un smarald columbian de o claritate excepțională, încadrat de două diamante tăietură baghetă.",
        descriere_en: "A Colombian emerald of exceptional clarity, framed by two baguette-cut diamonds."
    },
    { 
        id: 16, nume: "Inel Rose Gold Band", nume_en: "Rose Gold Band Ring",
        pret: 1200, pretVechi: 1400, categorie: "inele", isSale: true,
        imagine: "produs16-1.png", imagini: ["produs16-1.png", "produs16-2.png"],
        descriere: "Bandă minimalistă din aur roz de 14K, perfectă pentru a fi purtată zilnic sau suprapusă.",
        descriere_en: "Minimalist 14K rose gold band, perfect for everyday wear or stacking."
    },
    { 
        id: 17, nume: "Inel Solitaire Platinum", nume_en: "Platinum Solitaire Ring",
        pret: 8900, pretVechi: null, categorie: "inele", isSale: false,
        imagine: "produs17-1.png", imagini: ["produs17-1.png", "produs17-2.png"],
        descriere: "Inel de logodnă clasic, cu un diamant solitar de 1 carat, așezat pe o montură de platină pură.",
        descriere_en: "Classic engagement ring with a 1-carat solitaire diamond, set on a pure platinum mount."
    },
    { 
        id: 18, nume: "Inel Vintage Pearl", nume_en: "Vintage Pearl Ring",
        pret: 1500, pretVechi: 1800, categorie: "inele", isSale: true,
        imagine: "produs18-1.png", imagini: ["produs18-1.png", "produs18-2.png", "produs18-3.png"],
        descriere: "O perlă de cultură înconjurată de detalii filigranate din aur alb, inspirat din Epoca Victoriană.",
        descriere_en: "A cultured pearl surrounded by white gold filigree details, inspired by the Victorian Era."
    },
    { 
        id: 19, nume: "Inel Opal Dream", nume_en: "Opal Dream Ring",
        pret: 2100, pretVechi: null, categorie: "inele", isSale: false,
        imagine: "produs19-1.png", imagini: ["produs19-1.png", "produs19-2.png"],
        descriere: "Un opal australian cu irizații multicolore spectaculoase, o bijuterie ce atrage toate privirile.",
        descriere_en: "An Australian opal with spectacular multicolored iridescence, a piece of jewelry that catches every eye."
    },

    // ================= CERCEI =================
    { 
        id: 20, nume: "Cercei Diamond Drops", nume_en: "Diamond Drops Earrings",
        pret: 2400, pretVechi: null, categorie: "cercei", isSale: false,
        imagine: "produs20-1.png", imagini: ["produs20-1.png", "produs20-2.png"],
        descriere: "Cercei lungi eleganți, decorați cu mici diamante, perfecți pentru a completa ținutele la evenimentele de seară.",
        descriere_en: "Elegant long earrings decorated with small diamonds, perfect to complete your outfit at evening events."
    },
    { 
        id: 21, nume: "Cercei Pearl Studs", nume_en: "Pearl Studs Earrings",
        pret: 800, pretVechi: 950, categorie: "cercei", isSale: true,
        imagine: "produs21-1.png", imagini: ["produs21-1.png", "produs21-2.png"],
        descriere: "Cercei pe lob cu perle Akoya perfect rotunde, o alegere clasică și rafinată pentru orice ocazie.",
        descriere_en: "Stud earrings with perfectly round Akoya pearls, a classic and refined choice for any occasion."
    },
    { 
        id: 22, nume: "Cercei Gold Hoops", nume_en: "Gold Hoops Earrings",
        pret: 1100, pretVechi: null, categorie: "cercei", isSale: false,
        imagine: "produs22-1.png", imagini: ["produs22-1.png", "produs22-2.png", "produs22-3.png"],
        descriere: "Creole din aur galben masiv de 14K, cu o grosime medie, ideale pentru un look chic și modern.",
        descriere_en: "Solid 14K yellow gold hoop earrings of medium thickness, ideal for a chic and modern look."
    },
    { 
        id: 23, nume: "Cercei Sapphire Tear", nume_en: "Sapphire Tear Earrings",
        pret: 3500, pretVechi: 4200, categorie: "cercei", isSale: true,
        imagine: "produs23-1.png", imagini: ["produs23-1.png", "produs23-2.png"],
        descriere: "Cercei sub formă de lacrimă cu safire albastre profunde, înconjurate de pavaj fin de diamante.",
        descriere_en: "Teardrop earrings with deep blue sapphires, surrounded by a fine pavé of diamonds."
    },
    { 
        id: 24, nume: "Cercei Ruby Cluster", nume_en: "Ruby Cluster Earrings",
        pret: 2800, pretVechi: null, categorie: "cercei", isSale: false,
        imagine: "produs24-1.png", imagini: ["produs24-1.png", "produs24-2.png"],
        descriere: "Ciorchine de rubine roșii vibrante, setate elegant în aur alb pentru un contrast vizual impresionant.",
        descriere_en: "Clusters of vibrant red rubies, elegantly set in white gold for an impressive visual contrast."
    },
    { 
        id: 25, nume: "Cercei Emerald Chandelier", nume_en: "Emerald Chandelier Earrings",
        pret: 6500, pretVechi: 7200, categorie: "cercei", isSale: true,
        imagine: "produs25-1.png", imagini: ["produs25-1.png", "produs25-2.png", "produs25-3.png"],
        descriere: "Cercei candelabru opulenți, cu smaralde verzi și diamante, o adevărată declarație de lux regal.",
        descriere_en: "Opulent chandelier earrings with green emeralds and diamonds, a true statement of royal luxury."
    },
    { 
        id: 26, nume: "Cercei Rose Gold Petals", nume_en: "Rose Gold Petals Earrings",
        pret: 1600, pretVechi: null, categorie: "cercei", isSale: false,
        imagine: "produs26-1.png", imagini: ["produs26-1.png", "produs26-2.png"],
        descriere: "Cercei delicați în formă de petale de trandafir, realizați din aur roz de 18K cu un finisaj mat.",
        descriere_en: "Delicate rose petal-shaped earrings, made of 18K rose gold with a matte finish."
    },
    { 
        id: 27, nume: "Cercei Silver Stars", nume_en: "Silver Stars Earrings",
        pret: 350, pretVechi: 450, categorie: "cercei", isSale: true,
        imagine: "produs27-1.png", imagini: ["produs27-1.png", "produs27-2.png"],
        descriere: "Cercei micuți în formă de stea, din argint pur 925, perfecți pentru a adăuga o strălucire discretă zilei tale.",
        descriere_en: "Tiny star-shaped earrings made of pure 925 silver, perfect to add a discreet sparkle to your day."
    },

    // ================= BRATARI =================
    { 
        id: 28, nume: "Brățară Cuff Gold", nume_en: "Gold Cuff Bracelet",
        pret: 3100, pretVechi: 3500, categorie: "bratari", isSale: true,
        imagine: "produs28-1.png", imagini: ["produs28-1.png", "produs28-2.png"],
        descriere: "Brățară fixă din aur pur, cu un design minimalist care se potrivește la orice ținută și adaugă rafinament.",
        descriere_en: "Solid gold cuff bracelet with a minimalist design that matches any outfit and adds refinement."
    },
    { 
        id: 29, nume: "Brățară Tennis Diamond", nume_en: "Tennis Diamond Bracelet",
        pret: 8500, pretVechi: null, categorie: "bratari", isSale: false,
        imagine: "produs29-1.png", imagini: ["produs29-1.png", "produs29-2.png", "produs29-3.png"],
        descriere: "Clasica brățară tennis, încrustată cu un șir continuu de diamante perfect asortate.",
        descriere_en: "The classic tennis bracelet, encrusted with a continuous row of perfectly matched diamonds."
    },
    { 
        id: 30, nume: "Brățară Silver Chain", nume_en: "Silver Chain Bracelet",
        pret: 600, pretVechi: 750, categorie: "bratari", isSale: true,
        imagine: "produs30-1.png", imagini: ["produs30-1.png", "produs30-2.png"],
        descriere: "Brățară din argint masiv cu zale groase, un accesoriu statement perfect pentru un look curajos.",
        descriere_en: "Solid silver bracelet with thick links, a statement accessory perfect for a bold look."
    },
    { 
        id: 31, nume: "Brățară Pearl Strand", nume_en: "Pearl Strand Bracelet",
        pret: 1200, pretVechi: null, categorie: "bratari", isSale: false,
        imagine: "produs31-1.png", imagini: ["produs31-1.png", "produs31-2.png"],
        descriere: "Un șirag elegant de perle de apă dulce, finisat cu o închizătoare filigranată din aur alb.",
        descriere_en: "An elegant strand of freshwater pearls, finished with a white gold filigree clasp."
    },
    { 
        id: 32, nume: "Brățară Charm Harmony", nume_en: "Harmony Charm Bracelet",
        pret: 1450, pretVechi: 1700, categorie: "bratari", isSale: true,
        imagine: "produs32-1.png", imagini: ["produs32-1.png", "produs32-2.png", "produs32-3.png"],
        descriere: "Brățară flexibilă cu diverse pandantive talisman (charm-uri) ce simbolizează norocul și dragostea.",
        descriere_en: "Flexible bracelet with various charm pendants symbolizing luck and love."
    },
    { 
        id: 33, nume: "Brățară Rose Gold Bangle", nume_en: "Rose Gold Bangle",
        pret: 2200, pretVechi: null, categorie: "bratari", isSale: false,
        imagine: "produs33-1.png", imagini: ["produs33-1.png", "produs33-2.png"],
        descriere: "Bratară bangle rigidă din aur roz, înfrumusețată cu inserții subtile de diamante albe.",
        descriere_en: "Rigid rose gold bangle bracelet, embellished with subtle white diamond inserts."
    },
    { 
        id: 34, nume: "Brățară Leather & Gold", nume_en: "Leather & Gold Bracelet",
        pret: 950, pretVechi: 1100, categorie: "bratari", isSale: true,
        imagine: "produs34-1.png", imagini: ["produs34-1.png", "produs34-2.png"],
        descriere: "O fuziune modernă între piele naturală împletită și detalii solide din aur galben de 18K.",
        descriere_en: "A modern fusion of braided genuine leather and solid 18K yellow gold details."
    },
    { 
        id: 35, nume: "Brățară Platinum Link", nume_en: "Platinum Link Bracelet",
        pret: 4200, pretVechi: null, categorie: "bratari", isSale: false,
        imagine: "produs35-1.png", imagini: ["produs35-1.png", "produs35-2.png"],
        descriere: "Brățară din platină pură cu zale clasice, oferind o prezență impunătoare, masculină și sofisticată.",
        descriere_en: "Pure platinum bracelet with classic links, offering an imposing, masculine, and sophisticated presence."
    }
];
