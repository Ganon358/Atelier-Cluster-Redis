# Atelier-Cluster-Redis

# Partie 1: Installation et Configuration du Cluster Redis

## Choix de l'Environnement

Pour ce devoir, nous allons opter pour une configuration via Docker, ce qui permettra de simuler un environnement de cluster Redis de manière isolée et reproductible.
Installation de Redis via Docker

Tout d'abord, nous devons installer Docker sur notre machine si ce n'est pas déjà fait. Pour cela, rendez-vous sur le site officiel de Docker et suivez les instructions d'installation appropriées pour votre système d'exploitation.

Une fois Docker installé, nous allons utiliser une image Redis pour créer nos conteneurs. Ouvrez un terminal et exécutez la commande suivante pour télécharger l'image Redis depuis Docker Hub :

```shell
    docker pull redis
``` 
Pour l'image nous allons faire une build puis faire un compose don les services sont décrit dans la fichier "docker-compose.yml"

```shell
    docker-compose build

    docker-compose up    
```

# Partie 2: Premiers Pas avec le Cluster Redis

Pour cette partie nous allons exécuter une commande à l'intérieur d'une de nos image Redis, pour cela nous allons faire un docker exect, vous pouvez aussi faire un redis-cli mais cela sera moin propre.

```shell
    docker exec -it nom-de-limage-redis redis-cli -c -h 127.0.0.1 -p 7000  
```

Injection de Données

Maintenant que nous sommes à l'intérieur du cluster Redis, nous pouvons injecter des données de différents types dans les instances Redis.

Pour insérer des chaînes de caractères (Strings), utilisez la commande SET :

```shell
    SET mykey "Hello"
```
Pour insérer des éléments dans une liste (Lists), utilisez la commande LPUSH :

```shell
    LPUSH mylist "world"
```
Pour insérer des éléments dans un ensemble (Sets), utilisez la commande SADD :

```shell
    SADD myset "foo"
```
Pour insérer des champs et des valeurs dans un hachage (Hashes), utilisez la commande HSET :

```shell
    HSET myhash field1 "value1"
```
Pour insérer des éléments dans un ensemble ordonné (Sorted Sets), utilisez la commande ZADD :

```shell
    ZADD myzset 1 "one"
``` 

Dans notre cas nous allons d'abord insérer de la donnée grace à ne commande SET:

```shell
    SET user:1 '{"lastName": "Entrer-un-lastname", "firstName": "Entrer-un-firstname", "age": Entrer-un-age}'
```

Pour savoir si cela à archer nous allons l'afficher avec la commande get

```shell
    GET user:1
```
évidemment si votre user est nommé différament n'oubliez pas de le changer aussi dans le GET

# 3 Intégration de Redis dans un Projet Existent

## Objectifs

L'objectif de cette partie est d'utiliser Redis comme entrepôt de données et comme système de cache dans une application existante.

## Étapes à Réaliser

1. **Intégration dans un Projet Existant** :
   - Si possible, intégrez Redis dans un projet existant.
   - Utilisez Redis pour le stockage de données et/ou comme cache.

## Documentation

**1. Installation de Redis :**
   - Assurez-vous d'avoir Redis installé sur votre système. Vous pouvez le faire en suivant les instructions spécifiques à votre système d'exploitation disponibles sur le site officiel de Redis.

**2. Configuration de Redis dans le Projet :**
   - Installez le client Redis pour votre langage de programmation (par exemple, `redis` pour Node.js).
   - Initialisez une connexion Redis dans votre application en utilisant les informations de connexion appropriées (hôte, port, etc.).
   - Utilisez Redis pour le stockage de données et/ou comme cache dans votre projet.

Tester votre fichier javascriptt avec la commande:

```shell
    node script.js
``` 

## Conclusion

L'intégration de Redis dans votre projet offre plusieurs avantages, notamment des performances améliorées, une gestion efficace des données et la possibilité de mettre en cache des données fréquemment utilisées. En suivant les étapes ci-dessus et en utilisant Redis de manière appropriée, vous pouvez améliorer les fonctionnalités et les performances de votre application de manière significative.


# Partie 4: Introspection sur l'Intégration de Redis

## Objectifs

L'objectif de cette partie est d'analyser l'impact potentiel de l'intégration de Redis dans des projets futurs.

## Évaluation des Projets Actuels

- **Projets Web Dynamiques** :
  - **Avantages Potentiels** : Dans les applications web dynamiques, Redis peut être intégré pour gérer les sessions utilisateur, mettre en cache des données fréquemment utilisées, et améliorer les performances globales de l'application.

- **Applications de Jeux Vidéo en Temps Réel** :
  - **Avantages Potentiels** : Pour les applications de jeux vidéo en temps réel, Redis peut être utilisé pour gérer les scores des joueurs, les données de session, et les mises à jour en temps réel, offrant ainsi une expérience de jeu plus fluide et réactive.

- **Applications de Commerce Électronique** :
  - **Avantages Potentiels** : Dans les applications de commerce électronique, Redis peut être utilisé pour mettre en cache les produits populaires, gérer les sessions utilisateur, et traiter les commandes en temps réel, ce qui peut améliorer l'expérience d'achat des utilisateurs.

## Restitution

L'intégration de Redis dans différents types de projets offre plusieurs avantages potentiels, notamment :

- **Amélioration des performances** : En mettant en cache les données fréquemment utilisées et en réduisant la charge sur la base de données principale, Redis peut améliorer les performances globales de l'application.
- **Scalabilité** : Avec son architecture distribuée et sa capacité à fonctionner en mode cluster, Redis permet à l'application de s'adapter à une augmentation de la charge sans compromettre les performances.
- **Gestion des données en temps réel** : Pour les applications qui nécessitent une gestion des données en temps réel, Redis offre des fonctionnalités telles que la pub/sub, les structures de données complexes, et les transactions atomiques.

En conclusion, l'intégration de Redis dans des projets futurs peut offrir des avantages significatifs en termes de performances, de scalabilité et de gestion des données en temps réel. Il est important d'évaluer attentivement les besoins spécifiques de chaque projet et de déterminer comment Redis peut être utilisé de manière optimale pour répondre à ces besoins.
