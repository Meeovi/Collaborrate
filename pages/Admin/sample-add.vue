<template>
  <div>
    <client-only><PeriqlesForm useMutation={createOneAgreements} /></client-only>
  </div>
</template>

<script>
<<<<<<< HEAD
<<<<<<< HEAD:pages/Admin/Add-New/sample-add.vue
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

  },
=======
  import gql from "graphql-tag";
  //const createOneAgreements = require("~/graphql/mutation/createOneAgreements");
=======
  import React from 'react';
  import { applyReactInVue } from 'vuereact-combined'
  import { gql, useMutation } from '@apollo/client';
  //import PeriqlesForm from 'periqles';
>>>>>>> 96e378cd57df0c39e8f9cc3b469c0d6b486d0bc7
  import Editor from '~/components/Editor.vue'

  const ADD_AGREEMENTS = gql`
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
>>>>>>> 4a89a3e9063a4064fdc600fa5d73623587dff5cf:pages/Admin/sample-add.vue
    components: {
      Editor,
      //PeriqlesForm: applyReactInVue(PeriqlesForm)
    },
    head: {
      title: 'Add New Agreement'
    },
  }

</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

  li {
    display: inline-block;
  }

  #agreementType {
    width: 50%;
  }

</style>
