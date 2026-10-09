// ─────────────────────────────────────────────────────────────────────────────
// CONTENU DU SITE — c'est le seul fichier à modifier pour changer les projets.
//
// Une ligne = un projet. Pour en ajouter un : copier une ligne, la coller dans
// la liste « projets », puis changer les valeurs. Chaque ligne se termine par
// une virgule, sauf la dernière.
//
//   id      nom du projet pour le site ; c'est aussi le nom de sa vignette
//           (img/<id>.jpg). Ne pas le changer, sinon la vignette disparaît.
//           Pour un nouveau projet Vimeo : id:'v' + numéro Vimeo.
//   vimeo   numéro de la vidéo Vimeo (la fin du lien vimeo.com/…). C'est
//           cette vidéo qui se lit sur le site. Sans « vimeo », le site lit
//           la vidéo YouTube dont l'identifiant est dans « id ».
//   client  ce qui s'affiche en caractères droits        (ex. 'Dior')
//   title   ce qui s'affiche en italique, peut être vide (ex. 'Cruise 2025, Cutdown')
//   cat     'commercials', 'fashion' ou 'clips'
//   prod    société de production (facultatif)
//   dur     durée en secondes
//   w, h    largeur et hauteur de la vidéo (pour le format du lecteur)
//   pos     cadrage de la vignette dans la grille, facultatif (ex. '50% 30%' :
//           le 2e chiffre monte ou descend l'image, 0% = haut, 100% = bas)
//
// La vignette de chaque projet est le fichier img/<id>.jpg
// Le balayage au survol (sur ordinateur) utilise scrub/<id>.webp : une planche
// de 30 images tirées de la vidéo. Sans ce fichier, le survol reste simple.
// ─────────────────────────────────────────────────────────────────────────────
window.PORTFOLIO = {

  // Les trois pages du menu
  categories: [
    {id:'commercials', label:'Commercials'},
    {id:'fashion', label:'Fashion & Luxury'},
    {id:'clips', label:'Music Videos'}
  ],

  // Projets qui défilent sur la page d'accueil, dans l'ordre (le premier s'affiche à l'ouverture)
  accueil: ['Cdu5zcQfwuk', 'rSKDmKK25dQ', 'v1234393871', 'v1234435243', 'zNQsuU9eatI', 'iV9vFxP0dE8', '0WZ2EgmN9OI', 'Fy452HRgJP0'],

  projets: [
    {id:'rSKDmKK25dQ', vimeo:'1234453005', client:'Abela x Puma', title:'Marscup 2025', cat:'commercials', prod:'Dépendant.tv', dur:84, w:2880, h:2160},
    {id:'Fy452HRgJP0', vimeo:'1234453003', client:'Adidas', title:'We Recup Le City', cat:'commercials', prod:'Henry.tv', dur:123, w:2880, h:2160},
    {id:'7vOPFDqmCSk', vimeo:'1234453007', client:'Adidas x Footlocker', title:'Megaride', cat:'commercials', prod:'Ocurens', dur:45, w:3148, h:2160},
    {id:'3F7smypVw-E', vimeo:'1234453008', client:'Adidas x RC Lens', title:'(Co Edit)', cat:'commercials', prod:'Clutch Agency', dur:108, w:3840, h:2160},
    {id:'v1234435083', vimeo:'1234435083', client:'Balenciaga', title:'Winter 26, Cutdown', cat:'fashion', prod:'Ultramotion', dur:30, w:1920, h:1080},
    {id:'Cdu5zcQfwuk', vimeo:'1234453243', client:'Dior', title:'Golden Globes 2026, Mia Goth', cat:'fashion', prod:'Protest Studios', dur:34, w:3840, h:2160},
    {id:'0WZ2EgmN9OI', vimeo:'1234453197', client:'Copin', title:'Short Story 1', cat:'fashion', prod:'Ocurens', dur:34, w:2880, h:2160},
    {id:'n5q4Q5-5Hes', vimeo:'1234453203', client:'Copin', title:'Short Story 3', cat:'fashion', prod:'Ocurens', dur:22, w:2880, h:2160},
    {id:'Qajm__kvcCw', vimeo:'1234453217', client:'Courir x Jordan', title:'', cat:'fashion', prod:'Dépendant.tv', dur:15, w:2880, h:2160},
    {id:'8UShGoeVpi4', vimeo:'1234453356', client:'Dior', title:'César 2026, Nadia Melliti', cat:'fashion', prod:'Protest Studios', dur:33, w:1920, h:1080},
    {id:'blVoF5dfInw', vimeo:'1234453646', client:'So La Lune x Malik Bentalha', title:'Bercy', cat:'commercials', prod:'Henry.tv', dur:80, w:1440, h:1080},
    {id:'zNQsuU9eatI', vimeo:'1234453504', client:'Schott x Loumenais', title:'', cat:'commercials', prod:'Henry.tv', dur:73, w:2880, h:2160},
    {id:'MZQVohE-5LA', vimeo:'1234453436', client:'Jaden Smith x Christian Louboutin', title:'Interview', cat:'commercials', prod:'Louboutin', dur:180, w:1920, h:1080},
    {id:'zqTms53SpSE', vimeo:'1234453428', client:'IMV Origin', title:'Toyota', cat:'commercials', prod:'Pelican Paris', dur:585, w:3840, h:2160},
    {id:'FAqbWhKquCw', vimeo:'1234453835', client:'Vogue', title:'L’Hôtel des Grands Voyageurs', cat:'fashion', prod:'Notorious Vision', dur:209, w:3840, h:2160},
    {id:'XblEkjAbL7A', vimeo:'1234453684', client:'Suuuply', title:'Part 2', cat:'fashion', prod:'Suite.302', dur:30, w:3840, h:2160},
    {id:'43k5dKVnkqg', vimeo:'1234456425', client:'Dior', title:'RTW FW25, Cutdown', cat:'fashion', prod:'Tender Night', dur:28, w:1080, h:1080},
    {id:'v1234435243', vimeo:'1234435243', client:'L’Oréal', title:'Blurfiller', cat:'fashion', prod:'Agence Major', dur:22, w:1080, h:1920, pos:'50% 31%'},
    {id:'i_wU6QTO8Xk', vimeo:'1234453407', client:'Dior', title:'Pre-Fall 2025, Cutdown', cat:'fashion', prod:'Tender Night', dur:35, w:1080, h:1350, pos:'50% 32%'},
    {id:'ORqMHsj87Wk', vimeo:'1234453389', client:'Dior', title:'Cruise 2025, Cutdown', cat:'fashion', prod:'Tender Night', dur:27, w:1080, h:1920, pos:'50% 38%'},
    {id:'THnRFZ2od44', vimeo:'1234453771', client:'Vivienne Westwood', title:'AW25-26, Cutdown', cat:'fashion', prod:'Studio Prémices', dur:24, w:1080, h:1350, pos:'50% 12%'},
    {id:'iV9vFxP0dE8', vimeo:'1234453757', client:'TH', title:'Pokemon (Dircut)', cat:'clips', prod:'Ocurens', dur:179, w:2880, h:2160},
    {id:'9r8XVoGtFAY', vimeo:'1234453452', client:'Lazarra', title:'Tu t’en iras', cat:'clips', prod:'Trichrome', dur:282, w:1920, h:1080},
    {id:'v1234393872', vimeo:'1234393872', client:'Sean', title:'CDC', cat:'clips', prod:'Tierse', dur:211, w:1440, h:1080},
    {id:'v1234393874', vimeo:'1234393874', client:'Teodore x Green Montana', title:'MM', cat:'clips', prod:'Tierse', dur:121, w:1440, h:1080},
    {id:'v1234393873', vimeo:'1234393873', client:'Yvnnis', title:'Emoticone', cat:'clips', prod:'Dépendant.tv', dur:155, w:1440, h:1080},
    {id:'v1234393871', vimeo:'1234393871', client:'La Fève', title:'2026', cat:'clips', prod:'Henry.tv', dur:218, w:1920, h:1080},
    {id:'v1234397501', vimeo:'1234397501', client:'Silva', title:'Bedouin', cat:'clips', prod:'Ocurens', dur:162, w:1440, h:1080},
    {id:'v1234397502', vimeo:'1234397502', client:'Eva', title:'Body', cat:'clips', prod:'Henry.tv', dur:145, w:1920, h:1080}
  ]
};
