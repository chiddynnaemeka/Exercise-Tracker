const router = require('express').Router();
//need express router as this is a route we a creating
let Excercise = require('../models/excercise.model');
//the mongoose model we created

router.route('/').get((req,res) => {
    Excercise.find() //mongoose method to get a list of all users in DB. Results are returned in json format
        .then(excercises => res.json(excercises)) //retrun users got from DB in json format
        .catch(err => res.status(400).json('Error ' + err)); //if there is an error return error
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExcercise = new Excercise({
        username,
        description,
        duration,
        date,
    });

    newUser.save()
        .then(() => res.json('Excercise added')) //after excercise saved to DB return excercise added message
        .catch(err => res.status(400).json('Error ' + err)); //if there is an error return error

});

router.route('/:id').get((req,res) => {
    Excercise.findById(req.params.id)
        .then(excercise => res.json(excercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    Excercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Excercise deleted'))
        .catch(err => res.status(400).json('Error '+ err));
});

router.route(':/update/:id').post((req,res) => {
    Excercise.findById(req.params.id)
        .then(excercise => {
            excercise.username = req.body.username;
            excercise.description = req.body.description;
            excercise.duration =Number(req.body.duration);
            excercise.date = Date.parse(req.body.date);

            excercise.save()
                .then(() => res.json('Excercise updated'))
                .catch(err => res.json(400).json('Error '+ err));
    })
    .catch(err => res.status(400).json('Error '+ err));
});

module.exports = router;