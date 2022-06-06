<template>
  <div class="col">
    <iframe frameborder="0" marginheight="0" marginwidth="0" title="Data Visualization" allowtransparency="true"
      allowfullscreen="true" class="tableauViz" height="1000px"
      style="display: block; margin: 0px; padding: 0px; border: none; width: 100% !important; height: 1000px;"
      src="https://datadayone.aka.amazon.com/t/ODI/views/IDFPMTracking/IDFPMTracking?:embed=y&amp;:showVizHome=no&amp;:host_url=https%3A%2F%2Fdatadayone.aka.amazon.com%2F&amp;:embed_code_version=3&amp;:tabs=yes&amp;:toolbar=yes&amp;:showAppBanner=false&amp;:display_spinner=no&amp;:loadOrderID=0&amp;:increment_view_count=no"></iframe>
  </div>
</template>

<script>
  import customers from '~/apollo/queries/customers/customerslimit'

  export default {
    data() {
      return {
        customers: [],
      }
    },
    apollo: {
      customers: {
        prefetch: true,
        query: customers
      },
    },
  }

</script>
