'use strict';

/**
 * Operations on /pets/{id}
 */
module.exports = {
    
    /**
     * Returns a user based on a single ID, if the user does not have access to the pet
     * parameters: id
     * produces: application/json, application/xml, text/xml, text/html
     */
    get: function findPetById(req, res) {
        res.sendStatus(501);
    }, 
    
    /**
     * deletes a single pet based on the ID supplied
     * parameters: id
     * produces: 
     */
    delete: function deletePet(req, res) {
        res.sendStatus(501);
    }
    
};
