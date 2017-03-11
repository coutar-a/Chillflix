/**
 * Created by Charles on 25/01/2017.
 */
function $init() {

    // jQuery initialisation :
    $(document).ready(function () {


        // App start :
        new AppView();
        // CSS initialisation : must be called *last*
        $(".button-collapse").sideNav();

    });

    // Ajax initialisation :
    $(document).ajaxStart(function () {
        $(document.body).css({'cursor': 'wait'});
    }).ajaxStop(function () {
        $(document.body).css({'cursor': 'default'});
    });
}