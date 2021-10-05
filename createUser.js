const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'user_managements';

const userData = [
  {
    index: 11,
    first_name: 'Korrie',
    last_name: 'Kornacki',
    email: 'kkornacki0@fc2.com',
    company: 'Mita',
    phone: '8347476492',
  },
  {
    index: 12,
    first_name: 'Jonas',
    last_name: 'Shelf',
    email: 'jshelf1@yahoo.com',
    company: 'Kazu',
    phone: '5991507513',
  },
  {
    index: 13,
    first_name: 'Felicio',
    last_name: 'Damsell',
    email: 'fdamsell2@xinhuanet.com',
    company: 'Eidel',
    phone: '9159267233',
  },
  {
    index: 14,
    first_name: 'Daria',
    last_name: 'Hehir',
    email: 'dhehir3@irs.gov',
    company: 'Mita',
    phone: '8709298195',
  },
  {
    index: 15,
    first_name: 'Lynea',
    last_name: 'Westcot',
    email: 'lwestcot4@vimeo.com',
    company: 'Yakitri',
    phone: '7213415431',
  },
  {
    index: 16,
    first_name: 'Yulma',
    last_name: 'Binford',
    email: 'ybinford5@flickr.com',
    company: 'Cogibox',
    phone: '7346511180',
  },
  {
    index: 17,
    first_name: 'Ulrika',
    last_name: 'Corradetti',
    email: 'ucorradetti6@pagesperso-orange.fr',
    company: 'Mita',
    phone: '2354201168',
  },
  {
    index: 18,
    first_name: 'Gaynor',
    last_name: 'Glitherow',
    email: 'gglitherow7@zdnet.com',
    company: 'Centimia',
    phone: '2921984690',
  },
  {
    index: 19,
    first_name: 'Nicolas',
    last_name: 'Sargeant',
    email: 'nsargeant8@histats.com',
    company: 'Realcube',
    phone: '2831359456',
  },
  {
    index: 20,
    first_name: 'Ciro',
    last_name: 'Benyon',
    email: 'cbenyon9@google.ca',
    company: 'Edgewire',
    phone: '5453502953',
  },
];

const client = new MongoClient(url);

async function createUser() {
  try {
    await client.connect();
    const database = client.db(dbName);
    const users = database.collection('users');
    const res = await users.insertMany(userData);
    console.log('Successfully written records = ' + res.insertedCount);
  } catch (e) {
    console.log('An Error Occured');
    console.log(e);
  } finally {
    console.log('Closing Connection');
    await client.close();
  }
}

createUser().catch(console.dir);
