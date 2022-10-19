<template>
  <template v-if="specs">
    {{
      generateSpecifiedElement({
        field,
        specs,
        formState,
        setFormState,
        handleChange,
      })
    }}
  </template>
  <template v-else> </template>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  import { generateDefaultElement, generateSpecifiedElement } from './functions';
  const props = defineProps({
    field,
    specs,
    formState,
    setFormState,
    handleChange,
  });
</script>

<style lang="less" scoped src="./index.less"></style>
