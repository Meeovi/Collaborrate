<template>
  <section class="section">
    <div class="container">
      <h2 class="title">My Profile</h2>
      <div class="content">
        <p>
          <strong>Username:</strong>
          {{ loggedInUser.username }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ loggedInUser.email }}
        </p>
      </div>
    </div>
  </section>
</template>


<script>
  import findManyUsers from '~/graphql/query/findManyUsers'

  export default {
    data() {
      return {
        user: '',
        id: this.$route.params.id
      }
    },
    apollo: {
      // fetch user by ID
      user: {
        query: findManyUsers,
        variables() {
          return {
            id: this.id
          }
        }
      }
    }
  }

</script>
