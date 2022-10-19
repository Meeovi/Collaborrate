<template> </template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { PeriqlesFieldInfo } from '../types';
import { fieldsArrayGenerator } from './functions';
  const props = defineProps({});
  const inputTypeName: string = mutationName + 'Input';
  fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `query typeQuery($inputType: String!)
        {
      __type(name: $inputType) {
          name
          inputFields {
              name
              type {
                  name
                  kind
                  ofType {
                      name
                      kind
                      enumValues {
                          name
                          description
                      }
                  }
                }
            }
        }
      }`,
      variables: {
        inputType: inputTypeName,
      },
    }),
  })
    .then((res) => res.json())
    .then(({ data }) => {
      if (!data) {
        return console.error('ERROR at periqles: Failed to introspect. No data received.');
      }

      if (!data.__type) {
        return console.error('ERROR at periqles: Failed to introspect. No __type property on received data.');
      }

      const typeSchema = data.__type; // intuit fields off the schema

      const fieldsArr: PeriqlesFieldInfo[] = fieldsArrayGenerator(typeSchema, args);
      setFields(fieldsArr);
    })
    .catch((err) => {
      console.error('ERROR at periqles: Failed to introspect.', err);
    });
</script>

<style lang="less" scoped src="./index.less"></style>
