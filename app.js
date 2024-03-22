const express = require('express')
const app = express()
const port = 3000;

const books = require('./data/books.json');

// Middlewares
app.use(express.json()); // Para parsear el body de las peticiones


// http://localhost:3000/


// AQUÍ LOS EJERCICIOS

// 1. Crea una ruta /all para obtener todos los libros
// http://localhost:3000/all
app.get("/all", (req, res) => {
    res.status(200).json(books);
  });

// 2. Crea una ruta /first para obtener el primer libro
// http://localhost:3000/first
app.get("/first", (req, res) => {
    res.status(200).json(books[0]);
  });

// 3.Crea una ruta /last para obtener el último libro
// http://localhost:3000/last
app.get("/last", (req, res) => {
    res.status(200).json(books[books.length-1]);
  });

// 4. Crea una ruta /middle para obtener el libro en la mitad (número 50 en el array)
// http://localhost:3000/middle
app.get("/middle", (req, res) => {
    let middle = books.length/2;
    res.status(200).json(books[middle]);
  });

// 5. Crea una ruta /author/dante-alighieri para obtener SÓLO EL TÍTULO del libro de Dante Alighieri
// http://localhost:3000/author/dante-alighieri
app.get("/author/dante-alighieri", (req, res) => {
    const book = books.find((item) => item.author == "Dante Alighieri");
    res.status(200).json(book.title);
  });

/*   app.get('/author/dante-alighieri', (req, res) => {
    for (let i = 0; i < books.length; i++) {
      if (books[i].author == "Dante Alighieri") {
        res.status(200).json(books[i].title);
      }
    }
  }) */

// 6. Crea una ruta /country/charles-dickens para obtener SÓLO EL PAÍS del libro de Charles Dickens
// http://localhost:3000/country/charles-dickens
/* app.get("/", (req, res) => {
    const book = books.find((item) => item.author == "Charles Dickens");
    res.status(200).json(book.country);
  }); */

  app.get('/country/charles-dickens', (req, res) => {
    for (let i = 0; i < books.length; i++) {
      if (books[i].author == "Charles Dickens") {
        res.status(200).json(books[i].country);
      }
    }
  })


// 7. Crea una ruta /year&pages/cervantes para obtener LAS PÁGINAS Y EL AÑO del libro de Miguel de Cervantes, Ejemplo de respuesta: { pages: ..., year: ... }
// http://localhost:3000/year&pages/cervantes
app.get("/year&pages/cervantes", (req, res) => {
    const book = books.find((item) => item.author == "Miguel de Cervantes");
    const result = {
      pages: book.pages,
      year: book.year,
    };
    res.status(200).json(result);
  });

// 8. Crea una ruta /country/count/spain para obtener EL NÚMERO DE LIBROS de España
//http://localhost:3000/country/count/spain
app.get('/country/count/spain', (req, res) => {
    let count = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].country == "Spain") {
            count += 1
        }
    }
    res.status(200).json(count)
})

// 9. Crea una ruta /country/at-least/germany para obtener VERDADERO O FALSO dependiendo de si hay o no un libro de Alemania
//http://localhost:3000/country/at-least/germany
app.get("/country/at-least/germany", (req, res) => {
    const book = books.filter((element) => element.country === "Germany");
    if (book.length > 0) {
      res.status(200).json(true);
    } else {
      res.status(200).json(false);
    }
  });

/*   app.get("/country/at-least/germany", (req, res) => {
    const comparison = books
                          .some(element => element.country === "Germany");
    res.status(200).json(comparison);
  }); */

// 10. Crea una ruta /pages/all-greater/200 para obtener VERDADERO O FALSO dependiendo de si todos los libros tienen más de 200 páginas
//http://localhost:3000/pages/all-greater/200
app.get("/pages/all-greater/200", (req, res) => {
    const comparison = books
                          .every(element => element.pages > 100);
    res.status(200).json(comparison);
  });


// http://localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
})