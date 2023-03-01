<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Product Attribute
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar color="orange">
                        <v-btn icon @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Product Attribute</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="default_label" label="Default Label*" hint="What is the name of the Attribute. Example: size, color, etc" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="attribute_code" label="Attribute Code" hint="This is used internally. Make sure you don't use spaces or more than 60 symbols."></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="attribute_class" label="Attribute Class"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="attribute_value" :items="['No', 'Yes']" label="Values Required*">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="isPublic" :items="['Private', 'Public']" label="Attribute Status">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="meta_name" label="Attribute SEO Name" hint="Used in searches"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="meta_url" type="url" label="Attribute SEO URL" hint="Used in searches"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="meta_description" label="Attribute SEO Description" hint="Used in searches"></v-textarea>
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
                            Save
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import gql from "graphql-tag";
    import findManyAttributes from "../../../../graphql/query/findManyAttributes.gql";

    const ADD_ATTRIBUTES = gql `
mutation ($default_label:String!,$allow_html_tags_storefront:String!, $attribute_class:String!, $attribute_code:String!, $attribute_value:String!, $column_options:String!, $faceted_navigation:String!, $filter_options:String!, $id:Int!, $isPublic:String!, $layered_navigation:String!, $meta_description:String!, $meta_name:String!, $meta_url:String!, $position:String!, $prod_id:String!,){
    createOneAttribute(data: {default_label: $default_label, allow_html_tags_storefront: $allow_html_tags_storefront, attribute_class: $attribute_class, attribute_code: $attribute_code, attribute_value: $attribute_value, column_options: $column_options, faceted_navigation: $faceted_navigation, filter_options: $filter_options, id: $id, isPublic: $isPublic, layered_navigation: $layered_navigation, meta_description: $meta_description, meta_name: $meta_name, meta_url: $meta_url, position: $position, prod_id: $prod_id,}) {
        default_label
        allow_html_tags_storefront
        attribute_class
        attribute_code
        attribute_value
        column_options
        faceted_navigation
        filter_options
        id
        isPublic
        layered_navigation
        meta_description
        meta_name
        meta_url
        position
        prod_id
        }
}`;

    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,

                default_label: " ",
                allow_html_tags_storefront: " ",
                attribute_class: " ",
                attribute_code: " ",
                attribute_value: " ",
                column_options: " ",
                faceted_navigation: " ",
                filter_options: " ",
                id: " ",
                isPublic: " ",
                layered_navigation: " ",
                meta_description: " ",
                meta_name: " ",
                meta_url: " ",
                position: " ",
                prod_id: " ",
            }
        },
        /* eslint-disable camelcase */
        methods: {
            async addAttribute() {
                const default_label = this.default_label;
                const attribute_code = this.attribute_code;
                const allow_html_tags_storefront = this.allow_html_tags_storefront;
                const attribute_class = this.attribute_class;
                const attribute_value = this.attribute_value;
                const column_options = this.column_options;
                const faceted_navigation = this.faceted_navigation;
                const filter_options = this.filter_options;
                const id = this.id;
                const isPublic = this.isPublic;
                const layered_navigation = this.layered_navigation;
                const meta_description = this.meta_description;
                const meta_name = this.meta_name;
                const meta_url = this.meta_url;
                const position = this.position;
                const prod_id = this.prod_id;

                await this.$apollo.mutate({
                    mutation: ADD_ATTRIBUTES,
                    variables: {
                        default_label,
                        allow_html_tags_storefront,
                        attribute_class,
                        attribute_code,
                        attribute_value,
                        column_options,
                        faceted_navigation,
                        filter_options,
                        id,
                        isPublic,
                        layered_navigation,
                        meta_description,
                        meta_name,
                        meta_url,
                        position,
                        prod_id,
                    },
                    update: (cache, {
                        data: {
                            insertAttributes
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedAttribute = insertAttributes.returning;
                            console.log(insertedAttribute)
                            cache.writeQuery({
                                query: findManyAttributes
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../inventory/attributes'
                    })
                }).catch(err => console.log(err));
                this.default_label = ' ';
                this.allow_html_tags_storefront = ' ';
                this.attribute_class = ' ';
                this.attribute_code = ' ';
                this.attribute_value = ' ';
                this.column_options = ' ';
                this.faceted_navigation = ' ';
                this.filter_options = ' ';
                this.id = ' ';
                this.isPublic = ' ';
                this.layered_navigation = ' ';
                this.meta_description = ' ';
                this.meta_name = ' ';
                this.meta_url = ' ';
                this.position = ' ';
                this.prod_id = ' ';
            },
        },
    }
</script>