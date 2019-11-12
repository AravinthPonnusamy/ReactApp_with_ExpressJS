const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {

  // const MongoClient = require('mongodb').MongoClient;
  // const uri = "mongodb+srv://AravinthP:<password>@cluster0-7lazf.mongodb.net/test?retryWrites=true&w=majority";
  // const client = new MongoClient(uri, { useNewUrlParser: true });
  // client.connect(err => {
  //   const collection = client.db("test").collection("devices");
  //   // perform actions on the collection object
  //   client.close();
  // });

  const customers = [
    {id: 1, firstName: 'Stubbed', lastName: 'Data'},
    {id: 2, firstName: 'Aravinth', lastName: 'Ponnusamy'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);