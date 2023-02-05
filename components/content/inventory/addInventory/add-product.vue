<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Product
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Product</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Legal first name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Legal middle name" hint="example of helper text only on focus">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Legal last name*" hint="example of persistent helper text"
                                        persistent-hint required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Email*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Password*" type="password" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required>
                                    </v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-autocomplete
                                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                        label="Interests" multiple></v-autocomplete>
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

    import findManyProducts from "../../../../graphql/query/findManyProducts.gql"
    import findManyCategories from "../../../../graphql/query/findManyCategories.gql"
    import findManyCountries from "../../../../graphql/query/findManyCountries.gql"
    import attributes from "../../../../graphql/query/findManyAttributes.gql"
    import findManyProduct_types from "../../../../graphql/query/findManyProduct_types.gql"
    import findManyBrands from "../../../../graphql/query/findManyBrands.gql"
    import manufacturers from "../../../../graphql/query/manufacturers.gql"
    import findManyTags from "../../../../graphql/query/findManyTags.gql"
    import findManyZones from "../../../../graphql/query/findManyZones.gql"

    const ADD_PRODUCTS = gql `
    mutation ($attributes: String!, $brand: String!, $categories: String!, $content: String!, $cost_string: String!, $country: String!, $created_at: String!, $customer_type: String!, $family: String!, $file: String!, $format: String!, $height: String!, $id: String!, $image: String!, $manufacture: String!, $manufacturer_part_number: String!, $occassions: String!, $name: String!, $meta_url: String!, $meta_title: String!, $meta_keywords: String!, $meta_description: String!, $part_number: String!, $price: String!, $product: String!, $quantity_per_source: String!, $related_product: String!, $salable_quantity: String!, $short_description: String!, $size: String!, $sku: String!, $status: String!, $stock_status: String!, $tags: String!, $tax_class: String!, $thumbnail: String!, $types: String!, $variants: String!, $visibility: String!, $websites: String!, $weight: String!, $zone: String!){
    createOneProducts(data: {attributes: $attributes, brand: $brand, categories: $categories, content: $content, cost_string: $cost_string, country: $country, created_at: $created_at, customer_type: $customer_type, family: $family, file: $file, format: $format, height: $height, id: $id, image: $image, manufacture: $manufacture, manufacturer_part_number: $manufacturer_part_number, occassions: $occassions, name: $name, meta_url: $meta_url, meta_title: $meta_title, meta_keywords: $meta_keywords, meta_description: $meta_description, part_number: $part_number, price: $price, product: $product, quantity_per_source: $quantity_per_source, related_product: $related_product, salable_quantity: $salable_quantity, short_description: $short_description, size: $size, sku: $sku, status: $status, stock_status: $stock_status, tags: $tags, tax_class: $tax_class, thumbnail: $thumbnail, types: $types, variants: $variants, visibility: $visibility, websites: $websites, weight: $weight, zone: $zone}) {
        attributes
        brand
        categories
        content
        cost_string
        country
        created_at
        customer_type
        family
        file
        format
        height
        id
        image
        manufacture
        manufacturer_part_number
        occassions
        name
        meta_url
        meta_title
        meta_keywords
        meta_description
        part_number
        price
        product
        quantity_per_source
        related_product
        salable_quantity
        short_description
        size
        sku
        status
        stock_status
        tags
        tax_class
        thumbnail
        types
        variants
        visibility
        websites
        weight
        zone
  }
}`;

    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                attributes: [],
                brand: [],
                categories: [],
                content: " ",
                cost_string: " ",
                country: [],
                created_at: " ",
                customer_type: " ",
                family: " ",
                file: " ",
                format: " ",
                height: " ",
                id: " ",
                image: " ",
                manufacture: [],
                manufacturer_part_number: " ",
                occassions: [],
                name: " ",
                meta_url: " ",
                meta_title: " ",
                meta_keywords: " ",
                meta_description: " ",
                part_number: " ",
                price: " ",
                product: [],
                quantity_per_source: " ",
                related_product: " ",
                salable_quantity: " ",
                short_description: " ",
                size: " ",
                sku: " ",
                status: " ",
                stock_status: " ",
                tags: [],
                tax_class: " ",
                thumbnail: " ",
                types: [],
                variants: " ",
                visibility: " ",
                websites: " ",
                weight: " ",
                zone: [],
                show: true
            }
        },

        methods: {
            async addProduct() {
                const attributes = this.attributes;
                const brand = this.brand;
                const categories = this.categories;
                const content = this.content;
                const cost_string = this.cost_string;
                const country = this.country;
                const created_at = this.created_at;
                const customer_type = this.customer_type;
                const family = this.family;
                const file = this.file;
                const format = this.format;
                const height = this.height;
                const id = this.id;
                const image = this.image;
                const manufacture = this.manufacture;
                const manufacturer_part_number = this.manufacturer_part_number;
                const occassions = this.occassions;
                const name = this.name;
                const meta_url = this.meta_url;
                const meta_title = this.meta_title;
                const meta_keywords = this.meta_keywords;
                const meta_description = this.meta_description;
                const part_number = this.part_number;
                const price = this.price;
                const product = this.product;
                const quantity_per_source = this.quantity_per_source;
                const related_product = this.related_product;
                const salable_quantity = this.salable_quantity;
                const short_description = this.short_description;
                const size = this.size;
                const sku = this.sku;
                const status = this.status;
                const stock_status = this.stock_status;
                const tags = this.tags;
                const tax_class = this.tax_class;
                const thumbnail = this.thumbnail;
                const types = this.types;
                const variants = this.variants;
                const visibility = this.visibility;
                const websites = this.websites;
                const weight = this.weight;
                const zone = this.zone;


                await this.$apollo.mutate({
                    mutation: ADD_PRODUCTS,
                    variables: {
                        attributes,
                        brand,
                        categories,
                        content,
                        cost_string,
                        country,
                        created_at,
                        customer_type,
                        family,
                        file,
                        format,
                        height,
                        id,
                        image: target.files[0],
                        manufacture,
                        manufacturer_part_number,
                        occassions,
                        name,
                        meta_url,
                        meta_title,
                        meta_keywords,
                        meta_description,
                        part_number,
                        price,
                        product,
                        quantity_per_source,
                        related_product,
                        salable_quantity,
                        short_description,
                        size,
                        sku,
                        status,
                        stock_status,
                        tags,
                        tax_class,
                        thumbnail,
                        types,
                        variants,
                        visibility,
                        websites,
                        weight,
                        zone,
                    },
                    update: (cache, {
                        data: {
                            insertCategories,
                            insertCountries,
                            insertAttributes,
                            insertproduct_types,
                            insertBrands,
                            insertOccassions,
                            insertZones,
                            insertTags,
                            insertmanufacturer,
                            insertProducts,
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedCategory = insertCategories.returning;
                            const insertedCountries = insertCountries.returning;
                            const insertedAttributes = insertAttributes.returning;
                            const insertedproduct_types = insertproduct_types.returning;
                            const insertedBrands = insertBrands.returning;
                            const insertedOccassions = insertOccassions.returning;
                            const insertedZones = insertZones.returning;
                            const insertedTags = insertTags.returning;
                            const insertedmanufacturer = insertmanufacturer.returning;
                            const insertedProducts = insertProducts.returning;
                            console.log(insertedCategory, insertedCountries, insertedAttributes,
                                insertedproduct_types,
                                insertedBrands, insertedOccassions, insertedZones, insertedTags,
                                insertedmanufacturer,
                                insertedProducts)
                            cache.writeQuery({
                                query: findManyProducts
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../inventory/products'
                    })
                }).catch(err => console.log(err));
                this.attributes = ' ';
                this.brand = ' ';
                this.categories = ' ';
                this.content = ' ';
                this.cost_string = ' ';
                this.country = ' ';
                this.created_at = ' ';
                this.customer_type = ' ';
                this.family = ' ';
                this.file = ' ';
                this.format = ' ';
                this.height = ' ';
                this.id = ' ';
                this.image = ' ';
                this.manufacture = ' ';
                this.manufacturer_part_number = ' ';
                this.occassions = ' ';
                this.name = ' ';
                this.meta_url = ' ';
                this.meta_title = ' ';
                this.meta_keywords = ' ';
                this.meta_description = ' ';
                this.part_number = ' ';
                this.price = ' ';
                this.product = ' ';
                this.quantity_per_source = ' ';
                this.related_product = ' ';
                this.salable_quantity = ' ';
                this.short_description = ' ';
                this.size = ' ';
                this.sku = ' ';
                this.status = ' ';
                this.stock_status = ' ';
                this.tags = ' ';
                this.tax_class = ' ';
                this.thumbnail = ' ';
                this.types = ' ';
                this.variants = ' ';
                this.visibility = ' ';
                this.websites = ' ';
                this.weight = ' ';
                this.zone = ' ';
            },
        },
        apollo: {
            findManyCategories: {
                prefetch: true,
                query: findManyCategories
            },
            findManyCountries: {
                prefetch: true,
                query: findManyCountries
            },
            attributes: {
                prefetch: true,
                query: attributes
            },
            findManyProduct_types: {
                prefetch: true,
                query: findManyProduct_types
            },
            findManyBrands: {
                prefetch: true,
                query: findManyBrands
            },
            manufacturers: {
                prefetch: true,
                query: manufacturers
            },
            findManyTags: {
                prefetch: true,
                query: findManyTags
            },
            findManyZones: {
                prefetch: true,
                query: findManyZones
            },
            findManyProducts: {
                prefetch: true,
                query: findManyProducts
            }
        }
    }
</script>