/**
 * Classe représentant un film et ses attributs.
 * @param movieObject : JSON | Object JSON représentant le film
 */
function Movie(movieObject) {

    // Meta data :
    this.trackId = movieObject.trackId;
    this.wrapperType = movieObject.wrapperType;
    this.kind = movieObject.kind;

    // URLs :
    this.trackViewUrl = movieObject.trackViewUrl;
    this.previewUrl = movieObject.previewUrl;

    // Images :
    this.artworkUrl30 = movieObject.artworkUrl30;
    this.artworkUrl60 = movieObject.artworkUrl60;
    this.artworkUrl100 = movieObject.artworkUrl100;

    // Movie infos :
    this.trackName = movieObject.trackName;
    this.artistName = movieObject.artistName;
    this.releaseDate = movieObject.releaseDate;
    this.trackTimeMillis = movieObject.trackTimeMillis;
    this.country = movieObject.country;
    this.longDescription = movieObject.longDescription;

    // TODO : Ajouter les autres attributs manquants.


}