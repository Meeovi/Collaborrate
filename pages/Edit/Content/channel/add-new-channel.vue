<template>
  <div>
    <form enctype="multipart/form-data"  @submit.prevent="addChannel">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteAgreement(agreement)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" hint="Save Channel" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Channel</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <v-table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Code</td>
                      <td><input v-model="code" type="text" hint="Example is FASHION_WEB" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Channel Name</td>
                      <td><input v-model="name" type="text" hint="Example is eBay, Fashion Web Store, etc" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Client ID</td>
                      <td><input v-model="client_id" type="password" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Client Secret</td>
                      <td><input v-model="client_secret" type="password" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Default Zone</td>
                      <td><select id="zone" v-model="default_zone" name="template" class="form-zone">
                          <option v-for="zone in findManyZones" :key="zone" :hint="zone">{{ zone.name }}</option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Default Shipping</td>
                      <td><input v-model="default_shipping" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Default Language</td>
                      <td><input v-model="default_lang" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Currency</td>
                      <td><select id="currency" v-model="currency" name="template" class="form-currency">
                          <option v-for="currency in findManyCurrencies" :key="currency" :hint="currency">
                            {{ currency.name }}</option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Include Tax</td>
                      <td><select id="includeTax" v-model="include_tax" name="template" class="form-category">
                          <option value="tax">Include Tax</option>
                          <option value="noTax">Exclude Tax</option>
                        </select></td>
                    </tr>
                  </tbody>
                </v-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import gql from "graphql-tag";
  /* eslint-disable camelcase */
  import findManyChannels from "../../graphql/query/findManyChannels";
  import findManyZones from "../../graphql/query/findManyZones";
  import findManyCurrencies from "../../graphql/query/findManyCurrencies";

  const ADD_CHANNELS = gql `
    mutation ($client_id:String!,$client_secret:String,$default_shipping:String,$default_zone:String,$code:String!,$include_tax:String!,$name:String!,$currency:String!,$default_lang:String!){
    createOneChannels(data: {client_id: $client_id, client_secret: $client_secret, default_shipping: $default_shipping, default_zone: $default_zone, default_lang: $default_lang, code: $code, include_tax: $include_tax, name: $name, currency: $currency}) {
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
}`;

  export default {
    data() {
      return {
        default_shipping: [],
        client_id: " ",
        client_secret: " ",
        default_zone: " ",
        code: " ",
        default_lang: " ",
        name: " ",
        currency: " ",
        include_tax: " ",
      }
    },
    methods: {
      async addChannel() {
        const client_id = this.client_id;
        const default_zone = this.default_zone;
        const client_secret = this.client_secret;
        const default_shipping = this.default_shipping;
        const currency = this.currency;
        const default_lang = this.default_lang;
        const include_tax = this.include_tax;
        const name = this.name;
        const code = this.code;
        await this.$apollo.mutate({
          mutation: ADD_CHANNELS,
          variables: {
            default_zone,
            default_shipping,
            default_lang,
            currency,
            code,
            client_secret,
            client_id,
            include_tax,
            name,
          },
          update: (cache, {
            data: {
              insertChannels
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedChannel = insertChannels.returning;
              console.log(insertedChannel)
              cache.writeQuery({
                query: findManyChannels
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../system/general-settings'
          })
        }).catch(err => console.log(err));
        this.client_id = ' ';
        this.default_zone = ' ';
        this.client_secret = ' ';
        this.default_shipping = ' ';
        this.currency = ' ';
        this.default_lang = ' ';
        this.include_tax = ' ';
        this.name = ' ';
        this.code = ' ';
      },
    },
    apollo: {
      findManyZones: {
        prefetch: true,
        query: findManyZones
      },
      findManyCurrencies: {
        prefetch: true,
        query: findManyCurrencies
      },
    },
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Add New Channel'
    }
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

</style>
