function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for(let i in books){
    console.log(books[i].title)

    if(books[i].title === searchTitle){
      return i
    }
    

}
return -1}

booksArr = [
    { title: "A Tale of Two Cities", author: "Charles Dickens" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Catch-22", author: "Joseph Heller" },
    { title: "Don Quixote", author: "Miguel de Cervantes" },
    { title: "Ender's Game", author: "Orson Scott Card" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" },
    { title: "Gone with the Wind", author: "Margaret Mitchell" },
    { title: "Harry Potter", author: "J.K. Rowling" }
];
searchBook1 = "Gone with the Wind"
searchBook2 = "The Master Mind"

console.log(findBookIndex(booksArr,searchBook1)) // 6
console.log(findBookIndex(booksArr,searchBook2)) // -1