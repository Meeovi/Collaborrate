<template>
  <div>
    <form v-for="warehouse in warehouses" :key="warehouse.id" method="POST" enctype="multipart/form-data" @submit.prevent>
      <div class="table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="warehouseAddOptions">
                <li>
                  <input type="submit" value="Save" @click="addWAREHOUSE" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Status</td>
              <td>
                <input v-model="status" type="checkbox" />{{ warehouse.status }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Warehouse Name</td>
              <td>
                <input v-model="name" type="text" required />{{ warehouse.name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <input v-model="description" type="text" />{{ warehouse.description }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Category</td>
              <td>
                <input v-model="category" type="textarea" />{{ warehouse.category }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">City</td>
              <td>
                <input v-model="city" type="text" placeholder="#" required />{{ warehouse.city }}
              </td>
            </tr>
            
            <tr>
              <td style="text-align: right;">State</td>
              <td>
                <input v-model="state" type="text" />{{ warehouse.state }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Country</td>
              <td>
                <input v-model="country" type="text" />{{ warehouse.country }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Postal Code</td>
              <td>
                <input v-model="postal" type="text" />{{ warehouse.postal }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Products</td>
              <td>
                <input v-model="products" type="text" />{{ warehouse.products }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Image</td>
              <td>
                <input v-model="image" type="text" />{{ warehouse.image }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Public</td>
              <td>
                <input v-model="isPublic" type="checkbox" />{{ warehouse.isPublic }}
              </td>
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
import  warehouses from '~/apollo/mutations/shop/warehouses'
import  allWarehouses from '~/apollo/queries/shop/warehouses'

const DELETE_WAREHOUSE = gql `
  mutation delete_warehouses($id: Int!){
  delete_warehouses(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_WAREHOUSE = gql `
  mutation update_warehouses($id: Int!){
  update_warehouses(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Warehouse'
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
   async deleteWarehouse(warehouse){
    await this.$apollo.mutate({
        mutation: DELETE_WAREHOUSE,
        variables: {
          id: warehouse.id
        },
        refetchQueries: [
          {
            query: allWarehouses
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/shop/warehouses'})
            }).catch(err => console.log(err));
    },
    async updateWarehouse(warehouse){
    await this.$apollo.mutate({
        mutation: UPDATE_WAREHOUSE,
        variables: {
          id: warehouse.id
        },
        refetchQueries: [
          {
            query: allWarehouses
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    warehouses: {
      query: warehouses,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

</style>
