<template>
    <div class="col">
        <div class="table table-responsive table-bordered orderTable col">
                <h4>Latest Blog Articles</h4>
                <table class="table" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Added</th>
                            <th>Read</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="articles in findManyArticles" :key="articles.id">
                            <td>{{ articles.name }}</td>
                            <td>{{ articles.categories }}</td>
                            <td>{{ articles.published }}</td>
                            <td><a :href="`/admin/edit/article/${articles.id}`">View</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
</template>

<script>
import gql from 'graphql-tag';

const findManyArticles = gql`{
    findManyArticles(take: 5) {
    categories
    name
    id
    published
  }
}`
export default {
  apollo: {
    findManyArticles: {
      query: findManyArticles,
      prefetch: true,
    },
  },
}
</script>

<style scoped>

</style>