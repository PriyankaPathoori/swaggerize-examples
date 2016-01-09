'use strict';

/**
 * Operations on /pets
 */
module.exports = {
    
    /**
     * Returns all pets from the system that the user has access to
     * parameters: tags, limit
     * produces: application/json, application/xml, text/xml, text/html
     */
    get: function findPets(req, res) {
        res.sendStatus(501);
    }, 
    
    /**
     * Creates a new pet in the store.  Duplicates are allowed
     * parameters: pet
     * produces: application/json
     */
    post: function addPet(req, res) {
        res.sendStatus(501);
    }
    
};
