import * as mdb from 'mdb-ui-kit';
import ContactForm from './contact-form';

const url = 'http://localhost:3000/api/contact';
const form = document.getElementById('form');
new ContactForm(form, url);

export default {
  mdb,
};
