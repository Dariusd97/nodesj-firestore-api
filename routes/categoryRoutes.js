const Router = require("router")
const router = Router()
const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
    projectId: 'firestore-nodejs-rest-api',
    keyFilename: './Firestore-Nodejs-Rest-API-ba560ef5b628.json',
  }); 
  
const COLLECTION_NAME = 'categorie';

router.post('/create', async(req, res, next) => {
    try{
        console.log('route /category/create was called')
        let categoryRef = db.collection(COLLECTION_NAME).doc(req.body.categoryName);
        categoryRef.set({
            imagine: `${req.body.categoryName}.jpg`,
            numar_carti: 0
        })
        res.status(201).json({Message: 'Category created'})
    }catch(error){
        console.log(error);
        res.status(500).json({Error: 'Server error'});
    }
});

router.put('/update', async(req, res, next) => {
    try{
        console.log('route /category/update was called' )
        let categoryRef = db.collection(COLLECTION_NAME).doc(req.query.categoryName).get()
        .then(doc => {
            console.log(doc.id)
            console.log(doc.data())
        });
        
        
        res.status(200).json({Message: 'Category updated'})
    }catch(error){
        console.log(error);
        res.status(500).json({Error: 'Server error'});
    }
});

router.delete('/delete', async(req, res, next) => {
    try{
        console.log('route /category/delete was called' )
        let categoryRef = db.collection(COLLECTION_NAME).doc(req.query.categoryName).delete();
        res.status(200).json({Message: 'Category deleted'})
    }catch(error){
        console.log(error);
        res.status(500).json({Error: 'Server error'});
    }
});

router.get('/getAll', async(req, res) => {
    try{
        console.log('categorie/getAll was called' )
        var Category = function(categoryName, noOfMovies, image){
            this.categoryName = categoryName;
            this.noOfMovies= noOfMovies;
            this.image = image
        }
        let categoryList = []
        db.collection('categorie').get()
        .then(snapshot => {
            console.log('ceva')
            if (snapshot.empty) {
              console.log('No matching documents.');
              return;
            }  
            snapshot.forEach(doc => {
                categoryList.push(new Category(doc.id, doc.data().numar_carti, doc.data().imagine))
            });
            res.status(200).json(categoryList)
          })
          .catch(err => {
            console.log('Error getting documents', err);
          });
          let ceva = '1'
    }catch(error){
        console.log(error);
        res.status(500).json({Error: 'Server error'});
    }
})

router.get('/get-category', async(req, res) => {
    try{
        console.log('categorie/get-category/:categotyName was called' )
        var Category = function(categoryName){
            this.categoryName = categoryName;
        }
        db.collection('categorie').doc(req.query.categoryName).get()
        .then(doc => {
            if (!doc.exists) {
                console.log('No such document!');
            } 
            res.status(200).json(new Category(doc.id))
          })
          .catch(err => {
            console.log('Error getting documents', err);
          });
    }catch(error){
        console.log(error);
        res.status(500).json({Error: 'Server error'});
    }
})

router.get('/get-all-books', async(req, res) => {
    try{
        console.log('categorie/get-all-books was called' )
        var Book = function(bookId,an_aparitie, autor, editura, titlu){
            this.bookId = bookId,
            this.an_aparitie = an_aparitie;
            this.autor= autor;
            this.editura = editura,
            this.titlu = titlu
        }
        let booksList = []
        let bookRef = db.collection('categorie').doc(req.query.categoryName).collection('carti').get()
        .then(snapshot => {
            if (snapshot.empty) {
              console.log('No matching documents.');
              return;
            }  
            snapshot.forEach(doc => {
                booksList.push(new Book(doc.id, doc.data().an_aparitie, doc.data().autor, doc.data().editura, doc.data().titlu))
            });
            res.status(200).json(booksList)
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