const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'user_managements';

const client = new MongoClient(url);

async function deleteUser() {
  try {
    await client.connect();
    const database = client.db(dbName);
    const users = database.collection('users');
    const res = await users.deleteMany({
      index: { $in: [11, 17, 18] },
    });
    console.log('Successfully deleted records = ' + res.deletedCount);
  } catch (e) {
    console.log('An Error Occured');
    console.log(e);
  } finally {
    console.log('Closing Connection');
    await client.close();
  }
}

deleteUser().catch(console.dir);
