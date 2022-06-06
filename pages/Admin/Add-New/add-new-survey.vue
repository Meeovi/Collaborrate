<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Survey" @click="addSurvey" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Survey</a>
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
                      <td style="text-align: right;">Survey Name</td>
                      <td>
                        <FormulateInput v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Categories</td>
                      <td>
                        <select id="category" v-model="categories" name="template" class="form-category">
                          <option v-for="categories in categories" :key="categories" :value="categories">
                            {{ categories.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-wrapper">
                          <FormulateForm v-model="formData">
                            <FormulateInput type="group" name="surveys" :repeatable="true"
                              label="Questions" add-label="+ Add Question" validation="required">
                              <div class="survey">
                                <FormulateInput name="name" validation="required" label="Choice One" />
                              </div>
                            </FormulateInput>
                            <FormulateInput type="radio" label="Select your payment method" name="payment"
                              :options="{paypal: 'PayPal', credit: 'Credit Card'}" />
                              </FormulateForm>
                        </div>
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
    surveys
  } from "~/apollo/queries/reports/surveys";
  import categories from '~/apollo/queries/shop/categories'

  const ADD_SURVEYS = gql `
    mutation ($answer:String! $assigned_to:String! $created_at:String! $description:String! $dissatisfied_text:String! $name:String! $neither_text:String! $question:String! $satisfied_text:String! $status:String! $submit_text:String!){
    insert_surveys(objects: {answer: $answer, assigned_to: $assigned_to, created_at: $created_at, description: $description, dissatisfied_text: $dissatisfied_text, name: $name, neither_text: $neither_text, question: $question, satisfied_text: $satisfied_text, status: $status, submit_text: $submit_text}) {
        affected_rows
        returning {
            answer
            assigned_to
            created_at
            description
            dissatisfied_text
            name
            neither_text
            question
            satisfied_text
            status
            submit_text
            }
  }
}`;

  export default {
    data() {
      return {
        answer: " ",
        assigned_to: " ",
        created_at: " ",
        description: " ",
        dissatisfied_text: " ",
        name: " ",
        neither_text: " ",
        question: " ",
        satisfied_text: " ",
        status: " ",
        submit_text: " ",
      }
    },
    methods: {
      async addSurvey() {
        const answer = this.answer;
        const assigned_to = this.assigned_to;
        const created_at = this.created_at;
        const description = this.description;
        const dissatisfied_text = this.dissatisfied_text;
        const name = this.name;
        const neither_text = this.neither_text;
        const question = this.question;
        const satisfied_text = this.satisfied_text;
        const status = this.status;
        const submit_text = this.submit_text;
        await this.$apollo.mutate({
          mutation: ADD_SURVEYS,
          variables: {
            answer,
            assigned_to,
            created_at,
            description,
            dissatisfied_text,
            name,
            neither_text,
            question,
            satisfied_text,
            status,
            submit_text,
          },
          update: (cache, {
            data: {
              insertCategories
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedCategory = insertCategories.returning;
              console.log(insertedCategory)
              cache.writeQuery({
                query: surveys
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../reports/surveys'
          })
        }).catch(err => console.log(err));
        this.answer = ' ';
        this.assigned_to = ' ';
        this.created_at = ' ';
        this.description = ' ';
        this.dissatisfied_text = ' ';
        this.name = ' ';
        this.neither_text = ' ';
        this.question = ' ';
        this.satisfied_text = ' ';
        this.status = ' ';
        this.submit_text = ' ';
      },

    },
    apollo: {
      categories: {
        prefetch: true,
        query: categories
      }
    },
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Add New Survey'
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
