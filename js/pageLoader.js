/**
 * Created by Charles on 25/01/2017.
 */


function loadHomePage() {
    $homePage.removeClass('hide');
    $moviePage.addClass('hide');

}

function loadMoviePage() {
    $homePage.addClass('hide');
    $moviePage.removeClass('hide');
}