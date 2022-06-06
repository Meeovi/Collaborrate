<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Email" @click="addEmail" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Email</a>
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
              <td style="text-align: right;">Send Email From</td>
              <td>
                <FormulateInput v-model="from" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Send Email To</td>
              <td>
                <FormulateInput v-model="cc" type="text" required></FormulateInput>
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">BCC</td>
              <td>
                <FormulateInput v-model="bcc" type="text" label="BCC is another email address you will be sending email to but won't see anyone else you are emailing"></FormulateInput>
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Email Subject</td>
              <td>
                <FormulateInput v-model="subject" type="text"></FormulateInput>
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Insert Media</td>
              <td>
                  <FormulateInput v-model="media" type="file" name="file" label="Insert a file, image, video, or other content" multiple></FormulateInput>
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Email Content</td>
              <td>
                <client-only>
                    <vue-simplemde id="articleDescription" v-model="content" placeholder="The content of your emails" />
                </client-only>
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

  import {
    emails
  } from "~/apollo/queries/marketing/emails";

  const ADD_EMAILS = gql `
    mutation ($from:String!,$subject:String!,$bcc:String!,$content:String!,$media:String!,$bcc:String!,$cc:String!){
    insert_emails(objects: {from: $from, subject: $subject, bcc: $bcc, content: $content, cc: $cc}) {
        affected_rows
        returning {
            from
            subject
            bcc
            cc
            content
            media
    }
  }
}`;

  export default {
    layout: 'dashboard',
    data() {
      return {
        bcc: [],
        cc: [],
        from: " ",
        subject: " ",
        content: '``` \nconsole.log("lalala") \n```',
        media: [],
      }
    },
    head: {
      from: 'Create A New Email'
    },
    methods: {
      async addEmail() {
        const from = this.from;
        const content = this.content;
        const subject = this.subject;
        const bcc = this.bcc;
        const cc = this.cc;
        const media = this.media;
        await this.$apollo.mutate({
          mutation: ADD_EMAILS,
          variables: {
            from,
            subject,
            bcc,
            cc,
            content,
            media,
          },
          update: (cache, {
            data: {
              insertEmails
            }
          }) => {
            try {
              const insertedEmail = insertEmails.returning;
              console.log(insertedEmail)
              cache.writeQuery({
                query: emails
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../marketing/emails'
          })
        }).catch(err => console.log(err));
        this.from = ' ';
        this.subject = ' ';
        this.bcc = ' ';
        this.cc = ' ';
        this.content = ' ';
        this.media = ' ';
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

  li {
    display: inline-block;
  }

</style>
