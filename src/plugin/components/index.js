import Vue from 'vue';

export default () => {
  Vue.component('c-echarts', require('./custom-chart').default);
  Vue.component('c-source-detail', require('./source-detail').default);
  Vue.component('c-source-filter', require('./source-filter').default);
  Vue.component('c-source-form-item', require('./source-form-item').default);
  Vue.component('c-source-form', require('./source-form').default);
  Vue.component('c-source-page', require('./source-page').default);
  Vue.component('c-source-table', require('./source-table').default);
  Vue.component('c-upload', require('./upload').default);
  Vue.component('c-upload-form-item', require('./upload-form-item').default);
  Vue.component('c-nav-menu', require('./nav-menu').default);
  Vue.component('c-preview-image', require('./preview-image').default);
  Vue.component('v-node', require('./v-node').default);
  Vue.component('c-dropdown-button', require('./dropdown-button').default);
  Vue.component('c-link-button', require('./link-button').default);
  Vue.component('c-pagination', require('./pagination').default);
  Vue.component('c-select', require('./select').default);
  Vue.component('c-nest-form', require('./dynamic-nest-form').default);
  Vue.component('c-static-nest-form', require('./static-nest-form').default);
  Vue.component('c-router-link', require('./router-link').default);
  Vue.component('c-permission', require('./permission').default);
  Vue.component('c-clipboard', require('./clipboard').default);
  if (Vue.appConfig.ckeditor.use) { Vue.component('c-editor', require('./ck-editor').default); }  // config to add ckeditor
}
