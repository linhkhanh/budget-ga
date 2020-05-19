const pages = require('./controller');

module.exports = (app) => {
    app.get('/budget', pages.indexPage);
    app.get('/budget/new', pages.newPage);
    app.post('/budget', pages.createItem);
    app.get('/budget/:index', pages.showPage);
    app.delete('/budget/:index', pages.deleteItem);
    app.get('/budget/:index/edit', pages.editPage);
    app.put('/budget/:index', pages.updateItem);
} 