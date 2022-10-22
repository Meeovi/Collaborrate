const axios = require("axios")

const graphqlSchema = axios({
  url: 'http://localhost:4000/graphql',
  method: 'post',
  data: {
    query: `
      query PostsForAuthor {
        author(id: 1) {
          firstName
            posts {
              title
              votes
            }
          }
        }
      `
  }
}).then((result) => {
  console.log(result.data)
});

function formBuilder (){
  const intialValues = {};
  let initialValue;
  switch (graphqlSchema) {
    case 'Enum':
    case 'String':
      intialValue = '';
      break;
    case 'Boolean':
      initialValue = false;
      break;
    default:
      initialValue = '';
  }
  initialValues = initialValue;
};

export default {
  data (){
    return {
      
    }
  }
}