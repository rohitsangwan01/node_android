// Initialize express router
let router = require('express').Router();



// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'Server is Working',
        message: 'GetBaseAndroid is Properly initialised'
    });
})

//MongoController Requests
var MongoController = require('./MongoController');
router.route('/get').get(MongoController.get);
router.route('/get_all').post(MongoController.getAll);
router.route('/get_one').post(MongoController.getOne);
router.route('/get_byid').post(MongoController.getById);





// Export API routes
module.exports = router; 