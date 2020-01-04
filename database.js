const Firestore = require('@google-cloud/firestore');
const Faker = require('faker');

const db = new Firestore({
  projectId: 'firestore-nodejs-rest-api',
  keyFilename: '/Users/dadobre/Desktop/Firestore-Nodejs-Rest-API-ba560ef5b628.json',
});

let cateogorieIstorieRef = db.collection('categorie').doc('Dieta').collection('carti');
for(let i = 0; i < 10; i++){
    cateogorieIstorieRef.add({
        titlu: Faker.company.catchPhrase(),
        autor: Faker.name.findName() + ' ' + Faker.name.lastName(),
        editura: Faker.company.companyName(),
        an_aparitie: Faker.date.between('1990', '2019').getFullYear()
    })
}

  
