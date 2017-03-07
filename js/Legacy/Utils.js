/**
 * Classe statique 'Utilities'
 */
var Utils = {

    /**
     * Vérifie si l'objet est de type 'Movie'
     * @param jsonObject : JSON | Objet à vérifier
     */
    objectIsMovie : function(jsonObject) {
        console.log(jsonObject);
        return jsonObject.wrapperType == "track";
    }

};