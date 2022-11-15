<template>
  <div>
    <client-only><PeriqlesForm useMutation={createOneAgreements} /></client-only>
  </div>
</template>

<script>
  import React from 'react';
  import { applyReactInVue } from 'vuereact-combined'
  import { gql, useMutation } from '@apollo/client';
  //import PeriqlesForm from 'periqles';
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
