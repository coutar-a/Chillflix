/**
 * Classe fesant la gestion de l'affichage des pages
 * TODO : Voir si on garde ce concept ou pas.
 */
function PageLoader() {

    this.loadHomePage = function () {
        $("#homePage").removeClass('hide');
        $("#actorPage").addClass('hide');
        $("#moviePage").addClass('hide');
        $("#seriesPage").addClass('hide');
        $("#searchPage").addClass('hide');
        //
        collapseSideNav()
    };

    this.loadMoviePage = function (movie) {
        $("#homePage").addClass('hide');
        $("#actorPage").addClass('hide');
        $("#moviePage").removeClass('hide');
        $("#seriesPage").addClass('hide');
        $("#searchPage").addClass('hide');
        collapseSideNav();
        //
        // TODO : Afficher le contenu de la page avec l'objet movie
    };

    this.loadActorPage = function () {
        $("#homePage").addClass('hide');
        $("#actorPage").removeClass('hide');
        $("#moviePage").addClass('hide');
        $("#seriesPage").addClass('hide');
        $("#searchPage").addClass('hide');
        //
        collapseSideNav()
    };

    this.loadTVShowPage = function () {
        $("#homePage").addClass('hide');
        $("#actorPage").addClass('hide');
        $("#moviePage").addClass('hide');
        $("#seriesPage").removeClass('hide');
        $("#searchPage").addClass('hide');
        //
        collapseSideNav();
    };

    this.loadSearchPage = function (searchResults) {
        $("#homePage").addClass('hide');
        $("#actorPage").addClass('hide');
        $("#moviePage").addClass('hide');
        $("#seriesPage").addClass('hide');
        $("#searchPage").removeClass('hide');
        collapseSideNav();
        //
        clearResultsList();
        for (var i = 0; i < searchResults.length; ++i) {
            addListItem(searchResults[i]);
        }
    };

    this.loadUserProfilePage = function () {
        $("#homePage").addClass('hide');
        $("#actorPage").addClass('hide');
        $("#moviePage").addClass('hide');
        $("#seriesPage").addClass('hide');
        $("#searchPage").addClass('hide');
        /** TODO :
         *  Ajouter $("#userProfilePage").addClass('hide')
         *  dans les autres méthodes lorsque la page
         *  sera terminée.
         */

        //
        collapseSideNav();
    };

    this.loadWatchlistsPage = function () {
        $("#homePage").addClass('hide');
        $("#actorPage").addClass('hide');
        $("#moviePage").addClass('hide');
        $("#seriesPage").addClass('hide');
        $("#searchPage").addClass('hide');
        /** TODO :
         *  Ajouter $("#watchlistsPage").addClass('hide')
         *  dans les autres méthodes lorsque la page
         *  sera terminée.
         */

        //
        collapseSideNav()
    };

    this.loadUserSettingsPage = function () {
        // TODO (Remise 3)

        //
        collapseSideNav()
    };

    this.userLogin = function () {

    };

    this.userLogout = function () {
        // TODO (Remise 3)

        //
        collapseSideNav()
    };

    this.goToURL = function (URL) {
        location.href = URL;
    };

    // TODO : Améliorer et réfactor
    var addListItem = function (media) {
        var item = document.createElement('li');
        //
        var name;
        if (Utils.objectIsMovie(media)) {
            name = media.trackName;
        } else {
            name = media.collectionName;
        }
        item.appendChild(document.createTextNode(name));
        //
        document.getElementById('searchResultsList').appendChild(item);
    };

    var clearResultsList = function() {
        $("#searchResultsList").empty();
    }
}

//

/**
 * Ferme le menu rétractable mobile.
 */
function collapseSideNav() {
    $('.button-collapse').sideNav('hide');
}









