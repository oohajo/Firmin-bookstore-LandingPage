window.onload = function () {
    console.log('Book list app started.');
    booksList.init();
};


class BooksList {
    constructor() {
        this.books = [
            {
                title: 'Zabójstwo Rogera Ackroyda',
                author: 'Agatha Christie',
                ph: "Wydawnictwo Dolnośląskie",
                translator: "T. J. Dehnel",
                year: "2021",
                series: "kolekcjonerska",
                type: "kryminał",
            },
            {
                title: 'Tajemnicza historia w Styles',
                author: 'Agatha Christie',
                ph: "Wydawnictwo Dolnośląskie",
                translator: "T. J. Dehnel",
                year: "2021",
                series: "kolekcjonerska",
                type: "kryminał",
            },
            {
                title: 'Zło czai się wszędzie',
                author: 'Agatha Christie',
                ph: "Wydawnictwo Dolnośląskie",
                translator: "T. J. Dehnel",
                year: "2021",
                series: "kolekcjonerska",
                type: "kryminał",
            },
            {
                title: 'Pięć małych świnek',
                author: 'Agatha Christie',
                ph: "Wydawnictwo Dolnośląskie",
                translator: "I. Kulczycka-Dąmbska",
                year: "2021",
                series: "kolekcjonerska",
                type: "kryminał",
            },
            {
                title: 'Kurtyna',
                author: 'Agatha Christie',
                ph: "Wydawnictwo Dolnośląskie",
                translator: "A. Szeryńska",
                year: "2021",
                series: "kolekcjonerska",
                type: "kryminał",
            },
            {
                title: 'Morderstwo w Mezopotamii',
                author: 'Agatha Christie',
                ph: "Wydawnictwo Dolnośląskie",
                translator: "J. Zakrzewski",
                year: "2021",
                series: "kolekcjonerska",
                type: "kryminał",
            },
            {
                title: 'Morderstwo w Orient Expresie',
                author: 'Agatha Christie',
                ph: "Wydawnictwo Dolnośląskie",
                translator: "M. Kisiel-Małecka",
                year: "2021",
                series: "kolekcjonerska",
                type: "kryminał",
            },
            {
                title: 'Samotny dom',
                author: 'Agatha Christie',
                ph: "Wydawnictwo Dolnośląskie",
                translator: "M. Michałowska",
                year: "2021",
                series: "kolekcjonerska",
                type: "kryminał",
            },
            {
                title: 'I nie było już nikogo',
                author: 'Agatha Christie',
                ph: "Wydawnictwo Dolnośląskie",
                translator: "R. Chrząstowski",
                year: "2021",
                series: "kolekcjonerska",
                type: "kryminał",
            },
            {
                title: 'Morderstwo w Boże Narodzenie',
                author: 'Agatha Christie',
                ph: "Wydawnictwo Dolnośląskie",
                translator: "A. Milcarz",
                year: "2022",
                series: "kolekcjonerska",
                type: "kryminał",
            },
            {
                title: 'Zatrute pióro',
                author: 'Agatha Christie',
                ph: "Wydawnictwo Dolnośląskie",
                translator: "I. Kulczycka",
                year: "2021",
                series: "kolekcjonerska",
                type: "kryminał",
            },
            {
                title: 'Czysty kod - podręcznik dobrego programisty',
                author: 'Robert C. Martin',
                ph: "Helion",
                translator: "P. Gonera",
                year: "2014",
                series: "",
                type: "programowanie, podręcznik",
            },
            {
                title: 'Mistrz czystego kodu - kodeks postępowania profesjonalnych programistów',
                author: 'Robert C. Martin',
                ph: "Helion",
                translator: "W. Moch",
                year: "2013",
                series: "",
                type: "programowanie, podręcznik",
            },
            {
                title: 'Zrozumieć programowanie',
                author: 'Gynvael Coldwind',
                ph: "PWN",
                translator: "",
                year: "2015",
                series: "",
                type: "programowanie, podręcznik",
            },
            {
                title: 'Algorytmy, struktury danych i techniki programowania',
                author: 'Piotr Wróblewski',
                ph: "Helion",
                translator: "",
                year: "2019",
                series: "",
                type: "programowanie, podręcznik",
            },
            {
                title: 'Pragmatyczny programista. Od czeladnika do mistrza.',
                author: 'David Thomas, Andrew Hunt',
                ph: "Helion",
                translator: "",
                year: "2021",
                series: "",
                type: "programowanie, podręcznik",
            },
            {
                title: 'Zrozumieć JavaScript',
                author: 'Marijn Haverbeke',
                ph: "Helion",
                translator: "L. Piwko",
                year: "2019",
                series: "",
                type: "programowanie, podręcznik",
            },
            {
                title: 'Full Stack JavaScript',
                author: 'Azat Mardan',
                ph: "Helion",
                translator: "A. Górczyńska",
                year: "2020",
                series: "",
                type: "programowanie, podręcznik",
            },
            {
                title: 'Święte wijny JavaScriptu',
                author: 'Bartłomiej Borowczyk, Jakób Król',
                ph: "www.ksiazki.it, Programistyczne Świry",
                translator: "",
                year: "2021",
                series: "",
                type: "programowanie, podręcznik",
            },
            {
                title: 'Fotografuj miejsca jak mistrz',
                author: 'Henry Carroll',
                ph: "almapress",
                translator: "J. J. Malinowski",
                year: "2014",
                series: "",
                type: "fotografia",
            },
            {
                title: 'Fotografuj ludzi jak mistrz',
                author: 'Henry Carroll',
                ph: "almapress",
                translator: "J. J. Malinowski",
                year: "2015",
                series: "",
                type: "fotografia",
            },
            {
                title: 'Wracajcie szczęśliwie do bazy',
                author: 'Zbigniew Neugebauer',
                ph: "Książka i Wiedza",
                translator: "",
                year: "1974",
                series: "",
                type: "reportaż, publicystyka, dokument",
            },
            {
                title: 'Zanim wyjedziesz w Bieszczady - Nocny pociąg',
                author: 'Kazimierz Nóżka, Marcin Scelina, Maciej Kozłowski',
                ph: "Znak",
                translator: "",
                year: "2021",
                series: "",
                type: "podróżnicza, reportaż",
            },
            {
                title: 'Zanim wyjedziesz w Bieszczady - Przystanek Jezioro',
                author: 'Kazimierz Nóżka, Marcin Scelina, Maciej Kozłowski',
                ph: "Znak",
                translator: "",
                year: "2020",
                series: "",
                type: "podróżnicza, reportaż",
            },
            {
                title: 'Zanim wyjedziesz w Bieszczady',
                author: 'Kazimierz Nóżka, Marcin Scelina, Maciej Kozłowski',
                ph: "Znak",
                translator: "",
                year: "2019",
                series: "",
                type: "podróżnicza, reportaż",
            },
            {
                title: 'Uczenie maszynowe z językiem JavaScript - rozwiązywanie złożonych problemów',
                author: 'Burak Kanber',
                ph: "Helion",
                translator: "P. Rajca",
                year: "2018",
                series: "",
                type: "programowanie, podręcznik",
            },
            {
                title: 'Programowanie dla początkujących w 24 godziny',
                author: 'Greg Perry, Dean Miller',
                ph: "Helion",
                translator: "T. Walczak",
                year: "2020",
                series: "",
                type: "programowanie, podręcznik",
            },
            {
                title: 'Ci niewiarygodni Inkowie',
                author: 'Terry Deary',
                ph: "Egmont",
                translator: "",
                year: "2018",
                series: "Strrraszna historia",
                type: "historia",
            },
            {
                title: 'Krwawi władcy i wredne królowe',
                author: 'Terry Deary',
                ph: "Egmont",
                translator: "",
                year: "2019",
                series: "Strrraszna historia",
                type: "historia",
            },


        ];
    };

    booksList = document.getElementById("myUL");


    init() {
        this.displayBooksList();
        this.myFunction();
    };

    myFunction() {
        let input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName('li');

        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText || a.innerHTML;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    displayBooksList() {
        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i];
            const liItem = document.createElement("li");
            this.booksList.appendChild(liItem);
            liItem.innerHTML = `
                <li><a href="#"> ${book.title} - ${book.author} ${book.translator ? " - przekład " + book.translator : ""} ${book.ph ? " - " + book.ph : ""} ${book.year ? " - " + book.year : ""} ${book.series ? " - " + book.series.italics() : ""} ${book.type ? " (" + book.type +") " : ""} </a></li>
            `;
        }
    }
};

const booksList = new BooksList();



