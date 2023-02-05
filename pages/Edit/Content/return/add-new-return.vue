<template>
  <div>
    <form enctype="multipart/form-data"  @submit.prevent="addReturn">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteAgreement(agreement)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" hint="Save Return" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Return</a>
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
                      <td style="text-align: right;"></td>
                      <td>
                        <p>Use this form to create eWaste (For damaged recycleable products), Return Merchandise
                          Authorization (RMA), and Liquidations (For damaged products)</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Returns Type</td>
                      <td>
                        <select id="returnType" v-model="type">
                          <option value="equipmentReturn">Product Return</option>
                          <option value="rma">Return Merchandise Authorization (RMA)</option>
                          <option value="liquidations">Liquidations</option>
                          <option value="ewaste">eWaste</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Returns Status</td>
                      <td>
                        <select id="returnStatus" v-model="status">
                          <option value="equipmentReturn">Draft</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Returns Name</td>
                      <td>
                        <input id="returnsName" v-model="name" type="text" required />
                        <p for="name">Name of the return</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Time limit of validity</td>
                      <td>
                        <input id="returnsName" v-model="validity" type="number" required />
                        <p for="validity">How many days can a customer return a product?</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Returns prefix</td>
                      <td>
                        <input id="returnsName" v-model="return_prefix" type="text" required />
                        <p for="returnsPrefix">Prefix used for returns name (e.g. RE00001).</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Height</td>
                      <td>
                        <input id="returnsHeight" v-model="height" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Weight</td>
                      <td>
                        <input id="returnsWeight" v-model="weight" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">External Case ID</td>
                      <td>
                        <input id="returnsWeight" v-model="case_id" type="number" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">From Location</td>
                      <td>
                        <input id="returnsLocation" v-model="location" type="text" />
                      </td>
                    </tr>
                  </tbody>
                  </v-table>
                    </div>
            </div>
                    <br><br>
                    <div id="accordionExample" class="accordion">
                      <div class="accordion-item">
                        <h2 id="headingOne" class="accordion-header">
                          <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Shippings
                          </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                          data-mdb-parent="#accordionExample">
                          <div class="accordion-body">
                            <div class="table table-responsive">
                              <v-table class="table">
                                <tbody>
                                  <tr>
                                    <td style="text-align: right;">Shipping Number</td>
                                    <td>
                                      <input id="shippingNumber" v-model="shippingNumber" type="number" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: right;">Shipping Description</td>
                                    <td>
                                      <input id="shippingDescription" v-model="shippingDescription" type="text" /><br><br>
                                      <input type="submit" class="btn btn-primary fas fa-plus" hint="Add Shipping" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: right;">Ship To Address</td>
                                    <td>
                                      <input id="returnsWeight" v-model="shipTo" type="text" />
                                    </td>
                                  </tr>
                                </tbody>
                              </v-table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 id="headingThree" class="accordion-header">
                          <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Images and Videos
                          </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                          data-mdb-parent="#accordionExample">
                          <div class="accordion-body">
                            <td>
                              <div class="media-upload-wrapper">
                                <input type="media" id="input-media-now" class="media-upload-input"
                                  data-mdb-media-upload="media-upload" data-mdb-accepted-extensions="link/*" />
                              </div>
                            </td>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 id="headingFive" class="accordion-header">
                            <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                              data-mdb-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                              Add Liquidations
                            </button>
                          </h2>
                          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                            data-mdb-parent="#accordionExample">
                            <div class="accordion-body">
                              <tr class="col-lg-6">
                                <td>
                                  <label for="products">Products</label><br>
                                  <select id="products" v-model="products">
                                    <option v-for="products in findManyProducts" :key="products.id" :hint="products">
                                      {{ products.name }}</option>
                                  </select>
                                </td>
                              </tr>
                            </div>
                          </div>
                        </div>
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
  import findManyReturns from "../../graphql/query/findManyReturns";
  import findManyProducts from "../../graphql/query/findManyProducts";

  const ADD_RETURNS = gql`
    mutation ($name:String!,$validity:String!,$return_prefix:String!, $description:String!, $shippingNumber:String!, $shippingDescription:String!, $status:String!, $liquidationReason:String!, $media:String!, $weight:String!, $height:String!, $howShipped:String!, $type:String!, $location:String!, $shipTo:String!, $products:String!, $case_id:String!){
    createOneReturns(data: {name: $name, validity: $validity, return_prefix: $return_prefix, description: $description, shippingNumber: $shippingNumber, shippingDescription: $shippingDescription, status: $status, liquidationReason: $liquidationReason, media: $media, weight: $weight, height: $height, howShipped: $howShipped, type: $type, location: $location, shipTo: $shipTo, products: $products, case_id: $case_id}) {
        name
        validity
        return_prefix
        howShipped
        description
        shippingNumber
        shippingDescription
        status
        liquidationReason
        media
        height
        weight
        type
        products
        location
        shipTo
        case_id
  }
}`;

  export default {
    data() {
      return {
        name: " ",
        validity: " ",
        return_prefix: " ",
        howShipped: " ",
        description: " ",
        shippingNumber: " ",
        shippingDescription: " ",
        status: " ",
        liquidationReason: " ",
        media: " ",
        height: " ",
        weight: " ",
        type: " ",
        products: " ",
        location: " ",
        shipTo: " ",
        case_id: " ",
      }
    },
    head: {
      title: 'Add New Return'
    },
    /* eslint-disable camelcase */
    methods: {
      async addReturn() {
        const name = this.name;
        const validity = this.validity;
        const howShipped = this.howShipped;
        const description = this.description;
        const shippingNumber = this.shippingNumber;
        const return_prefix = this.return_prefix;
        const shippingDescription = this.shippingDescription;
        const status = this.status;
        const liquidationReason = this.liquidationReason;
        const weight = this.weight;
        const height = this.height;
        const media = this.media;
        const type = this.type;
        const location = this.location;
        const products = this.products;
        const shipTo = this.shipTo;
        const case_id = this.case_id;
        await this.$apollo.mutate({
          mutation: ADD_RETURNS,
          variables: {
            name,
            validity,
            howShipped,
            description,
            shippingNumber,
            shippingDescription,
            return_prefix,
            status,
            liquidationReason,
            media,
            height,
            weight,
            type,
            location,
            products,
            shipTo,
            case_id,
          },
          update: (cache, {
            data: {
              insertReturns
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedReturn = insertReturns.returning;
              console.log(insertedReturn)
              cache.writeQuery({
                query: findManyReturns
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../../marketing/returns'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.validity = ' ';
        this.howShipped = ' ';
        this.description = ' ';
        this.return_prefix = ' ';
        this.shippingNumber = ' ';
        this.shippingDescription = ' ';
        this.status = ' ';
        this.liquidationReason = ' ';
        this.weight = ' ';
        this.height = ' ';
        this.media = ' ';
        this.type = ' ';
        this.shipTo = ' ';
        this.location = ' ';
        this.products = ' ';
        this.case_id = ' ';
      },
    },
    apollo: {
      findManyProducts: {
        prefetch: true,
        query: findManyProducts
      }
    }
  }

</script>

<style>
  input,
  select,
  option {
    padding: 5px;
    width: 50%;
  }

  li {
    display: inline-block;
  }

</style>
