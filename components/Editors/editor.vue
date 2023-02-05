<template>
    <div id="app" class="editor">
      <form >
      <editor
        api-key="zsmyw9sudq9kejtndaxtq1fewjgn0mojynbnrof2w0cf9pbk"
        :init="{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen emoticons',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'insertfile image media | link | undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | emoticons',
          image_uploadtab: true,
          image_title: true,
          automatic_uploads: true,
          file_picker_types: 'image',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }"
      />
      <br>
    </form>
    </div>
  </template>
  
  <script>
  import Editor from '@tinymce/tinymce-vue'
  
  export default {
    name: 'app',
    components: {
      'editor': Editor
    }
  }
  </script>
  