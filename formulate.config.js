import { en } from '@braid/vue-formulate-i18n'

export default {
  plugins: [en],
  locale: 'en',
  rules: {
    foobar: ({ value }) => ['foo', 'bar'].includes(value)
  }
}