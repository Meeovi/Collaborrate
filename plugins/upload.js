import Vue from 'vue'
import VueFormulate from 'vue-formulate'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1'
})

Vue.use(VueFormulate, {
  uploader: axiosInstance,
  uploadUrl: '../media'
})