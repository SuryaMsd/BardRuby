const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ruby',
    password: 'root',
    port: 5432, // Your PostgreSQL port
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error connecting to the database', err);
    } else {
        console.log('Connected to the database');
    }
});

module.exports = pool;
