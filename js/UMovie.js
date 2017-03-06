/**
 * Classe statique encapsulant les appels à l'API de UMovie.
 * Documentation de l'API : https://github.com/GLO3102/UMovie/wiki/2-API
 */
var UMovie = {

    /**
     * Retourne un film selon le id passé en argument
     * @param id : int | Id du film
     * @param callback : function | Fonction à exécuter une fois le traitement terminé
     */
    getMovieByID: function (id, callback) {
        $.ajax({
            url: 'http://umovie.herokuapp.com/unsecure/movies/' + id, // Enlever unsecure pour le livrable 3.
            type: 'GET',
            success: function (result) {
                var movieObject = result.results[0];
                callback(new Movie(movieObject));
            }
        });
    },

    /**
     * Retourne une liste de média selon les mots clés passés en argument
     * @param keywords : string | Mot-clés pour la recherche
     * @param callback : function | Fonction à exécuter une fois le traitement terminé
     * @param limit : int | (Facultatif) Nombre maximum d'objets à retourner par la recherche
     */
    searchByKeywords: function (keywords, callback, limit) {

        if (limit == undefined) limit = 10;
        $.ajax({
            url: 'http://umovie.herokuapp.com/unsecure/search?q=' + keywords + "&limit=" + limit, // Enlever unsecure pour le livrable 3.
            type: 'GET',
            success: function (result) {
                console.log(result.results);
                callback(result.results);
            }
        });
    }


};
