const Firestore = require('@google-cloud/firestore');
const Faker = require('faker');

const db = new Firestore({
  projectId: 'firestore-nodejs-rest-api',
  keyFilename: '/Users/dadobre/Desktop/Firestore-Nodejs-Rest-API-ba560ef5b628.json',
});

let cateogorieIstorieRef = db.collection('Arhitectura').doc('Dieta').collection('carti');
for(let i = 0; i < 10; i++){
    cateogorieIstorieRef.add({
        titlu: Faker.company.catchPhrase(),
        autor: Faker.name.findName() + ' ' + Faker.name.lastName(),
        editura: Faker.company.companyName(),
        an_aparitie: Faker.date.between('1990', '2019').getFullYear()
    })
}
let cateogorieIstorieRef = db.collection('Business').doc('Dieta').collection('carti');
for(let i = 0; i < 10; i++){
    cateogorieIstorieRef.add({
        titlu: Faker.company.catchPhrase(),
        autor: Faker.name.findName() + ' ' + Faker.name.lastName(),
        editura: Faker.company.companyName(),
        an_aparitie: Faker.date.between('1990', '2019').getFullYear()
    })
}

let cateogorieIstorieRef = db.collection('Dieta').doc('Dieta').collection('carti');
for(let i = 0; i < 10; i++){
    cateogorieIstorieRef.add({
        titlu: Faker.company.catchPhrase(),
        autor: Faker.name.findName() + ' ' + Faker.name.lastName(),
        editura: Faker.company.companyName(),
        an_aparitie: Faker.date.between('1990', '2019').getFullYear()
    })
}

let cateogorieIstorieRef = db.collection('Fictiune').doc('Dieta').collection('carti');
for(let i = 0; i < 10; i++){
    cateogorieIstorieRef.add({
        titlu: Faker.company.catchPhrase(),
        autor: Faker.name.findName() + ' ' + Faker.name.lastName(),
        editura: Faker.company.companyName(),
        an_aparitie: Faker.date.between('1990', '2019').getFullYear()
    })
}

let cateogorieIstorieRef = db.collection('Gastronomie').doc('Dieta').collection('carti');
for(let i = 0; i < 10; i++){
    cateogorieIstorieRef.add({
        titlu: Faker.company.catchPhrase(),
        autor: Faker.name.findName() + ' ' + Faker.name.lastName(),
        editura: Faker.company.companyName(),
        an_aparitie: Faker.date.between('1990', '2019').getFullYear()
    })
}
let cateogorieIstorieRef = db.collection('Istorie').doc('Dieta').collection('carti');
for(let i = 0; i < 10; i++){
    cateogorieIstorieRef.add({
        titlu: Faker.company.catchPhrase(),
        autor: Faker.name.findName() + ' ' + Faker.name.lastName(),
        editura: Faker.company.companyName(),
        an_aparitie: Faker.date.between('1990', '2019').getFullYear()
    })
}
let cateogorieIstorieRef = db.collection('Psihologie').doc('Dieta').collection('carti');
for(let i = 0; i < 10; i++){
    cateogorieIstorieRef.add({
        titlu: Faker.company.catchPhrase(),
        autor: Faker.name.findName() + ' ' + Faker.name.lastName(),
        editura: Faker.company.companyName(),
        an_aparitie: Faker.date.between('1990', '2019').getFullYear()
    })
}

let cateogorieIstorieRef = db.collection('Stiinte').doc('Dieta').collection('carti');
for(let i = 0; i < 10; i++){
    cateogorieIstorieRef.add({
        titlu: Faker.company.catchPhrase(),
        autor: Faker.name.findName() + ' ' + Faker.name.lastName(),
        editura: Faker.company.companyName(),
        an_aparitie: Faker.date.between('1990', '2019').getFullYear()
    })
}


  
