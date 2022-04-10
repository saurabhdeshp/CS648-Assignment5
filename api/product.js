const { getDatabase, sequenceNumDocument,  COUNTERS, PRODUCTS, DELETED_PRODUCTS} = require('./DB.js');

const get = async (_, { id }) => {
  const DB = getDatabase();
  return DB.collection(PRODUCTS).findOne({ id });
};

const list = async () => {
  const DB = getDatabase();
  return DB.collection(PRODUCTS).find({}).toArray();
};

const add = async (_, { product }) => {
  const DB = getDatabase();
  product.id = await sequenceNumDocument(PRODUCTS);

  const result = await DB.collection(PRODUCTS).insertOne(product);
  return DB
    .collection(PRODUCTS)
    .findOne({ _id: result.insertedId });
};

const update = async (_, { id, changes }) => {
  const DB = getDatabase();
  if (changes.name || changes.category || changes.price || changes.url) {
    const product = await DB.collection(PRODUCTS).findOne({ id });
    Object.assign(product, changes);
  }
  await DB.collection(PRODUCTS).updateOne({ id }, { $set: changes });
  return DB.collection(PRODUCTS).findOne({ id });
};

const remove = async (_, { id }) => {
  const DB = getDatabase();
  const product = await DB.collection(PRODUCTS).findOne({ id });
  if (!product) return false;

  product.deleted = new Date();
  let result = await DB.collection(DELETED_PRODUCTS).insertOne(product);
  if (result.insertedId) {
    result = await DB.collection(PRODUCTS).removeOne({ id });
    return result.deletedCount === 1;
  }
  return false;
};

module.exports = {
    update, list, add, get, delete: remove,
};