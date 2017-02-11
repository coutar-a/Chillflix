/**
 * Created by Charles on 25/01/2017.
 */

var pageLoader;
var user;

//

function $init() {

    // jQuery initialisation :
    $(document).ready(function () {
        console.log("?");
        // Services :
        pageLoader = new PageLoader();
        pageLoader.loadHomePage();
        user = new User("johnsmith@ulaval.ca", "motdepasse"); // Dummy user

        // Navigation :
        $(".button-collapse").sideNav();
        // Events :
        $(".buttonHome").click(function (e) {
            pageLoader.loadHomePage();
        });
        $(".buttonWatchlistsPage").click(function (e) {
            pageLoader.loadWatchlistsPage();
        });
        $(".buttonMoviePage").click(function (e) {
            pageLoader.loadMoviePage();
        });
        $(".buttonActorPage").click(function (e) {
            pageLoader.loadActorPage();
        });
        $(".buttonTVShowPage").click(function (e) {
            pageLoader.loadTVShowPage();
        });
        $(".buttonUserProfile").click(function (e) {
            pageLoader.loadUserProfilePage();
        });
        $(".buttonUserParameters").click(function (e) {
            pageLoader.loadUserSettingsPage();
        });
        $(".buttonUserLogout").click(function (e) {
            pageLoader.userLogout();
        });
        $(".buttoniTunes").click(function (e) {
            pageLoader.goToURL($(this).attr('href'));
        });
        $(".searchBar").keyup(function (e) {
            console.log(e);
            if (e.keyCode == 13) {
                var keywords = $(this).context.value;
                UMovie.searchByKeywords(keywords, pageLoader.loadSearchPage, 25);
            }
            return false;
        });

    });

    // Ajax initialisation :
    $(document).ajaxStart(function () {
        $(document.body).css({'cursor': 'wait'});
    }).ajaxStop(function () {
        $(document.body).css({'cursor': 'default'});
    });
}