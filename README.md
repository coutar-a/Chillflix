# Chillflix (EN)

A netflix-like website created for the class GLO-3102 (H17). The website uses the API given by the teachers which is linked to a database containing films and actors.

## Installation

This project uses [NodeJS](https://nodejs.org/en/) to load the frontend.

1. Clone the repository on your computer
2. Run ```npm install``` at the project's root to install the dependencies.

## Launching the app

* Run ```npm start``` at the project's root to start the local server on port ```8080``` 

* Open ```index.html``` in your browser to start using the app.

# Chillflix (FR)

### Installer Git
Suivre le guide d'installation de Git pour votre poste de travail :
* [Windows](http://www.git-scm.com/book/en/Getting-Started-Installing-Git#Installing-on-Windows)
* [Mac](http://www.git-scm.com/book/en/Getting-Started-Installing-Git#Installing-on-Mac)
* [Linux](http://www.git-scm.com/book/en/Getting-Started-Installing-Git#Installing-on-Linux)

### Télécharger le code source
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

### Lancer l'application

* Lancer la commande suivante dans un terminal à la racine du dépot installer les dépendences:
```
	npm install
```

* Ensuite lancer la commande suivante pour lancer le serveur local sur le port 8080:

```
	npm start
```

* Puis lancez index.html dans votre navigateur.

## Design

### Fonctionnalités Avancées

- Intégration gravatar : Si l'utilisateur s'est inscrit sur gravatar avec la même adresse email que sur CHillflix, Son avatar sera affiché dans son profil.
