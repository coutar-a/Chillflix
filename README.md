# Chillflix

### Installer Git
Suivre le guide d'installation de Git pour votre poste de travail :
* [Windows](http://www.git-scm.com/book/en/Getting-Started-Installing-Git#Installing-on-Windows)
* [Mac](http://www.git-scm.com/book/en/Getting-Started-Installing-Git#Installing-on-Mac)
* [Linux](http://www.git-scm.com/book/en/Getting-Started-Installing-Git#Installing-on-Linux)

### Télécharger le code source
Créer un dossier sur votre machine pour conserver le code
Ouvrir un terminal et se déplacer dans ce dossier:
```
cd Workspace/
```
Cloner le répertoire umovie-h17-team-13-h17
```
git clone git@github.com:GLO3102/umovie-h17-team-13-h17.git
```

Cette version de Chillflix nécéssite l'utilisation de node.js.

### Installer Node JS
* Windows : http://nodejs.org/download/
* Mac : http://nodejs.org/download/
* Ubuntu 14.04 (pour autre version linux : [Documentation Node Linux](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager))
```
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

### Installer le serveur web

Exécuter la commande suivante dans un terminal :

```
npm install -g http-server
```

### Lancer l'application

Rendez-vous à la racine du dépôt, puis exécutez la commande suivante :
```
http-server ./js/templates/ --cors
```

Puis lancez index.html dans votre navigateur.