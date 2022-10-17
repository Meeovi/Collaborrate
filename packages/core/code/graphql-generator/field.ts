import * as Vue from 'vue';
import {generateDefaultElement, generateSpecifiedElement} from './function';

const PeriqlesField = ({
  field,
  specs,
  formState,
  setFormState,
  handleChange,
}: PeriqlesFieldProps): JSX.Element => {
  return (specs 
    ? generateSpecifiedElement({
        field,
        specs,
        formState,
        setFormState,
        handleChange,
      }) 
    : generateDefaultElement({
        field, 
        formState, 
        handleChange}));
};

export default PeriqlesField;