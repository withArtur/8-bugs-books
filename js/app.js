const books = [
    {
        "id": 1,
        "author": "Ernest Hemingway",
        "title": "Il vecchio e il mare",
        "firstPublishingYear": "1952",
        "genres": ["sea", "novel"],
        "originalLanguage": "Inglese",
        "pages": "175",
        "rating": "6.5"
    },
    {
        "id": 2,
        "author": "Robert Louis Stevenson",
        "title": "L'isola del tesoro",
        "firstPublishingYear": "1883",
        "genres": ["adventure", "novel"],
        "originalLanguage": "Inglese",
        "pages": "190",
        "rating": "7.5"
    },
    {
        "id": 3,
        "author": "Herman Melville",
        "title": "Moby Dick",
        "firstPublishingYear": "1851",
        "genres": ["sea", "novel"],
        "originalLanguage": "Inglese",
        "pages": "422",
        "rating": "5"
    },
    {
        "id": 4,
        "author": "J.R.R. Tolkien",
        "title": "Il signore degli anelli",
        "firstPublishingYear": "1955",
        "genres": ["fantasy"],
        "originalLanguage": "Inglese",
        "pages": "1255",
        "rating": "10"
    },
    {
        "id": 5,
        "author": "Maccio Capatonda",
        "title": "Libro",
        "firstPublishingYear": "2020",
        "genres": ["humour"],
        "originalLanguage": "Italiano",
        "pages": "222",
        "rating": "10"
    },
    {
        "id": 6,
        "author": "Andrea Camilleri",
        "title": "La prima indagine di Montalbano",
        "firstPublishingYear": "2013",
        "genres": ["thriller", "stories"],
        "originalLanguage": "Italiano",
        "pages": "340",
        "rating": "8"
    },
    {
        "id": 7,
        "author": "George Orwell",
        "title": "1984",
        "firstPublishingYear": "1948",
        "genres": ["science fiction", "dystopia"],
        "originalLanguage": "Inglese",
        "pages": "333",
        "rating": "9.5"
    },
    {
        "id": 8,
        "author": "Isaac Asimov",
        "title": "Io, Robot",
        "firstPublishingYear": "1950",
        "genres": ["robot", "stories"],
        "originalLanguage": "Inglese",
        "pages": "265",
        "rating": "7"
    }
];

const iconsByGenres = Object.freeze({
    adventure: 'adventure',
    sea: 'sea',
    novel: 'book',
    stories: 'book',
    fantasy: 'fantasy',
    travels: 'travels',
    biography: 'biography',
});

const genresLabels = Object.freeze({
    adventure: 'Avventura',
    sea: 'Mare',
    novel: 'Romanzo',
    stories: 'Racconti',
    fantasy: 'Fantastico',
    travels: 'Viaggi',
    biography: 'Autobiografia',
});

displayBooks(books);

function displayBooks(books) {
    const booksContainer = document.querySelector('.books');

    books.forEach((book) => {
        const tags = book.genres.forEach((genre) => {
            return `<div class="book-tag">${genre}</div>`;
        });

        const chars = {
            ',': '',
            '.': '',
            ' ': '',
            '"': ''
        }

        let ratingString = '';
        const rating = book.rating / 2;
        for (let i = 1; i <= rating; i++) {
            ratingString += '<img src="icons/star.png">';
        }
        if (rating - parseInt(rating) > 0.5) {
            ratingString += '<img src="icons/half-star.png">';
        }
        for (let i = rating; i <= 5; i++) {
            ratingString += '<img src="icons/star-empty.png">';
        }

        booksContainer.innerHTML += `
            <div class="book">
                <div class="book-icons">
                    <img class="book-icon" src="icons/${iconsByGenres[book.genres[0]]}.png">
                </div>
                <div class="book-image">
                    <img src="images/${book.title.toLowerCase().replace(/[,.' "]/g, match => chars[match])}.jpeg" alt="${book.title}">
                </div>
                <h2 class="book-title">
                    ${book.title}
                    <span class="book-year">${book.firstPublishingYear}</span>
                </h2>
                <h3 class="book-author">di ${book.author}</h3>
                <div class="book-tags">
                    ${tags}
                </div>
                <div class="book-rating">
                    ${ratingString}
                </div>
                <p class="book-reading-time">Tempo di lettura: ${book.pages / 30}</p>
            </div>
        `;
    })
}
