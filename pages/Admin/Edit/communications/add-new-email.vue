<template>
  <div>
    <form @submit.prevent="addEmail()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Email" /></a>
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
                <input v-model="from" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Send Email To</td>
              <td>
                <input v-model="cc" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">BCC</td>
              <td>
                <input v-model="bcc" type="text" value="BCC is another email address you will be sending email to but won't see anyone else you are emailing" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Email Subject</td>
              <td>
                <input v-model="subject" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Insert Media</td>
              <td>
                  <input v-model="media" type="image" name="file" value="Insert a file, image, video, or other content" multiple />
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
    </form>
  </div>
</template>

<script>
  import  gql from "graphql-tag";

  import findManyEmails from "~/graphql/query/findManyEmails";

  const ADD_EMAILS = gql`
    mutation ($from:String!,$subject:String!,$bcc:String!,$content:String!,$media:String!,$bcc:String!,$cc:String!){
    createOneEmails(data: {from: $from, subject: $subject, bcc: $bcc, content: $content, cc: $cc}) {
            from
            subject
            bcc
            cc
            content
            media
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
        content: " ",
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
                query: findManyEmails
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
