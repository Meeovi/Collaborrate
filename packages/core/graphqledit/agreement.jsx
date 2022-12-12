import React from 'react';
import { gql, useMutation } from '@apollo/client';
import PeriqlesForm from 'periqles';

export function AgreementEdit () {
  const UPDATE_AGREEMENT = gql`
    mutation UpdateOneAgreements($name:String!,$excerpt:String!,$type:String!,$content:String!,$image:String!,$user_id: String!, $reference_id: String!, $shop_id: String!){
        updateOneAgreements(data: {reference_id: $reference_id, user_id: $user_id, shop_id: $shop_id, content: $content, excerpt: $excerpt, image: $image, type: $type, name: $name}, where: {id: $id}) {
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

  const [updateOneAgreements, response] = useMutation(UPDATE_AGREEMENT);

  return (<div>
     <h1>Update Agreement</h1>
     <PeriqlesForm
      mutationName={'UpdateOneAgreements'}
      useMutation={updateOneAgreements}
     />
  </div>);
};
