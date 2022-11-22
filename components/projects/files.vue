<template>
  <div>
    <table class="table">
      <tbody class="row">
        <tr class="col">
          <td>
            <!-- Container for demo purpose -->
            <div class="container my-5 py-5">

              <!--Section: Design Block-->
              <section>

                <div class="lightbox">
                  <div class="row">
                    <div class="col-lg-4 mb-4" v-for="project in findManyProjects" :key="project.id">
                      <img :src="project.files"
                        :data-mdb-img="project.file"
                        :alt="project.name" class="w-100 shadow-1-strong rounded" />
                    </div>
                  </div>
                </div>

              </section>
              <!--Section: Design Block-->

            </div>
            <!-- Container for demo purpose -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Editor from '~/components/Editor.vue'

  export default {

    components: {
      Editor
    },
  }

</script>

<style>

</style>
