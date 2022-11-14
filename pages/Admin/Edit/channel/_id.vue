<template>
    <div>
        <form v-for="channel in findManyChannels" :key="channel.id"  @submit.prevent="add()">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="caseAddOptions">
                            <li><input type="submit" value="Save" @submit.prevent="addChannel" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Code</td>
                        <td><input :value="channel.code" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Channel Name</td>
                        <td><input :value="channel.name" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Client ID</td>
                        <td><input :value="channel.client_id" type="password"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Client Secret</td>
                        <td><input :value="channel.client_secret" type="password"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Default Channel</td>
                        <td><input :value="channel.default_zone" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Default Shipping</td>
                        <td><input :value="channel.default_shipping" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Default Language</td>
                        <td><input :value="channel.default_lang" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Currency</td>
                        <select :value="channel.currencies" name="template" class="form-category">
                            <option v-for="currencies in findManyCurrencies" :key="currencies" :value="currencies"></option>
                        </select>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Include Tax</td>
                        <td><input :value="channel.include_tax" type="checkbox"  /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </form>
    </div>
</template>

<script>
/* eslint-disable camelcase */
import  gql from 'graphql-tag'
//import  findManyChannels from '~/graphql/mutation/createOneChannels'
import  findManyCurrencies from "~/graphql/query/findManyCurrencies"

const DELETE_CHANNEL = gql`
  mutation deleteOneZones($id: Int!){
  deleteOneZones(where: {id: $id}){
    default_shipping
        client_id
        client_secret
        default_zone
        code
        default_lang
        name
        currency
        include_tax
  }
}
`;

const UPDATE_CHANNEL = gql`
  mutation updateOneZones($id: Int!){
  updateOneZones(data: {client_id: $client_id, client_secret: $client_secret, default_shipping: $default_shipping, default_zone: $default_zone, default_lang: $default_lang, code: $code, include_tax: $include_tax, name: $name, currency: $currency}, (where: {id: $id})){
    default_shipping
        client_id
        client_secret
        default_zone
        code
        default_lang
        name
        currency
        include_tax
  }
}
`;

export default {
    head: {
        name: 'Edit Channel'
    },
 mounted(){
      this.forceRerender();
  },
  // eslint-disable-next-line vue/order-in-components
  data(){
      return{
          componentKey: 0
      }
  },
  methods: {
   async deleteChannel(channel){
    await this.$apollo.mutate({
        mutation: DELETE_CHANNEL,
        variables: {
          id: channel.id
        },
        refetchQueries: [
          {
            query: findManyChannels
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../admin/system/general-settings'})
            }).catch(err => console.log(err));
    },
    async updateChannel(channel){
    await this.$apollo.mutate({
        mutation: UPDATE_CHANNEL,
        variables: {
          id: channel.id
        },
        refetchQueries: [
          {
            query: findManyChannels
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyChannels: {
      query: findManyChannels,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    },
    findManyCurrencies: {
        prefetch: true,
        query: findManyCurrencies
      }
  },
}
</script>

<style>
input, select, option {
    padding: 5px;
}

li {
    display: inline-block;
}
</style>