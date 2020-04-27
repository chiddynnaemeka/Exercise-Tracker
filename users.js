const router = require('express').Router();
//need express router as this is a route we a creating
let User = require('../models/user.model');
//the mongoose model we created

router.route('/').get((req,res) => {
    User.find() //mongoose method to get a list of all users in DB. Results are returned in json format
        .then(users => res.json(users)) //retrun users got from DB in json format
        .catch(err => res.status(400).json('Error ' + err)); //if there is an error return error
});
//endpoint to handle http get requests for the /users url path

router.route('/add').post((req,res) => {
    console.log("I made it");
    const username = req.body.username;
    console.log(req.body);

    const newUser = new User({username});
    //using unsername to create new user

    newUser.save()
        .then(() => res.json('User added')) //after user saved to DB return user added message
        .catch(err => res.status(400).json('Error ' + err)); //if there is an error return error

});
// handle http post requests


module.exports = router;
//exporting the router