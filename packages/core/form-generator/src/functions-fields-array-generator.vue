<template> </template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  const props = defineProps({});

  const fieldsArray: Array<PeriqlesFieldInfo> = [];
  inputType.inputFields.forEach((field) => {
    // exclude from the form any inputs accounted for by args
    if (args[field.name]) return;
    const fieldObj: PeriqlesFieldInfo = {
      name: field.name,
    }; //check the field.type.kind to see if the field is NON_NULL (required)
    //if so, set fieldObj.required to true

    fieldObj.required = field.type.kind === 'NON_NULL'; // the input field is a scalar, nullable type

    if (field.type.name && field.type.kind === 'SCALAR') {
      fieldObj.type = field.type.name;
    } // the input field is an enumerated type (whether or not wrapped in a NON_NULL type)
    else if (field.type.kind === 'ENUM' || field.type.ofType?.kind === 'ENUM') {
      fieldObj.type = 'Enum';

      try {
        const optionsArr = field.type.enumValues || field.type.ofType?.enumValues || []; // provide each option a type property

        fieldObj.options = optionsArr.map((option: EnumValue) => {
          let value, type;

          switch (typeof option.name) {
            case 'number':
            case 'bigint':
              value = option.name;
              type = 'Int';
              break;

            case 'boolean':
              // stringify booleans b/c HTML typing doesn't allow for boolean value attributes
              value = `${option.name}`;
              type = 'Boolean';
              break;

            default:
              value = option.name;
              type = 'String';
          }

          const mappedOption: PeriqlesFieldOption = {
            name: `${option.name}`,
            label: `${option.name}`,
            value,
            type,
          };
          return mappedOption;
        });
      } catch (err) {
        console.error('ERROR at PeriqlesForm: Failure to assign enumerated field.', err);
      }
    } // the input field is a scalar wrapped in a NON_NULL type
    else if (field.type.ofType?.name && field.type.ofType?.kind === 'SCALAR') {
      // TODO
      fieldObj.type = field.type.ofType.name;
    } // TODO: the input field is not a scalar or enum type
    else {
      console.warn(
        `The '${field.name}' input field is of a complex type not currently supported by PeriqlesForm. It will default to a 'String'. Type:`,
        field
      );
      fieldObj.type = 'String';
    }

    fieldsArray.push(fieldObj);
  });
</script>

<style lang="less" scoped src="./index.less"></style>
