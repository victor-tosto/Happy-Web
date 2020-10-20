const Database = require('sqlite-async');

function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            info TEXT,
            wpp TEXT,
            images TEXT,
            instructions TEXT,
            visits TEXT,
            open_on_weekends TEXT
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)