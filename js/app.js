/**
 * Created by Charles on 25/01/2017.
 */
function $init() {

    // jQuery initialisation :
    $(document).ready(function () {

        // CSS initialisation :
        $(".button-collapse").sideNav();

        // App start :
        new AppView();

    });

    // Ajax initialisation :
    $(document).ajaxStart(function () {
        $(document.body).css({'cursor': 'wait'});
    }).ajaxStop(function () {
        $(document.body).css({'cursor': 'default'});
    });
}