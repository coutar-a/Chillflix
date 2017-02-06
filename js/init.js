/**
 * Created by Charles on 25/01/2017.
 */

var pageLoader;
var user;

//

function $init() {

    // jQuery initialisation :
    $( document ).ready(function(){

        pageLoader = new PageLoader();
        user = new User("johnsmith@ulaval.ca", "motdepasse");
        user.login(); // Génère un nouveau token pour l'utilisateur.

        // Navigation :
        $(".button-collapse").sideNav();

        // Events :
        $(".buttonHome").click(function(e) {
           pageLoader.loadHomePage();
        });
        $(".buttonWatchlistsPage").click(function(e) {
           pageLoader.loadWatchlistsPage();
        });
        $(".buttonMoviePage").click(function(e) {
            pageLoader.loadMoviePage();
        });
        $(".buttonActorPage").click(function(e) {
            pageLoader.loadActorPage();
        });
        $(".buttonTVShowPage").click(function(e) {
            pageLoader.loadTVShowPage();
        });
        $(".buttonUserProfile").click(function(e) {
            pageLoader.loadUserProfilePage();
        });
        $(".buttonUserParameters").click(function(e) {
            pageLoader.loadUserSettingsPage();
        });
        $(".buttonUserLogout").click(function(e) {
            pageLoader.userLogout();
        });
        $(".buttoniTunes").click(function(e){
            pageLoader.goToURL($(this).attr('href'));
        })


    })
}