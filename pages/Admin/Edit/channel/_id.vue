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
                        <td><input v-model="code" type="text" value="Example is FASHION_WEB"  />{{ channel.code }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Channel Name</td>
                        <td><input v-model="name" type="text" value="Example is eBay, Fashion Web Store, etc" />{{ channel.name }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Client ID</td>
                        <td><input v-model="client_id" type="password"  />{{ channel.client_id }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Client Secret</td>
                        <td><input v-model="client_secret" type="password"  />{{ channel.client_secret }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Default Channel</td>
                        <td><input v-model="default_zone" type="text"  />{{ channel.default_zone }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Default Shipping</td>
                        <td><input v-model="default_shipping" type="text"  />{{ channel.default_shipping }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Default Language</td>
                        <td><input v-model="default_lang" type="text"  />{{ channel.default_lang }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Currency</td>
                        <select v-model="currencies" name="template" class="form-category">
                            <option v-for="currencies in findManyCurrencies" :key="currencies" :value="currencies">{{ currencies.name }}</option>
                        </select>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Include Tax</td>
                        <td><input v-model="include_tax" type="checkbox"  />{{ channel.include_tax }}</td>
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
import  findManyChannels from '~/graphql/generated/mutations/createOneChannels'
import  findManyCurrencies from "~/graphql/generated/queries/findManyCurrencies"

const DELETE_CHANNEL = gql`
  mutation deleteOneZones($id: Int!){
  deleteOneZones(where: {id: {equals: $id}}){
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
  updateOneZones(data: {client_id: $client_id, client_secret: $client_secret, default_shipping: $default_shipping, default_zone: $default_zone, default_lang: $default_lang, code: $code, include_tax: $include_tax, name: $name, currency: $currency}, where: {id: {equals: $id}}){
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
            this.$router.push({path: '../admin/system/general-settings'})
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