//npm -v
//npm init
//npm install mysql2
//!!node_modules!!

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'aplikacija',
    password: 'aplikacija',
    database: 'aplikacija'
})

connection.query(
    'SELECT * FROM category WHERE parent__category_id = ?;',
    [ 1 ],
    prikaziKategorije
);

function prikaziKategorije(error, categories, fields) {
    if (error) {
        console.log('Doslo je do neke greske: ',error);
        return;
    }

    for (let category of categories) {
        console.log('Ucitana kategorija:',category.name)
    }
}