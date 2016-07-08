'use strict';
var dataProvider = require('../../../data/api/words/top-words.js');
/**
 * Operations on /api/words/top-words
 */
module.exports = {
    /**
     * summary: Gets top words in the passed text
     * description: 
     * parameters: count, textInput
     * produces: application/json
     * responses: 200
     */
    post: function getTopWords(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
