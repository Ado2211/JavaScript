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

connection
.promise()
//.query('SELECT * FROM category WHERE parent__category_id IS NULL;')
.query('SELECT * FROM category WHERE parent__category_id = ?;', [ 1 ])
.then(prikaziKategorije)
.catch(error => {
    console.log('Došlo je do greške: ',error);
})
/*.then(() => {
    connection.end(); ----zaustaviti app
});*/

function prikaziKategorije( [categories, fields ]) {
    for (let category of categories) {
        console.log('Učitana kategorija: ', category.name);
    }
}