<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Pdftemplate" @click="addPdftemplate" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Pdftemplate</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
        <table class="table">
          <tbody>
            <tr>
              <td style="text-align: right;">Active</td>
              <td>
                <FormulateInput v-model="active" type="checkbox" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Template Name</td>
              <td>
                <FormulateInput v-model="name" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Subject</td>
              <td>
                <FormulateInput v-model="orientation" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <FormulateInput v-model="content" type="textarea" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Header</td>
              <td>
                <FormulateInput v-model="margin_bottom" type="text" placeholder="#" required />
              </td>
            </tr>
            
            <tr>
              <td style="text-align: right;">Footer</td>
              <td>
                <FormulateInput v-model="margin_footer" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Width</td>
              <td>
                <FormulateInput v-model="page_size" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Height</td>
              <td>
                <FormulateInput v-model="margin_header" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Type</td>
              <td>
                <FormulateInput v-model="type" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Media</td>
              <td>
                <FormulateInput v-model="margin_right" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Assigned To</td>
              <td>
                <FormulateInput v-model="assigned_to" type="text" />
              </td>
            </tr>
          </tbody>
        </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormulateForm>
  </div>
</template>

<script>
  import gql from "graphql-tag";
  /* eslint-disable camelcase */
  import {
    pdf_templates
  } from "~/apollo/queries/marketing/pdf_templates";

  const ADD_PDF_TEMPLATES = gql `
    mutation ($name: String!,$margin_header: String!,$margin_bottom: String!,$margin_footer: String!,$content: String!,$margin_left: String!,$margin_right: String!,$orientation: String!,$type: String!,$assigned_to: String!,$active: String!,$margin_top: String!,$page_size: String){
    insert_pdf_templates(objects: {name: $name,margin_header: $margin_header,margin_bottom: $margin_bottom,margin_footer: $margin_footer,content: $content,assigned_to: $assigned_to,active: $active,margin_left: $margin_left,margin_right: $margin_right,orientation: $orientation,type: $type,active: $active,page_size: $page_size,margin_top: $margin_top}) {
        affected_rows
        returning {
            name
            margin_header
            margin_bottom
            margin_footer
            content
            assigned_to
            active
            margin_left
            margin_right
            orientation
            type
            page_size
            margin_top
    }
  }
}`;

  export default {
    data() {
      return {
        active: [],
        margin_right: [],
        thumbnail: " ",
        name: " ",
        margin_header: " ",
        margin_bottom: " ",
        margin_footer: " ",
        content: " ",
        margin_left: " ",
        assigned_to: " ",
        orientation: " ",
        type: " ",
        page_size: " ",
        margin_top: " ",
        show: true
      }
    },
    head: {
      title: 'Add New PDF Template'
    },

    methods: {
      async addPDF_TEMPLATE({
        target
      }) {
        const name = this.name;
        const margin_header = this.margin_header;
        const margin_bottom = this.margin_bottom;
        const margin_footer = this.margin_footer;
        const content = this.content;
        const assigned_to = this.assigned_to;
        const active = this.active;
        const margin_left = this.margin_left;
        const margin_right = this.margin_right;
        const orientation = this.orientation;
        const type = this.type;
        const page_size = this.page_size;
        const margin_top = this.margin_top;

        await this.$apollo.mutate({
          mutation: ADD_PDF_TEMPLATES,
          variables: {
            name,
            margin_header,
            margin_bottom,
            margin_footer,
            content,
            assigned_to,
            active,
            margin_left,
            margin_right,
            orientation,
            type,
            page_size,
            margin_top,
          },
          update: (cache, {
            data: {
              insertPDF_TEMPLATES,
            }
          }) => {
            try {
              const insertedPDF_TEMPLATE = insertPDF_TEMPLATES.returning;
              console.log(insertedPDF_TEMPLATE)
              cache.writeQuery({
                query: pdf_templates
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../marketing/pdf_templates'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.margin_header = ' ';
        this.margin_bottom = ' ';
        this.margin_footer = ' ';
        this.content = ' ';
        this.assigned_to = ' ';
        this.active = ' ';
        this.margin_left = ' ';
        this.margin_right = ' ';
        this.orientation = ' ';
        this.type = ' ';
        this.active = ' ';
        this.page_size = ' ';
        this.margin_top = ' ';
      },
    },
  }

</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

</style>
