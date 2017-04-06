/**
 * Created by Charles on 03/04/2017.
 */
Handlebars.registerHelper('searchResultItem', function (object) {
    var wrapperType = Handlebars.escapeExpression(object.wrapperType),
        html = "";

    if (wrapperType == "") wrapperType = "user";
    switch (wrapperType) {

        case "track" : {
            html =
                '<li>' +
                '<div class="collapsible-header"><i class="material-icons">movie</i>' + object.trackName + '</div>' +
                '<div class="collapsible-body"><span>' +
                '<div class="right"><a data-action="' + wrapperType + ' t:' + object.trackId + ' a:' + object.artistId + ' c:' + object.collectionId + ' u:' + object.id + '" ' +
                'class="waves-effect waves-light btn right searchResultsItemButton">Go to movie page</a></div>' +
                '<div class="left"><a data-action="buttonAddToWatchlist" data-href="' + object.trackId + '" class="buttonAddToWatchlist waves-effect waves-light btn right"><i class="material-icons right">add</i>Add to watchlist</a></div>' +
                '<h5 class="center title blue-text">' + object.trackName + '</h5>' +
                '<div class="center grey-text">' + object.primaryGenreName  + " : " + object.artistName + '</div>' +
                '<div class="center"><img src="' + object.artworkUrl100 + '" alt=""></div>' +
                '</span></div>' +
                '</li >';

            break;
        }

        case "collection" : {
            html =
                '<li>' +
                '<div class="collapsible-header"><i class="material-icons">list</i>' + object.collectionName + '</div>' +
                '<div class="collapsible-body"><span>' +
                '<div class="right"><a data-action="' + wrapperType + ' t:' + object.trackId + ' a:' + object.artistId + ' c:' + object.collectionId + ' u:' + object.id + '" ' +
                'class="waves-effect waves-light btn right searchResultsItemButton">Go to season page</a></div>' +
                '<div class="left"><a disabled class="addToWatchlist waves-effect waves-light btn right"><i class="material-icons right">add</i>Add to watchlist</a></div>' +
                '<h5 class="center title blue-text">' + object.collectionName + '</h5>' +
                '<div class="center grey-text">' + object.primaryGenreName  + " : " + object.trackCount + " episodes" + '</div>' +
                '<div class="center"><img src="' + object.artworkUrl100 + '" alt=""></div>' +
                '</span></div>' +
                '</li >';

            break;
        }

        case "artist" : {
            html =
                '<li>' +
                '<div class="collapsible-header"><i class="material-icons">recent_actors</i>' + object.artistName + '</div>' +
                '<div class="collapsible-body"><span>' +
                '<div class="right"><a data-action="' + wrapperType + ' t:' + object.trackId + ' a:' + object.artistId + ' c:' + object.collectionId + ' u:' + object.id + '" ' +
                'class="waves-effect waves-light btn right searchResultsItemButton">Go to artist page</a></div>' +
                '<div class="left"><a disabled class="addToWatchlist waves-effect waves-light btn right"><i class="material-icons right">add</i>Add to watchlist</a></div>' +
                '<h5 class="center title blue-text">' + object.artistName + '</h5>' +
                '<div class="center grey-text">' + object.artistType  + " : " + object.primaryGenreName + '</div>' +
                '</span></div>' +
                '</li >';

            break;
        }

        case "user" : {
            html =
                '<li>' +
                '<div class="collapsible-header"><i class="material-icons">perm_identity</i>' + object.email + '</div>' +
                '<div class="collapsible-body"><span>' +
                '<div class="right"><a data-action="' + wrapperType + ' t:' + object.trackId + ' a:' + object.artistId + ' c:' + object.collectionId + ' u:' + object.id + '" ' +
                'class="waves-effect waves-light btn right searchResultsItemButton">Go to user profile</a></div>' +
                '<div class="left"><a data-action="buttonFollowUser" data-href="' + object.id + '" class="buttonFollowUser waves-effect waves-light btn right"><i class="material-icons right">thumb_up</i>Follow user</a></div>' +
                '<h5 class="center title blue-text">' + object.email + '</h5>' +
                '<div class="center grey-text">' + object.name  + '</div>' +
                '</span></div>' +
                '</li >';
            break;
        }

    }

    return new Handlebars.SafeString(
        html
    );
});