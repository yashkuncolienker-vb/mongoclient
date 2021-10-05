const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'user_managements';

const client = new MongoClient(url);

async function updateUser() {
  try {
    await client.connect();
    const database = client.db(dbName);
    const users = database.collection('users');
    const res = await users.updateMany(
      { company: 'Mita' },
      { $set: { company: 'Mita-Color Ventures' } }
    );
    console.log('Successfully updated record = ' + res.modifiedCount);
  } catch (e) {
    console.log('An Error Occured');
    console.log(e);
  } finally {
    console.log('Closing Connection');
    await client.close();
  }
}

updateUser().catch(console.dir);
