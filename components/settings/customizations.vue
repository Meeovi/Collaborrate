// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div>
    <FormulateForm v-for="customization in AllCustomizations" :key="customization.id" method="POST" @submit.prevent>
      <div class="table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th />
              <th scope="col" class="customizationAddOptions">
                <li><input type="submit" label="Delete" @submit.prevent="deleteCustomization(customization)"></li>
                <li><input type="submit" label="Save" @submit.prevent="updateCustomization"></li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">
                Site Name
              </td>
              <td><input type="text" :value="site_name" required>{{ customization.site_name }}</td>
            </tr>
            <tr>
              <td style="text-align: right;">
                Site URL
              </td>
              <td><input type="text" :value="site_url">{{ customization.site_url }}</td>
            </tr>
            <tr>
              <td style="text-align: right;">
                Nav Link
              </td>
              <td>
                <div class="field-group">
                  <div class="repeatable-container" />
                  <input type="text" :value="nav_link">{{ customization.nav_link }} <span class="fas fa-circle-plus" />
                  <input type="button" class="delete" value="X">
                </div>
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">
                Footer Link
              </td>
              <td>
                <div class="field-group">
                  <div class="repeatable-container" />
                  <input type="text" :value="footer_link">{{ customization.footer_link }}
                  <input type="button" class="delete" value="X">
                </div>
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">
                Email
              </td>
              <td><input type="text" :value="email">{{ customization.email }}</td>
            </tr>
            <tr>
              <td style="text-align: right;">
                Notifications
              </td>
              <td>
                <div class="field-group">
                  <div class="repeatable-container" />
                  <input type="textarea" :value="notification">{{ customization.notification }}
                  <input type="button" class="delete" value="X">
                </div>
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">
                Announcement
              </td>
              <td>
                <div class="field-group">
                  <div class="repeatable-container" />
                  <input type="textarea" :value="announcement">{{ customization.announcement }}
                  <input type="button" class="delete" value="X">
                </div>
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">
                Allow User Signup
              </td>
              <td><input type="checkbox" label="Check box if users can create accounts on your site?" :value="allow_signup">{{ customization.allow_signup }}</td>
            </tr>
            <tr>
              <td style="text-align: right;">
                Banners
              </td>
              <td><input type="image" :value="banner">{{ customization.banner }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br><br>
      <div id="accordionExample" class="accordion">
        <div class="accordion-item">
          <h2 id="headingOne" class="accordion-header">
            <input
              class="accordion-button"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
            Content
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-mdb-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="table table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">
                        Excerpt
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            id="excerpt"
                            type="textarea"
                            validation="required|max:50,length"
                            cols="50"
                            rows="10"
                          >{{ customization.excerpt }}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">
                        Description
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <client-only>
                            <vue-simplemde id="customizationDescription" />{{ customization.content }}
                          </client-only>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="headingThree" class="accordion-header">
            <input
              class="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            Images and Videos
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-mdb-parent="#accordionExample"
          >
            <div class="accordion-body">
              <td>
                <input
                  type="image"
                  upload-url="/media"
                  name="headshot"
                  :label="customization.image"
                  help="Select a png, jpg or gif to upload."
                  validation="mime:image/jpeg,image/png,image/gif"
                >
              </td>
            </div>
          </div>
        </div>
      </div>
    </FormulateForm>
  </div>
</template>

<script>
/* // eslint-disable-next-line camelcase
import gql from 'graphql-tag'
//import customizations from '../../graphql/mutation/createOneSettings'

const DELETE_CUSTOMIZATION = gql`
  mutation delete_customizations($id: Int!){
  delete_customizations(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`

const UPDATE_CUSTOMIZATION = gql`
  mutation update_customizations($id: Int!){
  update_customizations(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`

export default {
  mounted () {
    this.forceRerender()
  },
  // eslint-disable-next-line vue/order-in-components
  data () {
    return {
      componentKey: 0
    }
  },
  methods: {
    async deleteCustomization (customization) {
      await this.$apollo.mutate({
        mutation: DELETE_CUSTOMIZATION,
        variables: {
          id: customization.id
        },
        refetchQueries: [
          {
            query: customizations
          }

        ]
      }).then(() => {
        this.$router.push({ path: '../../admin/system/general-settings' })
      }).catch(err => console.log(err))
    },
    async updateCustomization (customization) {
      await this.$apollo.mutate({
        mutation: UPDATE_CUSTOMIZATION,
        variables: {
          id: customization.id
        },
        refetchQueries: [
          {
            query: customizations
          }

        ]
      })
    },
    forceRerender () {
      this.componentKey += 1
    }
  },
  apollo: {
    customizations: {
      query: customizations,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables () {
        return { id: this.$route.params.id }
      }
    }
  }
} */
</script>

<style>
input, select, option {
    padding: 5px;
}

li {
    display: inline-block;
}
</style>
