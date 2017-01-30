/**
 * Created by Charles on 25/01/2017.
 */


function loadHomePage() {
    $homePage.removeClass('hide');
    $actorPage.addClass('hide');
    $moviePage.addClass('hide');
    $seriesPage.addClass('hide');

    pauseVideo();
    $('.button-collapse').sideNav('hide');
}

function loadMoviePage() {
    $homePage.addClass('hide');
    $actorPage.addClass('hide');
    $moviePage.removeClass('hide');
    $seriesPage.addClass('hide');

    pauseVideo();
    $('.button-collapse').sideNav('hide');
}

function loadActorPage() {
    $homePage.addClass('hide');
    $actorPage.removeClass('hide');
    $moviePage.addClass('hide');
    $seriesPage.addClass('hide');

    pauseVideo();
    $('.button-collapse').sideNav('hide');
}

function loadSeriesPage() {
    $homePage.addClass('hide');
    $actorPage.addClass('hide');
    $moviePage.addClass('hide');
    $seriesPage.removeClass('hide');

    pauseVideo();
    $('.button-collapse').sideNav('hide');
}

function loadWatchlistsPage() {
    // Plus tard

    pauseVideo();
    $('.button-collapse').sideNav('hide');
}


function loadSettingsPage() {
    // Plus tard

    pauseVideo();
    $('.button-collapse').sideNav('hide');
}

function userLogout() {
    // Plus tard

    pauseVideo();
    $('.button-collapse').sideNav('hide');
}

function pauseVideo() {
    /** TODO : Trouver une solution pour stopper / mettre sur pause la vidéo. */
}


