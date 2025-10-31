const fs = require('fs');
const db = require('./model')
function Context(){
    this.init();
}

Context.prototype.init = function(){
    this.storageRoot = process.cwd() + '/data';
    if (!fs.existsSync(this.storageRoot))
        fs.mkdirSync(this.storageRoot)
    this.db = db(this);
}

module.exports = Context;