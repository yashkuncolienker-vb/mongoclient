const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'user_managements';

const client = new MongoClient(url);

async function findUser() {
  try {
    await client.connect();
    const database = client.db(dbName);
    const users = database.collection('users');
    const res = await users.find().sort({ first_name: 1 }).toArray();
    console.log('Successfully found records');
    console.log(res);
  } catch (e) {
    console.log('An Error Occured');
    console.log(e);
  } finally {
    console.log('Closing Connection');
    await client.close();
  }
}

findUser().catch(console.dir);
