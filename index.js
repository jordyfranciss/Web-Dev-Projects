import express from 'express';

import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = 3000;



// MongoDB Connection


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Optional: Seed Products (run only once!)

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/product', async (req, res) => {
 res.render('product');
});


// Server Start
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
