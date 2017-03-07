/**
 * Created by Charles on 25/01/2017.
 */

var appView;
var user;

//

function $init() {

    // jQuery initialisation :
    $(document).ready(function () {
        // Services :
        user = new User("johnsmith@ulaval.ca", "motdepasse"); // Dummy user
        new AppView();
        // Side-Nav:
        $(".button-collapse").sideNav();
        // Events :
       /* $(".buttonHome").click(function (e) {
            appView.loadPage("home");
        });
        $(".buttonWatchlistsPage").click(function (e) {
            appView.loadPage("watchlist");
        });
        $(".buttonMoviePage").click(function (e) {
            appView.loadPage("movie");
        });
        $(".buttonActorPage").click(function (e) {
            appView.loadPage("actor");
        });
        $(".buttonTVShowPage").click(function (e) {
            appView.loadPage("tvshow");
        });
        $(".buttonUserProfile").click(function (e) {
            appView.loadPage("userprofile");
        });
        $(".buttonUserParameters").click(function (e) {
            appView.loadPage("settings");
        });
        $(".buttonUserLogout").click(function (e) {
            appView.loadPage("login");
        });
        $(".buttoniTunes").click(function (e) {
            pageLoader.goToURL($(this).attr('href'));
        });
        $(".searchBar").keyup(function (e) {
            if (e.keyCode == 13) {
                var keywords = $(this).context.value;
                // UMovie.searchByKeywords(keywords, appView.loadPage, 25); // TODO : Revoir
            }
            return false;
        });*/

    });

    // Ajax initialisation :
    $(document).ajaxStart(function () {
        $(document.body).css({'cursor': 'wait'});
    }).ajaxStop(function () {
        $(document.body).css({'cursor': 'default'});
    });
}