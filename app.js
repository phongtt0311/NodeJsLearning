// app.js
const express = require('express');
const app = express();
const usersservice = require('./services/usersservice');
const port = 3000;

// Sử dụng EJS làm template engine
app.set('view engine', 'ejs');

// Đường dẫn đến thư mục views
app.set('views', __dirname + '/views');

// Route để hiển thị dữ liệu từ cơ sở dữ liệu
app.get('/', (req, res) => {
    usersservice.getUsers((err, users) => {
        if (err) {
            return res.status(500).send('Internal Server Error');
        }

        // Render trang EJS và truyền dữ liệu từ cơ sở dữ liệu
        res.render('index', { users });
    });
});

// Lắng nghe cổng 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});