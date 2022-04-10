require('dotenv').config();
const { MongoClient } = require('mongodb');

const COUNTERS = 'counters';
const PRODUCTS = 'products';
const DELETED_PRODUCTS = 'deleted_products'
let DB;

const url = process.env.DB_URL || 'mongodb+srv://mongodb+srv://assignment4:CS648@cluster0.scjap.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectToDatabase = async () => {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  DB = client.db();
};

async function sequenceNumDocument(name) {
  const result = await DB
    .collection(COUNTERS)
    .findOneAndUpdate(
      { _id: name },
      {
        $inc: { sequenceNum: 1 },
        $set: { _id: name },
      },
      { returnOriginal: false, upsert: true },
    );
  return result.value.sequenceNum;
}

function getDatabase() {
  if (!DB) {
    throw new Error('Database not connected, try calling connectToDb method before accessing DB.');
  }
  return DB;
}

module.exports = {
  connectToDatabase,
  sequenceNumDocument,
  getDatabase,
  COUNTERS,
  PRODUCTS,
  DELETED_PRODUCTS
};