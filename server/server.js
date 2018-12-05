const express = require('express');
const app = express();
const path = require('path');
const body_parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
// const create_router = require('./create_router.js');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

MongoClient.connect('mongodb://localhost:27017')
  .then( (client) => {
    const db = client.db('bucket_list');
    const collection = db.collection("user");
    const router = createRouter(collection);
    app.use("/api/bucket_list", router);
  })
  .catch(console.err);

app.use(body_parser.json());

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
