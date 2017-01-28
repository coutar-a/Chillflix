/**
 * Created by Charles on 25/01/2017.
 */


function loadHomePage() {
    $homePage.removeClass('hide');
    $actorPage.addClass('hide');
    $moviePage.addClass('hide');
    $seriesPage.addClass('hide');
}

function loadMoviePage() {
    $homePage.addClass('hide');
    $actorPage.addClass('hide');
    $moviePage.removeClass('hide');
    $seriesPage.addClass('hide');
}

function loadActorPage() {
    $homePage.addClass('hide');
    $actorPage.removeClass('hide');
    $moviePage.addClass('hide');
    $seriesPage.addClass('hide');
}

function loadSeriesPage() {
    $homePage.addClass('hide');
    $actorPage.addClass('hide');
    $moviePage.addClass('hide');
    $seriesPage.removeClass('hide');
}

