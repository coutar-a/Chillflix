function $init() {

    // jQuery initialisation :
    $(document).ready(function () {


        // App start :
        new AppView();

        Handlebars.registerHelper("moduloIf", function(index_count,mod,block) {

            if(parseInt(index_count)%(mod)=== 0){
                return block.fn(this);}
        });

        // Autocompletion
        $('input.autocomplete').autocomplete({
            data: {
                "Apple": null,
                "Microsoft": null,
                "Google": 'http://placehold.it/250x250'
            },
            limit: 20 // The max amount of results that can be shown at once. Default: Infinity.
        });
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