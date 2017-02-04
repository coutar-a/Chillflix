/**
 * Created by Charles on 25/01/2017.
 */

function PageLoader() {

    this.loadHomePage = function () {
        $("#homePage").removeClass('hide');
        $("#actorPage").addClass('hide');
        $("#moviePage").addClass('hide');
        $("#seriesPage").addClass('hide');
        //
        collapseSideNav()
    };

    this.loadMoviePage = function () {
        $("#homePage").addClass('hide');
        $("#actorPage").addClass('hide');
        $("#moviePage").removeClass('hide');
        $("#seriesPage").addClass('hide');
        //
        collapseSideNav()
    };

    this.loadActorPage = function () {
        $("#homePage").addClass('hide');
        $("#actorPage").removeClass('hide');
        $("#moviePage").addClass('hide');
        $("#seriesPage").addClass('hide');
        //
        collapseSideNav()
    };

    this.loadTVShowPage = function () {
        $("#homePage").addClass('hide');
        $("#actorPage").addClass('hide');
        $("#moviePage").addClass('hide');
        $("#seriesPage").removeClass('hide');
        //
        collapseSideNav();
    };

    this.loadUserProfilePage = function () {
        $("#homePage").addClass('hide');
        $("#actorPage").addClass('hide');
        $("#moviePage").addClass('hide');
        $("#seriesPage").addClass('hide');
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

    this.userLogout = function () {
        // TODO (Remise 3)

        //
        collapseSideNav()
    };

    this.goToURL = function (URL) {
        location.href = URL;
    };
}

//

function collapseSideNav() {
    $('.button-collapse').sideNav('hide');
}









