<template>
  <form class="PeriqlesForm" aria-labelledby="form" @submit.prevent="(e) => handleSubmit(e, fields)">
    <template v-if="specifications && specifications.header">
      <h2>{{ specifications.header }}</h2>
    </template>

    <template v-if="fields.length">
      <template v-for="(field, index) in fields" :key="index">
        <PeriqlesField :key="`Periqles${mutationName}Field${index}`" :field="field" :specs="specs"
        :formState="formState" :state.formState= ="state.formState= " :handleChange="handleChange"/>
      </template>
    </template>
    <template v-else>
      <p>Loading form...</p>
    </template>

    <button class="periqles-submit" @click="(e) => handleSubmit(e, fields)">
      Submit
    </button>
  </form>
</template>

<script setup lang="ts">
  import { defineProps, reactive, watchEffect } from "vue";
  import useMutation from 'vue-apollo'
  import PeriqlesField from './PeriqlesField';
  import {introspect} from './functions';
  import {commitMutation} from 'vue-relay';
  import '../periqles.css'
import { Input, PeriqlesFieldInfo, Variables } from "../types";
import Vue from "vue";
          const {ref, watchEffect} = Vue;
          const state = reactive({
    formState: {},
    fields: []
  });
  const props = defineProps({
    environment,
    mutationName,
    mutationGQL,
    useMutation,
    specifications,
    args = {},
    callbacks
  });
  // introspect this project's GraphQL schema on initial render
  watchEffect(() => {
    introspect(mutationName, state.fields= , args);
  }); // HANDLERS
  // HANDLERS
  const initializeForm = (fields: PeriqlesFieldInfo[]) => {
    const initialValues = {};
    fields.forEach((field: PeriqlesFieldInfo) => {
      let initialValue;

      switch (field.type) {
        case 'Enum':
        case 'String':
          initialValue = '';
          break;

        case 'Int':
          initialValue = 0;
          break;

        case 'Boolean':
          initialValue = false;
          break;

        default:
          initialValue = '';
      }

      initialValues[field.name] = initialValue;
    });
    state.formState= (initialValues);
  };
  const handleSubmit = (e, fields): void => {
    if (e.key === 'Enter' || e.type === 'click') {
      e.preventDefault(); // prevent page refesh
    } // validate non-null fields


    const missing: Array<string> = [];

    for (const key in formState) {
      const fieldInfo = fields.filter(field => field.name === key)[0];

      if (fieldInfo.required && formState[key] === '' || fieldInfo.required && formState[key] === undefined) {
        missing.push(fieldInfo.label);
      }
    }

    if (missing.length) {
      window.alert(`The following fields are required: ${missing.join(', ')}`);
      return;
    }

    const input: Input = { ...formState,
      ...args
    };
    const variables: Variables = {
      input
    };

    if (environment) {
      // relay commit method
      commitMutation(environment, {
        mutation: mutationGQL,
        variables,
        onCompleted: (response, errors): void => {
          if (callbacks?.onSuccess) callbacks.onSuccess(response);
          initializeForm(fields);
        },
        onError: (err): void => {
          if (callbacks?.onFailure) callbacks.onFailure(err);
        }
      });
    } else {
      // apollo commit method
      useMutation({
        variables
      }).then(response => {
        if (callbacks?.onSuccess) callbacks.onSuccess(response);
        initializeForm(fields);
      }).catch(err => {
        if (callbacks?.onFailure) callbacks.onFailure(err);
      });
    }
  };
  const handleChange = (e): void => {
    const {
      name,
      value,
      type
    } = e.target;
    let useValue = value; // type-coerce values from number input elements before storing in state

    if (type === 'number' && typeof value !== 'number') {
      useValue -= 0;
    }

    const newState = Object.assign({}, formState);
    newState[name] = useValue;
    state.formState= (newState);
  };
  watchEffect(() => initializeForm(fields));
</script>

<style lang="less" scoped src="./index.less"></style>
