const algoliasearch = require("algoliasearch");

const client = algoliasearch("YourApplicationID", "YourAdminAPIKey");
const index = client.initIndex("your_index_name");

const objects = [
  {
    objectID: 1,
    name: "Foo"
  }
];

index
  .saveObjects(objects)
  .then(({ objectIDs }) => {
    console.log(objectIDs);
  })
  .catch(err => {
    console.log(err);
  });