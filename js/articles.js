/**
 * Base de datos de artículos del blog
 */

const articles = {
    1: {
        id: 1,
        title: "Whitehorse n'avait pas vu autant de neige en décembre depuis plus de 40 ans",
        author: "Radio-Canada",
        date: "15 janvier 2026",
        dateSort: new Date('2026-01-15'),
        image: "https://images.radio-canada.ca/q_auto,w_700/v1/ici-info/16x9/yukon-neige-voiture.jpg",
        summary: "Résumé de la première publication du blog...",
        content: `
            <p>Whitehorse a connu des chutes de neige exceptionnelles en décembre, les plus importantes depuis plus de quatre décennies. La capitale du Yukon a été transformée en un paysage hivernal spectaculaire.</p>
            
            <h2>Des conditions météorologiques historiques</h2>
            <p>Les météorologues ont enregistré des accumulations record qui ont surpris même les résidents les plus aguerris. Ces conditions ont créé à la fois des défis et des opportunités pour la communauté locale.</p>
            
            <p>Les services municipaux ont dû mobiliser des ressources supplémentaires pour maintenir les routes praticables, tandis que les résidents s'adaptaient à ces conditions hivernales exceptionnelles.</p>
            
            <h2>Impact sur la communauté</h2>
            <p>Malgré les défis, la communauté de Whitehorse a fait preuve de résilience et de solidarité. Les activités hivernales ont connu un essor, offrant aux résidents et aux visiteurs des occasions uniques de profiter de cette abondance de neige.</p>
            
            <p>Les experts prévoient que ces conditions pourraient devenir plus fréquentes en raison des changements climatiques, soulignant l'importance de la préparation et de l'adaptation.</p>
        `
    },
    2: {
        id: 2,
        title: "Toute une ville canadienne ensevelie sous la neige par le blizzard",
        author: "Ouest-France",
        date: "20 janvier 2026",
        dateSort: new Date('2026-01-20'),
        image: "https://media.ouest-france.fr/v1/pictures/MjAyMDAxNWNhZjkyZGE3NjVjN2YwODc1MjJhM2JjZDA2OTNkZmY?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=05e59234dd02b278ffc1975f7666ded1e5ff3a8f155d40f4691f7aae01925449",
        summary: "Résumé de la deuxième publication du blog...",
        content: `
            <p>Une tempête hivernale d'une rare intensité s'est abattue sur une ville canadienne, paralysant complètement les activités et ensevelissant les infrastructures sous une épaisse couche de neige.</p>
            
            <h2>Une tempête sans précédent</h2>
            <p>Les vents violents et les chutes de neige abondantes ont créé des conditions de blizzard qui ont rendu les déplacements impossibles pendant plusieurs jours. Les autorités ont décrété l'état d'urgence.</p>
            
            <p>Les services d'urgence ont travaillé sans relâche pour assurer la sécurité des citoyens, tandis que les équipes de déneigement combattaient des conditions extrêmes pour dégager les voies principales.</p>
            
            <h2>Solidarité communautaire</h2>
            <p>Face à cette situation exceptionnelle, la communauté a fait preuve d'une solidarité remarquable. Les voisins se sont entraidés pour déblayer les entrées et vérifier le bien-être des personnes âgées.</p>
            
            <p>Cette épreuve a renforcé les liens communautaires et démontré l'importance de la préparation aux urgences hivernales dans les régions nordiques.</p>
        `
    },
    3: {
        id: 3,
        title: "Niagara l'hiver : mystère et boules de glace",
        author: "L'Express",
        date: "10 janvier 2026",
        dateSort: new Date('2026-01-10'),
        image: "https://l-express.ca/wp-content/uploads/2017/12/100009546-1024x683.jpg",
        summary: "Résumé de la troisième publication du blog...",
        content: `
            <p>Les chutes du Niagara offrent un spectacle unique en hiver, lorsque le froid intense transforme le paysage en une œuvre d'art glacée. Un phénomène rare attire particulièrement l'attention : les boules de glace.</p>
            
            <h2>Un spectacle naturel fascinant</h2>
            <p>Quand les températures plongent sous zéro, la brume des chutes gèle instantanément, créant des formations de glace spectaculaires sur les arbres, les rochers et même les bâtiments environnants.</p>
            
            <p>Les photographes du monde entier affluent pour capturer ces moments magiques, où la puissance de l'eau rencontre la rigueur de l'hiver canadien.</p>
            
            <h2>Le mystère des boules de glace</h2>
            <p>Un phénomène particulièrement intrigant est l'apparition de boules de glace parfaitement sphériques qui se forment naturellement le long des rives. Ces formations résultent d'un processus complexe impliquant les vagues, le vent et les températures glaciales.</p>
            
            <p>Les scientifiques continuent d'étudier ce phénomène rare qui ne se produit que dans des conditions très spécifiques, faisant du Niagara hivernal un laboratoire naturel fascinant.</p>
        `
    },
    4: {
        id: 4,
        title: "Les résidents temporaires au Canada face aux nouvelles restrictions à l'immigration",
        author: "Maudits Français",
        date: "25 janvier 2026",
        dateSort: new Date('2026-01-25'),
        image: "https://mauditsfrancais.ca/wp-content/uploads/sites/7/2024/09/canadian-flag-1229484_1280-e1762457887500.jpg",
        summary: "Résumé de la quatrième publication du blog...",
        content: `
            <p>Le gouvernement canadien a annoncé de nouvelles mesures qui affectent les résidents temporaires, suscitant des inquiétudes et des questions au sein de cette communauté importante.</p>
            
            <h2>Changements dans la politique d'immigration</h2>
            <p>Les nouvelles restrictions visent à réguler le nombre de résidents temporaires au pays, dans le but de mieux gérer les services publics et le marché du logement. Ces mesures ont un impact direct sur des milliers de personnes.</p>
            
            <p>Les étudiants internationaux, les travailleurs temporaires et les visiteurs de longue durée doivent maintenant naviguer dans un paysage réglementaire plus complexe.</p>
            
            <h2>Impact sur les communautés</h2>
            <p>Ces changements ont généré des débats passionnés sur l'équilibre entre les besoins économiques du Canada et la capacité d'accueil du pays. Les employeurs dans certains secteurs expriment leurs préoccupations.</p>
            
            <p>Les organisations d'aide aux immigrants travaillent activement pour informer et soutenir les personnes affectées, offrant des conseils juridiques et des services d'orientation.</p>
            
            <h2>Perspectives d'avenir</h2>
            <p>Malgré les défis, le Canada reste une destination attrayante pour les immigrants. Les experts suggèrent que ces ajustements pourraient conduire à un système d'immigration plus durable à long terme.</p>
        `
    },
    5: {
        id: 5,
        title: "Équipe Canada à Beijing 2022 : Jour 5 - Équipe Canada",
        author: "Olympique Canada",
        dateSort: new Date('2022-02-09'),
        date: "9 février 2022",
        image: "https://olympique.ca/wp-content/uploads/sites/2/2022/02/LH_20220209_28506.jpg?quality=100&w=1131",
        summary: "Résumé de la cinquième publication du blog...",
        content: `
            <p>Le cinquième jour des Jeux olympiques d'hiver de Beijing 2022 a été marqué par des performances exceptionnelles des athlètes canadiens, qui continuent de briller sur la scène internationale.</p>
            
            <h2>Des moments mémorables</h2>
            <p>Les compétitions de cette journée ont offert des moments palpitants, avec plusieurs athlètes canadiens atteignant le podium et établissant de nouveaux records personnels.</p>
            
            <p>L'esprit d'équipe et la détermination des athlètes canadiens ont été évidents dans chaque épreuve, reflétant des années de préparation intensive et de dévouement.</p>
            
            <h2>Highlights de la journée</h2>
            <p>Les épreuves de patinage artistique ont particulièrement captivé l'attention, avec des performances techniquement impeccables et artistiquement magnifiques. Le hockey sur glace a également offert des matchs intenses et disputés.</p>
            
            <p>Les conditions météorologiques difficiles ont ajouté un défi supplémentaire pour les athlètes des épreuves extérieures, qui ont dû adapter leurs stratégies en conséquence.</p>
            
            <h2>L'esprit olympique</h2>
            <p>Au-delà des médailles, ces Jeux ont démontré les valeurs fondamentales du sport : le respect, l'excellence et l'amitié. Les athlètes canadiens ont incarné ces valeurs à travers leurs performances et leur comportement.</p>
            
            <p>Les Canadiens à travers le pays continuent de soutenir passionnément leur équipe, créant une atmosphère d'unité nationale et de fierté collective.</p>
        `
    }
};

// Fonction pour obtenir un article par ID
function getArticleById(id) {
    return articles[id] || null;
}

// Fonction pour obtenir tous les articles
function getAllArticles() {
    return Object.values(articles);
}
