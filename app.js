const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});
app.get('/admin', (req, res) => {
  res.render('admin');
});
app.get('/admin/updatebus', (req, res) => {
  res.render('adminupdatebus');
});
app.get('/admin/updatebus/addseatingplan', (req, res) => {
  res.render('addseatingplan');
});
app.get('/admin/seatingplanbybus', (req, res) => {
  res.render('seatingplanbybus');
});
app.get('/user', (req, res) => {
  res.render('user');
});
app.get('/user/trips', (req, res) => {
  res.render('userTrips');
});
app.get('/user/seating', (req, res) => {
  res.render('chooseseat');
});
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    res.render('home');

});
app.post('/signup', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  console.log(username);
  console.log(email);
  console.log(password);
  res.render('home');

});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});