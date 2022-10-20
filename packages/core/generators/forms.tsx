import * as Vue from 'vue';
// import { render } from 'vue-dom';
import PeriqlesField from './utils/fields';
const {introspect} = require('./generators/utils/functions');
import {commitMutation} from 'vue-relay';
import '../periqles.css'

const {ref, watchEffect} = Vue;

const PeriqlesForm = ({
  environment,
  mutationName,
  mutationGQL,
  useMutation,
  specifications,
  args = {},
  callbacks,
}: PeriqlesFormProps): JSX.Element => {
  const [formState, setFormState] = ref<FormState>({});
  const [fields, setFields] = ref<PeriqlesFieldInfo[]>([]);

  // introspect this project's GraphQL schema on initial render
  watchEffect(() => {
    introspect(mutationName, setFields, args);
  }, [mutationName]);

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

    setFormState(initialValues);
  };

  const handleSubmit = (e, fields): void => {
    if (e.key === 'Enter' || e.type === 'click') {
      e.preventDefault(); // prevent page refesh
    }

    // validate non-null fields
    const missing: Array<string> = [];
    for (const key in formState) {
      const fieldInfo = fields.filter(
        (field) => field.name === key,
      )[0];

      if (fieldInfo.required && formState[key] === '' 
            || fieldInfo.required && formState[key] === undefined) {
        missing.push(fieldInfo.label);
      }
    }

    if (missing.length) {
      window.alert(`The following fields are required: ${missing.join(', ')}`);
      return;
    }

    const input: Input = {...formState, ...args};
    const variables: Variables = {
      input,
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
        },
      });
    } else {
      // apollo commit method
      useMutation({ variables })
      .then(response => {
        if (callbacks?.onSuccess) callbacks.onSuccess(response);
        initializeForm(fields);
      })
      .catch(err => {
        if (callbacks?.onFailure) callbacks.onFailure(err);
      })
    }
  };

  const handleChange = (e): void => {
    const {name, value, type} = e.target;
    let useValue = value;
    // type-coerce values from number input elements before storing in state
    if (type === 'number' && typeof value !== 'number') {
      useValue -= 0;
    }

    const newState = Object.assign({}, formState);
    newState[name] = useValue;
    setFormState(newState);
  };

  watchEffect(() => initializeForm(fields), [fields.length, setFormState]);

  return (
   <form
      class="PeriqlesForm"
      aria-labelledby="form"
      onSubmit={(e) => handleSubmit(e, fields)}>
        {specifications && specifications.header && <h2>{specifications.header}</h2>}
        {fields.length 
          ? (fields.map((field: PeriqlesFieldInfo, index: number) => {
            const specs = specifications
              ? specifications.fields[field.name]
              : undefined;
            return (
              <PeriqlesField
                key={`Periqles${mutationName}Field${index}`}
                field={field}
                specs={specs}
                formState={formState}
                setFormState={setFormState}
                handleChange={handleChange}
              />
            );
          }))
          : <p>Loading form...</p>
        }
        <button
          class="periqles-submit"
          onClick={(e) => handleSubmit(e, fields)}>
          Submit
        </button>
    </form>
  );
};

export default PeriqlesForm;