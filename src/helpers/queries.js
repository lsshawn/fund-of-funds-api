const { connectToDatabase } = require("./utils");

const { UserInputError } = require("apollo-server-lambda");

module.exports.getOne = async (model, query, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectToDatabase();

  try {
    const res = await model.findOne(query);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.getMany = async (model, args, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectToDatabase();

  const limit = args.limit || 10;
  const sort = args.sort || { "_id": -1 }
  const page = args.page || 1;

  try {
    const res = await model
      .find()
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.createOne = async (model, args, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectToDatabase();

  let obj = args.obj;
  obj.createdDate = new Date();

  try {
    const document = await model.create(obj);
    return document;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.updateOne = async (model, args, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectToDatabase();

  const obj = {
    ...args.obj,
    updatedDate: new Date()
  }

  const _id = obj._id;
  if (!_id) throw new Error("No _id in obj");

  try {
    const document = await model.findOneAndUpdate({ _id }, obj, {
      new: true,
    });

    if (!document) throw new Error("No document found to update");

    return document;
  } catch (err) {
    if (err.codeName === 'DuplicateKey') {
      throw new UserInputError(`Duplicate ${Object.keys(err.keyValue).join('')}`)
    }
    throw new Error(err);
  }
};

module.exports.deleteOne = async (model, args, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectToDatabase();

  try {
    let document;
    document = await model.deleteOne({ _id: args._id });

    if (!document) throw new Error(`${args._id} not found`);

    return document
  } catch (err) {
    throw new Error(err);
  }
};
