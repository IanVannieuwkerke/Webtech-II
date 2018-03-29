var books = [
    {title: 'Harry Potter',
    author: 'J.K. Rowling',
    alreadyRead: false
    },
    {title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    alreadyRead: true
    },
    {title: 'De verschrikkelijke schoolmeester.',
    author: 'Dolf Verroen',
    alreadyRead: true
    }
    ];

    for(let i = 0; i < books.length; i++) {


    if(books[i].alreadyRead==true){
        document.write('je las reeds het boek' +books[i].title)
    }

    else{
        document.write('je moet het boek' +books[i].title+ 'nog lezen')
    }

    document.write("<br>")

}
let book = function(name, writter, alreadyRead) {
    
    this.title = name,
    this.author = writter,
    this.alreadyRead = alreadyRead,
    this.output = function() {
        if(this.alreadyRead) {
            return "al gelezen";
        }
        else {
            return "nog niet gelezen";
        }
    }
}

let myfavoritebook = new book('Twilight', 'Stephenie Meyer', fasle);
let myfavoritebook = new book('The Da Vinci Code', 'Dan Brown', true);

console.log(myfavoritebook.output)();
console.log(myfavoritebook.titele)();


console.log(excitingNovel);
