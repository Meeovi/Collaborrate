import gql from "graphql-tag";
import findManyAgreements from "~/graphql/queries/sales/agreements";
import Editor from '~/components/Editor.vue'

const ADD_AGREEMENTS = gql `
    mutation ($name:String!,$excerpt:String!,$type:String!,$content:String!,$image:String!,$user_id: String!, $reference_id: String!, $shop_id: String!){
    createOneAgreements(data: {reference_id: $reference_id, user_id: $user_id, shop_id: $shop_id, content: $content, excerpt: $excerpt, image: $image, type: $type, name: $name}) {
      name
      excerpt
      type
      content
      image
      reference_id
      user_id
      shop_id
  }
}`;

export default {
  components: {
    Editor
  },
  data() {
    return {
      values: {
        type: [],
        name: " ",
        excerpt: " ",
        content: " ",
        image: " ",
        user_id: "",
        reference_id: "",
        shop_id: "",
      }
    }
  },
  methods: {
    async addAgreement() {
      const name = this.name;
      const content = this.content;
      const excerpt = this.excerpt;
      const type = this.type;
      const image = this.image;
      const user_id = this.user_id;
      const reference_id = this.reference_id;
      const shop_id = this.shop_id;
      await this.$apollo.mutate({
        mutation: ADD_AGREEMENTS,
        variables: {
          name,
          excerpt,
          type,
          content,
          image,
          reference_id,
          user_id,
          shop_id,
        },
        update: (cache, {
          data: {
            insertAgreements
          }
        }) => {
          // Read data from cache for this query
          try {
            const insertedAgreement = insertAgreements.returning;
            console.log(insertedAgreement)
            cache.writeQuery({
              query: findManyAgreements
            })
          } catch (err) {
            console.error(err)
          }
        }
      }).then(() => {
        this.$router.push({
          path: '../sales/agreements'
        })
      }).catch(err => console.log(err));
      this.name = ' ';
      this.excerpt = ' ';
      this.type = ' ';
      this.content = ' ';
      this.image = ' ';
      this.reference_id = '';
      this.user_id = '';
      this.shop_id = '';
    },

  }
}
