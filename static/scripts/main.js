/* eslint-disable no-unused-vars */
// import "echarts";
import $ from "jquery";
import Vue from 'vue';
import InstantSearch from 'vue-instantsearch';

Vue.use(InstantSearch);

// AlternateCMS Time Functionality

const d = new Date();
const year = d.getFullYear();

document.getElementById("currentYear").innerHTML = year;

// Text Editor throughout the Application

import Editor from '~/components/Editor.vue'
export default {
  components: {
    Editor
  }
}

