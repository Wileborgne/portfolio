// ─────────────────────────────────────────────────────────────────────────────
// CONTENU DU SITE — c'est le seul fichier à modifier pour changer les projets.
//
// Une ligne = un projet. Pour en ajouter un : copier une ligne, la coller dans
// la liste « projets », puis changer les valeurs. Chaque ligne se termine par
// une virgule, sauf la dernière.
//
//   id      identifiant de la vidéo YouTube (la fin du lien youtu.be/…).
//           Pour une vidéo Vimeo : id:'v' + numéro, et vimeo:'numéro'.
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
    {id:'rSKDmKK25dQ', client:'Abela x Puma', title:'Marscup 2025', cat:'commercials', prod:'Dépendant.tv', dur:84, w:2880, h:2160},
    {id:'Fy452HRgJP0', client:'Adidas', title:'We Recup Le City', cat:'commercials', prod:'Henry.tv', dur:123, w:2880, h:2160},
    {id:'7vOPFDqmCSk', client:'Adidas x Footlocker', title:'Megaride', cat:'commercials', prod:'Ocurens', dur:45, w:3148, h:2160},
    {id:'3F7smypVw-E', client:'Adidas x RC Lens', title:'(Co Edit)', cat:'commercials', prod:'Clutch Agency', dur:108, w:3840, h:2160},
    {id:'v1234435083', vimeo:'1234435083', client:'Balenciaga', title:'Winter 26, Cutdown', cat:'fashion', dur:30, w:1920, h:1080},
    {id:'Cdu5zcQfwuk', client:'Dior', title:'Golden Globes 2026, Mia Goth', cat:'fashion', prod:'Protest Studios', dur:34, w:3840, h:2160},
    {id:'0WZ2EgmN9OI', client:'Copin', title:'Short Story 1', cat:'fashion', prod:'Ocurens', dur:34, w:2880, h:2160},
    {id:'n5q4Q5-5Hes', client:'Copin', title:'Short Story 3', cat:'fashion', prod:'Ocurens', dur:22, w:2880, h:2160},
    {id:'Qajm__kvcCw', client:'Courir x Jordan', title:'', cat:'fashion', prod:'Dépendant.tv', dur:15, w:2880, h:2160},
    {id:'8UShGoeVpi4', client:'Dior', title:'César 2026, Nadia Melliti', cat:'fashion', prod:'Protest Studios', dur:33, w:1920, h:1080},
    {id:'blVoF5dfInw', client:'So La Lune x Malik Bentalha', title:'Bercy', cat:'commercials', dur:80, w:1440, h:1080},
    {id:'zNQsuU9eatI', client:'Schott x Loumenais', title:'', cat:'commercials', prod:'Henry.tv', dur:73, w:2880, h:2160},
    {id:'MZQVohE-5LA', client:'Jaden Smith x Christian Louboutin', title:'Interview', cat:'commercials', prod:'Louboutin', dur:180, w:1920, h:1080},
    {id:'zqTms53SpSE', client:'IMV Origin', title:'Toyota', cat:'commercials', prod:'Pelican Paris', dur:585, w:3840, h:2160},
    {id:'FAqbWhKquCw', client:'Vogue', title:'L’Hôtel des Grands Voyageurs', cat:'fashion', prod:'Notorious Vision', dur:209, w:3840, h:2160},
    {id:'XblEkjAbL7A', client:'Suuuply', title:'Part 2', cat:'fashion', prod:'Suite.302', dur:30, w:3840, h:2160},
    {id:'43k5dKVnkqg', client:'Dior', title:'RTW FW25, Cutdown', cat:'fashion', prod:'Tender Night', dur:28, w:1080, h:1080},
    {id:'v1234435243', vimeo:'1234435243', client:'L’Oréal', title:'Blurfiller', cat:'fashion', prod:'Agence Major', dur:22, w:1080, h:1920, pos:'50% 31%'},
    {id:'i_wU6QTO8Xk', client:'Dior', title:'Pre-Fall 2025, Cutdown', cat:'fashion', prod:'Tender Night', dur:35, w:1080, h:1350, pos:'50% 32%'},
    {id:'ORqMHsj87Wk', client:'Dior', title:'Cruise 2025, Cutdown', cat:'fashion', prod:'Tender Night', dur:27, w:1080, h:1920, pos:'50% 38%'},
    {id:'THnRFZ2od44', client:'Vivienne Westwood', title:'AW25-26, Cutdown', cat:'fashion', prod:'Studio Prémices', dur:24, w:1080, h:1350, pos:'50% 12%'},
    {id:'iV9vFxP0dE8', client:'TH', title:'Pokemon (Dircut)', cat:'clips', prod:'Ocurens', dur:179, w:2880, h:2160},
    {id:'9r8XVoGtFAY', client:'Lazarra', title:'Tu t’en iras', cat:'clips', dur:282, w:1920, h:1080},
    {id:'v1234393872', vimeo:'1234393872', client:'Sean', title:'CDC', cat:'clips', prod:'Tierse', dur:211, w:1440, h:1080},
    {id:'v1234393874', vimeo:'1234393874', client:'Teodore x Green Montana', title:'MM', cat:'clips', prod:'Tierse', dur:121, w:1440, h:1080},
    {id:'v1234393873', vimeo:'1234393873', client:'Yvnnis', title:'Emoticone', cat:'clips', prod:'Dépendant.tv', dur:155, w:1440, h:1080},
    {id:'v1234393871', vimeo:'1234393871', client:'La Fève', title:'2026', cat:'clips', prod:'Henry.tv', dur:218, w:1920, h:1080},
    {id:'v1234397501', vimeo:'1234397501', client:'Silva', title:'Bedouin', cat:'clips', dur:162, w:1440, h:1080},
    {id:'v1234397502', vimeo:'1234397502', client:'Eva', title:'Body', cat:'clips', prod:'Henry.tv', dur:145, w:1920, h:1080}
  ]
};
