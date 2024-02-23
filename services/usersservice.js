// controllers/userController.js
const connection = require('../db');

// Hàm lấy dữ liệu từ cơ sở dữ liệu
const getUsers = (callback) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            callback(err, null);
            return;
        }

        callback(null, results);
    });
};

module.exports = {
    getUsers
};