const Router = require("router")
const router = Router()
const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
    projectId: 'firestore-nodejs-rest-api',
    keyFilename: './Firestore-Nodejs-Rest-API-ba560ef5b628.json',
  });
const ROOT_COLLECTION = 'categorie'
const BOOK_COLLECTION = 'carti';

router.post('/create', async(req, res, next) => {
    try{
        console.log('route /book/create was called')
        let bookRef = db.collection(ROOT_COLLECTION).doc(req.query.categoryName).collection(BOOK_COLLECTION);
        bookRef.add({
            titlu: req.body.titlu,
            autor: req.body.autor,
            editura: req.body.editura,
            an_aparitie: req.body.an_aparitie
        })
        let categoryRef = db.collection(ROOT_COLLECTION).doc(req.query.categoryName);
        // update number of books in the category
        await db.collection(ROOT_COLLECTION).doc(req.query.categoryName).get()
            .then((doc) => {
                let updatedNoOfBooks = doc.data().numar_carti + 1;
                categoryRef.update({numar_carti: updatedNoOfBooks});
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            })
        res.status(201).json({Message: 'Category created'})
    }catch(error){
        console.log(error);
        res.status(500).json({Error: 'Server error'});
    }
});
 
router.put('/update', async(req,res,next) => {
    try{
        console.log('route /book/update was called')
        db.collection(ROOT_COLLECTION).doc(req.query.categoryName).collection(BOOK_COLLECTION).doc(req.query.book_id)
        .update({
            titlu: req.body.titlu,
            autor: req.body.autor,
            editura: req.body.editura,
            an_aparitie: req.body.an_aparitie
        })
        res.status(200).json({Message: 'Book updated'})
    }catch(error){
        console.log(error)
        res.status(500).json({Error: 'Server error'});
    }
})

router.delete('/delete', async(req,res, next) => {
    try{
        console.log('route /book/delete was called')
        db.collection(ROOT_COLLECTION).doc(req.query.categoryName).collection(BOOK_COLLECTION).doc(req.query.bookId).delete()
        let categoryRef = db.collection(ROOT_COLLECTION).doc(req.query.categoryName);
        // update number of books in the cateogory
        await db.collection(ROOT_COLLECTION).doc(req.query.categoryName).get()
            .then((doc) => {
                let updatedNoOfBooks = doc.data().numar_carti - 1;
                categoryRef.update({numar_carti: updatedNoOfBooks});
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            })

        res.status(200).json({Message: 'Book deleted'})
    }catch(error){
        console.log(error);
        res.status(500).json({Error: 'Server error'});
    }
})

router.get('/get-book', async(req, res) => {
    try{
        console.log('book/get-books/:bookName was called' )
        var Book = function(bookId,an_aparitie, autor, editura, titlu){
            this.bookId = bookId,
            this.an_aparitie = an_aparitie;
            this.autor= autor;
            this.editura = editura,
            this.titlu = titlu
        }
        let bookRef = db.collection('categorie').doc(req.query.categoryName).collection('carti').doc(req.query.bookId)
        .get()
        .then(doc => {
            if (!doc.exists) {
                console.log('No such document!');
            }
            
            res.status(200).json(new Book(doc.id, doc.data().an_aparitie, doc.data().autor, doc.data().editura, doc.data().titlu))
          })
          .catch(err => {
            console.log('Error getting documents', err);
          });
    }catch(error){
        console.log(error);
        res.status(500).json({Error: 'Server error'});
    }
})

module.exports = router