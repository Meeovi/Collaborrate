<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-pager"></v-icon>Create Page
                </v-btn>
            </template>
            <v-card>
                <form enctype="multipart/form-data" @submit.prevent="addPage()">
                  <v-toolbar dark style="background-color: lightseagreen;color: white;">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Page</span>
                        </v-card-title>
                    </v-toolbar>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="title" label="Title*" id="pageTitle" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="url_key" label="Page Url*" id="pageUrl" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <client-only><Editor v-model="content" /></client-only>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="meta_title" label="Meta Title" id="metaTitle" hint="Optional"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="meta_keywords" label="Meta Keywords" id="metaKeywords" hint="Optional"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="meta_description" label="Meta Description" id="metaDescription" hint="Optional"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Close
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Create
                    </v-btn>
                </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
  import gql from "graphql-tag";
  import findManyPages from "../../../graphql/query/findManyPages.gql";
  import Editor from '../../../components/Editors/editor.vue'

  const ADD_PAGES = gql`
    mutation ($title:String!,$meta_description:String,$meta_keywords:String,$content:String,$meta_title:String!,$url_key:String){
    createOnePages(data: {title: $title, meta_description: $meta_description, meta_keywords: $meta_keywords, content: $content, meta_title: $meta_title, url_key: $url_key}) {
        meta_keywords
        title
        meta_description
        content
        meta_title
        url_key
  }
}`;

  export default {
    components: { Editor },
    data() {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        meta_keywords: " ",
        title: " ",
        meta_description: " ",
        content: " ",
        meta_title: " ",
        url_key: " ",
      }
    },
    /* eslint-disable camelcase */

    methods: {
      async addPage() {
        const title = this.title;
        const content = this.content;
        const meta_description = this.meta_description;
        const meta_keywords = this.meta_keywords;
        const meta_title = this.meta_title;
        const url_key = this.url_key;
        await this.$apollo.mutate({
          mutation: ADD_PAGES,
          variables: {
            title,
            meta_description,
            meta_keywords,
            content,
            meta_title,
            url_key,
          },
          update: (cache, {
            data: {
              insertPages
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedPage = insertPages.returning;
              console.log(insertedPage)
              cache.writeQuery({
                query: findManyPages
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../content/pages'
          })
        }).catch(err => console.log(err));
        this.title = ' ';
        this.meta_description = ' ';
        this.meta_keywords = ' ';
        this.content = ' ';
        this.meta_title = ' ';
        this.url_key = ' ';
      },
    },
}
</script>