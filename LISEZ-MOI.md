# MicroIntern — guide de démarrage pour débutant

Bienvenue ! Ce dossier contient un petit site vitrine en français. Il utilise seulement HTML, CSS et JavaScript : il n’y a pas de framework, de serveur applicatif, de base de données ni de service externe nécessaire.

## 1. Les fichiers du projet

```text
MicroIntern/
├── index.html          page d’accueil
├── services.html       les cinq catégories de services
├── mission.html        exemple de mission détaillée
├── apropos.html        présentation de MicroIntern
├── contact.html        formulaire de démonstration
├── css/
│   └── style.css       couleurs, mise en page et adaptation mobile
├── js/
│   └── main.js         menu mobile et confirmation du formulaire
└── images/
    └── logo.jpg        logo fourni pour le projet
```

Les prix sont indiqués « sur devis », « à convenir », « à définir » ou « non spécifié ». Les formulaires de contact et d’avis ne transmettent rien : ils montrent seulement une confirmation dans la page. La page Contact comprend aussi une note interactive de 1 à 5 étoiles. Le téléphone, l’e-mail, l’adresse, les horaires et les réseaux sociaux sont signalés comme informations à compléter.

## 2. Ouvrir le projet dans VS Code ou Cursor

1. Téléchargez puis décompressez `MicroIntern.zip` dans un endroit facile à retrouver, par exemple le Bureau ou Documents. Si vous lisez ce guide dans le dossier déjà décompressé, passez à l’étape suivante.
2. Installez et ouvrez **Visual Studio Code** ou **Cursor**.
3. Dans le menu en haut, choisissez **Fichier**, puis **Ouvrir un dossier…**.
4. Sélectionnez le dossier nommé **MicroIntern** (celui qui contient `index.html`) et validez.
5. À gauche, vous verrez la liste des fichiers. Cliquez deux fois sur un nom pour l’ouvrir. Pour commencer, choisissez `index.html`.

Vous pouvez également ouvrir le dossier MicroIntern dans l’Explorateur de fichiers, puis faire un clic droit et choisir **Ouvrir avec Code** ou **Ouvrir avec Cursor**, si cette option apparaît.

## 3. Afficher le site avec Python (méthode recommandée)

Cette méthode fait fonctionner le site depuis votre ordinateur comme un petit site local.

1. Dans VS Code ou Cursor, vérifiez que le dossier **MicroIntern** est ouvert.
2. Ouvrez le terminal intégré : choisissez **Terminal** dans le menu, puis **Nouveau terminal**. Une zone de texte s’ouvre en bas.
3. Vérifiez que le terminal est dans le dossier `MicroIntern`. Le nom du dossier apparaît généralement à la fin de la ligne. Sinon, ouvrez un nouveau terminal après avoir ouvert le bon dossier.
4. Tapez cette commande puis appuyez sur **Entrée** :

   ```text
   python -m http.server 8000
   ```

   Si Windows indique que `python` n’est pas reconnu, essayez :

   ```text
   py -m http.server 8000
   ```

5. Laissez cette fenêtre de terminal ouverte pendant la visite du site.
6. Ouvrez votre navigateur (Chrome, Edge, Firefox…) et saisissez cette adresse dans la barre tout en haut : **http://localhost:8000**. Appuyez sur **Entrée**.
7. Pour voir les autres pages, utilisez les liens du menu : **Services**, **Mission vedette**, **À propos** et **Nous contacter**.
8. Quand vous avez terminé, revenez au terminal, cliquez dedans et appuyez sur **Ctrl + C**. Cela arrête le petit serveur local.

Le site n’est visible ainsi que sur votre ordinateur. Pour le partager avec d’autres personnes, il faudra plus tard l’héberger sur un service de publication web.

## 4. Autre méthode : l’extension Live Server

1. Dans VS Code, ouvrez l’onglet **Extensions** à gauche (icône en forme de petits carrés).
2. Recherchez **Live Server**, puis installez l’extension publiée par **Ritwick Dey**.
3. Revenez à `index.html`, faites un clic droit dans le fichier et choisissez **Open with Live Server**.
4. Le navigateur s’ouvre automatiquement sur une adresse locale. Pour arrêter Live Server, cliquez sur **Port: 5500** en bas de la fenêtre de VS Code, ou fermez l’éditeur.

Si cette option n’apparaît pas dans Cursor, utilisez la méthode Python ci-dessus.

## 5. Modifier les textes, les couleurs et le logo

### Changer un texte

Ouvrez la page concernée (par exemple `index.html` pour l’accueil), cliquez dans le texte à remplacer, modifiez-le puis enregistrez avec **Ctrl + S**. Revenez au navigateur et actualisez la page avec **Ctrl + R**.

### Changer les couleurs

Ouvrez `css/style.css`. Tout en haut, les couleurs principales sont regroupées dans `:root` :

```css
:root {
  --cream: #f5f1e8;     /* fond crème */
  --ink: #27343a;       /* texte sombre */
  --teal: #26766f;      /* boutons et accents turquoise */
}
```

Changez le code après `#` (six caractères) pour choisir une autre couleur. Enregistrez, puis actualisez la page. Pour retrouver un code couleur, cherchez « sélecteur de couleur hexadécimal » sur le web ou utilisez le sélecteur intégré de votre éditeur.

### Remplacer le logo

Préparez votre nouvelle image au format JPG ou PNG. Copiez-la dans le dossier `images`, puis renommez-la `logo.jpg` (ou adaptez le nom dans les pages HTML si le fichier est en PNG). Gardez le nom `logo.jpg` pour éviter d’avoir à modifier les pages. Le logo actuel est utilisé à plusieurs endroits et reste dans le dossier.

## 6. Avant de publier le site

Remplacez les indications « à compléter » par les coordonnées confirmées de MicroIntern. Vérifiez également le contenu de l’exemple de mission et précisez ses dates, sa durée et sa rémunération avant de la présenter comme une offre réelle. Le formulaire est uniquement visuel : pour recevoir des messages, il faudra ensuite le connecter à un service de formulaire ou à un serveur.

Bonne découverte !
