const Budget = require('./model/budget')
const keys = Object.keys(Budget[0]);
keys.splice(1, 1);
const newKeys = Object.keys(Budget[0]);
newKeys.splice(3, 2);

const pages = {
    indexPage: (req, res) => {
        res.render('index.ejs', { Budget });
    },
    showPage: (req, res) => {
        res.render('show.ejs', { item: Budget[req.params.index], keys, index: req.params.index });
    },
    newPage: (req, res) => {
        res.render('new.ejs', { keys: newKeys })
    },
    createItem: (req, res) => {
        if (req.body.income === 'on') {
            req.body.amount = Math.abs(req.body.amount);
        } else {
            if (req.body.amount > 0) req.body.amount = -1 * req.body.amount
        }
        if (!Array.isArray(req.body.tags)) {
            let tags = [];
            if(req.body.tags.includes(",")) {
                tags = req.body.tags.split(",")
            } else {
                tags.push(req.body.tags);
            }
            req.body.tags = tags;
        }
        Budget.push(req.body);
        res.redirect('/budget');
    },
    deleteItem: (req, res) => {
        Budget.splice(req.params.index, 1); //remove the item from the array
        res.redirect('/budget'); //redirect back to index route
    },
    editPage: (req, res) => {
        res.render(
            'edit.ejs', //render views/edit.ejs
            {
                item: Budget[req.params.index], //the fruit object
                index: req.params.index, //... and its index in the array
                keys: newKeys
            }
        );
    },
    updateItem: (req, res) => {
        if (req.body.income === 'on') {
            req.body.amount = Math.abs(req.body.amount)
        } else {
            if (req.body.amount > 0) req.body.amount = -1 * req.body.amount
        }
        if (!Array.isArray(req.body.tags)) {
            let tags = [];
            if(req.body.tags.includes(",")) {
                tags = req.body.tags.split(",")
            } else {
                tags.push(req.body.tags);
            }
            req.body.tags = tags;
        }
        Budget[req.params.index] = req.body; //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
        res.redirect('/budget'); //redirect to the index page
    }
}

module.exports = pages;

