const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


const url = 'mongodb://localhost:27017';


const dbName = 'Locations';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true,  useNewUrlParser: true } );

// Use connect method to connect to the Server
function methods (processes){
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  processes(db, function() {
    client.close();
  });
});
}

const insertDocuments = function(db, callback) {
   
    const collection = db.collection('Locations');
   collection.insertMany([{name:"keloglan",
   Shortmane:"Kelesoglan",
   city:"ardahan",
   country:"patogonya",
   coordinates:"uzakulkecivari"
},

        {name:"keloglan",
       Shortmane:"Kelesoglan",
       city:"ardahan",
       country:"patogonya",
       coordinates:"uzakulkecivari"}]);
    collection.insertMany([
      {name:"keloglan",
       Shortmane:"Kelesoglan",
       city:"ardahan",
       country:"patogonya",
       coordinates:"uzakulkecivari"
    },

    {name:"keloglan",
    Shortmane:"Kelesoglan",
    city:"ardahan",
    country:"patogonya",
    coordinates:"uzakulkecivari"
 },

 {name:"keloglan",
 Shortmane:"Kelesoglan",
 city:"ardahan",
 country:"patogonya",
 coordinates:"uzakulkecivari"
},

  
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });

    const collection1 = db.collection('Album');
   
    collection.insertMany([
      {name:"keloglan",
       Shortmane:"Kelesoglan",
       city:"ardahan",
       country:"patogonya",
       coordinates:"uzakulkecivari"
    },

  
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });

    const collection2 = db.collection('Title');
   
    collection.insertMany([
      {album:"keloglanin gunlugu",
       Location:"madagaskar",
       Member:"ardahan, corum, giresun",
       ViewCount: 39,
       UploadData:"temmuz"
    },

  
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });

    const collection3 = db.collection('members');
   
    collection.insertMany([
      {
       name:"keloglanin kelesoglan",
       phoneNumber: 0031656565,
       email: 39,
       
    },

    {
        name:"keloglanin kelesoglan",
        phoneNumber: 0031656565,
        email: 39,
        
     },
     {
        name:"keloglanin kelesoglan",
        phoneNumber: 0031656565,
        email: 39,
        
     },
     {
        name:"keloglanin kelesoglan",
        phoneNumber: 0031656565,
        email: 39,
        
     },
     {
        name:"keloglanin kelesoglan",
        phoneNumber: 0031656565,
        email: 39,
        
     },

  
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
}   
methods(insertDocuments);



  const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('Album');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ name:"keloglan" }
      , { $set: { name:"kelolmayanoglan" } }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
    });  
  }

  methods(updateDocument);
  const removeDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('members');
    // Delete document where a is 3
    collection.deleteOne({ name:"keloglanin kelesoglan" }, function(err, result) {
      assert.equal(err, null);
      assert.equal(0, result.result.n);
      console.log("Removed the document with the field a equal to 3");
      callback(result);
    });    
  }

  methods(removeDocument);