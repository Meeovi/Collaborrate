<template>
    <ais-instant-search :search-client="searchClient" index-name="steam-video-games">
        <ais-search-box />
        <ais-hits>
            <template v-slot:item="{ item }">
                <h2>{{ item.name }}</h2>
            </template>
        </ais-hits>
    </ais-instant-search>
</template>

<script>
    import {
        instantMeiliSearch
    } from "@meilisearch/instant-meilisearch";
    import "instantsearch.css/themes/algolia-min.css";


    export default {
        data() {
            return {
                searchClient: instantMeiliSearch(
                    "https://integration-demos.meilisearch.com",
                    "99d1e034ed32eb569f9edc27962cccf90b736e4c5a70f7f5e76b9fab54d6a185"
                ),
            };
        },
    };
</script>