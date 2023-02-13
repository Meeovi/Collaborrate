import { Generatable, capitalize } from './helpers';
import { DMMF } from '@prisma/generator-helper';
import { DMMFDocument, DMMFMapping } from './transformDMMF';
import * as Prism from 'prismjs';
import { lowerCase, isScalarType } from './helpers';

type ModelGeneratorStructure = {
  models: MGModel[];
};

type MGModel = {
  documentation?: string;
  name: string;
  directives: MGModelDirective[];
  fields: MGModelField[];
  operations: MGModelOperation[];
};

type MGModelDirective = {
  name: string;
  values: any[];
};

type MGModelField = {
  name: string;
  type: string;
  bareTypeName: string;
  directives: string[];
  documentation?: string;
  required: boolean;
};

type MGModelOperationKeys = {
  name: string;
  types: DMMF.SchemaArgInputType[];
  required: boolean;
};

type MGModelOperationOutput = {
  type: string;
  required: boolean;
  list: boolean;
};

type MakeOptionallyUndefined<T> = {
  [k in keyof T]: T[k] | undefined;
};
// TODO: Select and include keys are generated by the Prisma Client
// It might need some transformation
type MGModelOperation = {
  name: string;
  description: string;
  opKeys: MGModelOperationKeys[] | undefined;
  usage: string;
  output: MakeOptionallyUndefined<MGModelOperationOutput>;
};

interface FieldDefault {
  name: string;
  args: any[];
}

let fieldDirectiveMap = new Map<string, string>([
  ['isUnique', '@unique'],
  ['isId', '@id'],
  ['hasDefaultValue', '@default'],
  ['isUpdatedAt', '@updatedAt'],
  ['hasDefaultValue', '@default'],
]);

export default class ModelGenerator
  implements Generatable<ModelGeneratorStructure>
{
  data: ModelGeneratorStructure;

  constructor(d: DMMFDocument) {
    this.data = this.getData(d);
  }

  getModelDiretiveHTML(directive: MGModelDirective): string {
    return `
      <tr>
        <td class="px-4 py-2 border">
         <strong>${directive.name}</strong>
        </td>

        <td class="px-4 py-2 border"> <ul>
            ${directive.values.map((val) => `<li>${val}</li>`).join('')}
          </ul>
        </td>
      </tr>
    `;
  }

  getModelFieldTableRow(field: MGModelField, modelName: string): string {
    return `
    <tr id="${`model-${modelName}-${field.name}`}">
      <td class="px-4 py-2 border">
       ${field.name} 
      </td>
      <td class="px-4 py-2 border">
       ${
         isScalarType(field.bareTypeName)
           ? field.type
           : `<a href="#type-outputType-${field.bareTypeName}">${field.type}</a>`
       }
      </td>
      <td class="px-4 py-2 border">
        <ul>
          ${
            field.directives.length > 0
              ? field.directives
                  .map((directive) => `<li><strong>${directive}</strong></li>`)
                  .join('')
              : '<li> - </li>'
          }
        </ul>
      </td>
      <td class="px-4 py-2 border">
        ${field.required ? `<b>Yes</b>` : 'No'}
      </td>
      <td class="px-4 py-2 border">
        ${field.documentation ?? '-'}
      </td>
    </tr>
    `;
  }

  getModelOperationMarkup(
    operation: MGModelOperation,
    modelName: string
  ): string {
    return `
                <div class="mt-4">
                  <h4 id="${`model-${modelName}-${operation.name}`}" class="mb-2 text-lg font-bold">${
      operation.name
    }</h4>
                  <p>${operation.description}</p>
                  <div class="mb-2">
                    <pre
                      class="language-markup"
                    ><code class=" language-javascript">${
                      operation.usage
                    }</code></pre>
                  </div>
                  <h4 class="text-lg mb-2">Input</h4>
                  <table class="table-auto mb-2">
                    <thead>
                      <tr>
                        <th class="px-4 py-2 border">Name</th>
                        <th class="px-4 py-2 border">Type</th>
                        <th class="px-4 py-2 border">Required</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${operation.opKeys
                        ?.map(
                          (opK) => `
                      <tr>
                        <td class="px-4 py-2 border">
                          ${opK.name}
                        </td>
                        <td class="px-4 py-2 border">
                        ${opK.types
                          .map((t) =>
                            isScalarType(t.type as string)
                              ? t.type
                              : `<a href="#type-inputType-${t.type}">${t.type}${
                                  t.isList ? '[]' : ''
                                }</a>`
                          )
                          .join(' | ')}
                        </td>
                        <td class="px-4 py-2 border">
                         ${opK.required ? '<b>Yes</b>' : 'No'} 
                        </td>
                      </tr>
                      `
                        )
                        .join('')}
                    </tbody>
                  </table>
                  <h4 class="text-lg mb-2">Output</h4>
                  <div><strong>Type: </strong> <a href="#type-outputType-${
                    operation.output.type
                  }">${operation.output.type}</a></div>
                  <div><strong>Required: </strong>
                  ${operation.output.required ? `Yes` : `No`}</div>
                  <div><strong>List: </strong>
                  ${operation.output.list ? `Yes` : `No`}</div>
              </div>
    `;
  }

  toHTML() {
    return `
        <div class="mb-8">
          <h1 class="text-3xl text-gray-800" id="models">Models</h1>
            ${this.data.models
              .map(
                (model) => `
            <div class="px-4 mb-4">
              <h2 class="text-2xl" id="model-${model.name}">${model.name}</h2>
              ${
                model.documentation
                  ? `<div class="mb-2">Description: ${model.documentation}</div>`
                  : ''
              }
              ${
                model.directives.length > 0
                  ? `
              <table class="table-auto">
                <thead>
                  <tr>
                    <th class="px-4 py-2 border">Name</th>
                    <th class="px-4 py-2 border">Value</th>
                  </tr>
                </thead>
                <tbody>
                  ${model.directives
                    .map((directive) => this.getModelDiretiveHTML(directive))
                    .join('')}
                </tbody>
              </table>
                `
                  : ''
              }
              <div class="px-4 mt-4">
                <h3 class="mb-2 text-xl" id="model-${
                  model.name
                }-fields">Fields</h3>
                <div class="px-2 mb-4">
                  <table class="table-auto">
                    <thead>
                      <tr>
                        <th class="px-4 py-2 border">Name</th>
                        <th class="px-4 py-2 border">Type</th>
                        <th class="px-4 py-2 border">Attributes</th>
                        <th class="px-4 py-2 border">Required</th>
                        <th class="px-4 py-2 border">Comment</th>
                      </tr>
                    </thead>
                    <tbody>
                    ${model.fields
                      .map((field) =>
                        this.getModelFieldTableRow(field, model.name)
                      )
                      .join('')}
                    </tbody>
                  </table>
                </div>
            </div>
            <hr class="my-8">
              <div class="px-4 mt-4">
                <h3 class="mb-2 text-xl" id="model-${
                  model.name
                }-operations">Operations</h3>
                <div class="px-2 mb-4">
                  ${model.operations
                    .map((op) => this.getModelOperationMarkup(op, model.name))
                    .join(`<hr class="my-4">`)}
                </div>
            </div>
          </div>
            `
              )
              .join(`<hr class="my-16">`)}
        </div>
    `;
  }

  getModelDirective(model: DMMF.Model): MGModelDirective[] {
    let directiveValue: MGModelDirective[] = [];

    if (model.primaryKey)
      directiveValue.push({ name: '@@id', values: model.primaryKey.fields });

    if (model.uniqueFields.length > 0) {
      model.uniqueFields.forEach((uniqueField) => {
        directiveValue.push({
          name: '@@unique',
          values: uniqueField,
        });
      });
    }

    if (model.uniqueIndexes.length > 0) {
      model.uniqueIndexes.forEach((uniqueIndex) => {
        directiveValue.push({ name: '@@index', values: uniqueIndex.fields });
      });
    }
    return directiveValue;
  }

  getModelFields(model: DMMF.Model): MGModelField[] {
    return model.fields.map((field) => {
      return {
        name: field.name,
        type: this.getFieldType(field),
        bareTypeName: field.type,
        documentation: (field as any).documentation,
        directives: this.getFieldDirectives(field),
        required: field.isRequired,
      };
    });
  }

  getFieldType(field: DMMF.Field): string {
    let name = field.type;
    if (!field.isRequired && !field.isList) {
      name += '?';
    }
    if (field.isList) {
      name += '[]';
    }
    return name;
  }

  getFieldDirectives(field: DMMF.Field): string[] {
    const filteredEntries = Object.entries(field).filter(([_, v]) =>
      Boolean(v)
    );

    let directives: string[] = [];

    filteredEntries.forEach(([k]) => {
      const mappedDirectiveValue = fieldDirectiveMap.get(k);
      if (mappedDirectiveValue) {
        // default needs separate treatment right now as it can be a fn or any other type really
        if (k === 'hasDefaultValue' && field.default !== undefined) {
          if (
            typeof field.default === 'string' ||
            typeof field.default === 'number' ||
            typeof field.default === 'boolean'
          ) {
            directives.push(`${mappedDirectiveValue}(${field.default})`);
          }
          if (typeof field.default === 'object') {
            // Output of this template is, for example, @default(now())
            directives.push(
              `${mappedDirectiveValue}(${
                (field.default as FieldDefault).name
              }(${(field.default as FieldDefault).args.join(',')}))`
            );
          }
        } else {
          directives.push(mappedDirectiveValue);
        }
      }
    });

    return directives;
  }

  getModelOperations(
    model: DMMF.Model,
    mappings: DMMFMapping | undefined,
    schema: DMMF.Schema
  ): MGModelOperation[] {
    if (!mappings) {
      throw new Error(`No operation mapping found for model: ${model.name}`);
    }
    const modelOps = Object.entries(mappings).filter(
      ([map, _val]) => map !== 'model'
    );
    let ops: MGModelOperation[] = [];
    modelOps.forEach(([op, val]) => {
      const singular = capitalize(model.name);
      const plural = capitalize(singular);
      const method = `prisma.${lowerCase(model.name)}.${op}`;
      switch (op) {
        case DMMF.ModelAction.create: {
          const field = schema.outputObjectTypes.prisma
            .find((t) => t.name === 'Mutation')
            ?.fields.find((f) => f.name === val);
          ops.push({
            name: op,
            description: `Create one ${singular}`,
            usage: Prism.highlight(
              `// Create one ${singular}
const ${singular} = await ${method}({
  data: {
    // ... data to create a ${singular}
  }
})
`,
              Prism.languages.javascript,
              'javascript'
            ),
            opKeys: field?.args.map((a) => ({
              name: a.name,
              types: a.inputTypes,
              required: a.isRequired,
            })),
            output: {
              type: field?.outputType.type as string,
              required: !field?.isNullable,
              list: field?.outputType.isList,
            },
          });
          break;
        }
        case DMMF.ModelAction.deleteMany: {
          const field = schema.outputObjectTypes.prisma
            .find((t) => t.name === 'Mutation')
            ?.fields.find((f) => f.name === val);
          ops.push({
            name: op,
            description: `Delete zero or more ${singular}`,
            usage: Prism.highlight(
              `// Delete a few ${plural}
const { count } = await ${method}({
  where: {
    // ... provide filter here
  }
})
`,
              Prism.languages.javascript,
              'javascript'
            ),
            opKeys: field?.args.map((a) => ({
              name: a.name,
              types: a.inputTypes,
              required: a.isRequired,
            })),
            output: {
              type: field?.outputType.type as string,
              required: !field?.isNullable,
              list: field?.outputType.isList,
            },
          });
          break;
        }
        case DMMF.ModelAction.delete: {
          const field = schema.outputObjectTypes.prisma
            .find((t) => t.name === 'Mutation')
            ?.fields.find((f) => f.name === val);
          ops.push({
            name: op,
            description: `Delete one ${singular}`,
            usage: Prism.highlight(
              `// Delete one ${singular}
const ${singular} = await ${method}({
  where: {
    // ... filter to delete one ${singular}
  }
})`,
              Prism.languages.javascript,
              'javascript'
            ),
            opKeys: field?.args.map((a) => ({
              name: a.name,
              types: a.inputTypes,
              required: a.isRequired,
            })),
            output: {
              type: field?.outputType.type as string,
              required: !field?.isNullable,
              list: field?.outputType.isList,
            },
          });
          break;
        }
        case DMMF.ModelAction.findMany: {
          const field = schema.outputObjectTypes.prisma
            .find((t) => t.name === 'Query')
            ?.fields.find((f) => f.name === val);
          ops.push({
            name: op,
            description: `Find zero or more ${plural}`,
            usage: Prism.highlight(
              `// Get all ${plural}
const ${plural} = await ${method}()
// Get first 10 ${plural}
const ${plural} = await ${method}({ take: 10 })
`,
              Prism.languages.javascript,
              'javascript'
            ),
            opKeys: field?.args.map((a) => ({
              name: a.name,
              types: a.inputTypes,
              required: a.isRequired,
            })),
            output: {
              type: field?.outputType.type as string,
              required: !field?.isNullable,
              list: field?.outputType.isList,
            },
          });
          break;
        }
        case DMMF.ModelAction.findUnique: {
          const field = schema.outputObjectTypes.prisma
            .find((t) => t.name === 'Query')
            ?.fields.find((f) => f.name === val);
          ops.push({
            name: op,
            description: `Find zero or one ${plural}`,
            usage: Prism.highlight(
              `// Get one ${singular}
const ${lowerCase(singular)} = await ${method}({
  where: {
    // ... provide filter here
  }
})
`,
              Prism.languages.javascript,
              'javascript'
            ),
            opKeys: field?.args.map((a) => ({
              name: a.name,
              types: a.inputTypes,
              required: a.isRequired,
            })),
            output: {
              type: field?.outputType.type as string,
              required: !field?.isNullable,
              list: field?.outputType.isList,
            },
          });
          break;
        }

        case DMMF.ModelAction.findFirst: {
          const field = schema.outputObjectTypes.prisma
            .find((t) => t.name === 'Query')
            ?.fields.find((f) => f.name === val);
          ops.push({
            name: op,
            description: `Find first ${plural}`,
            usage: Prism.highlight(
              `// Get one ${singular}
const ${lowerCase(singular)} = await ${method}({
  where: {
    // ... provide filter here
  }
})
`,
              Prism.languages.javascript,
              'javascript'
            ),
            opKeys: field?.args.map((a) => ({
              name: a.name,
              types: a.inputTypes,
              required: a.isRequired,
            })),
            output: {
              type: field?.outputType.type as string,
              required: !field?.isNullable,
              list: field?.outputType.isList,
            },
          });
          break;
        }

        case DMMF.ModelAction.update: {
          const field = schema.outputObjectTypes.prisma
            .find((t) => t.name === 'Mutation')
            ?.fields.find((f) => f.name === val);
          ops.push({
            name: op,
            description: `Update one ${singular}`,
            usage: Prism.highlight(
              `// Update one ${singular}
const ${lowerCase(singular)} = await ${method}({
  where: {
    // ... provide filter here
  },
  data: {
    // ... provide data here
  }
})
`,
              Prism.languages.javascript,
              'javascript'
            ),
            opKeys: field?.args.map((a) => ({
              name: a.name,
              types: a.inputTypes,
              required: a.isRequired,
            })),
            output: {
              type: field?.outputType.type as string,
              required: !field?.isNullable,
              list: field?.outputType.isList,
            },
          });
          break;
        }

        case DMMF.ModelAction.updateMany: {
          const field = schema.outputObjectTypes.prisma
            .find((t) => t.name === 'Mutation')
            ?.fields.find((f) => f.name === val);
          ops.push({
            name: op,
            description: `Update zero or one ${plural}`,
            usage: Prism.highlight(
              `const { count } = await ${method}({
  where: {
    // ... provide filter here
  },
  data: {
    // ... provide data here
  }
})`,
              Prism.languages.javascript,
              'javascript'
            ),
            opKeys: field?.args.map((a) => ({
              name: a.name,
              types: a.inputTypes,
              required: a.isRequired,
            })),
            output: {
              type: field?.outputType.type as string,
              required: !field?.isNullable,
              list: field?.outputType.isList,
            },
          });
          break;
        }
        case DMMF.ModelAction.upsert: {
          const field = schema.outputObjectTypes.prisma
            .find((t) => t.name === 'Mutation')
            ?.fields.find((f) => f.name === val);
          ops.push({
            name: op,
            description: `Create or update one ${plural}`,
            usage: Prism.highlight(
              `// Update or create a ${singular}
const ${lowerCase(singular)} = await ${method}({
  create: {
    // ... data to create a ${singular}
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the ${singular} we want to update
  }
})`,
              Prism.languages.javascript,
              'javascript'
            ),
            opKeys: field?.args.map((a) => ({
              name: a.name,
              types: a.inputTypes,
              required: a.isRequired,
            })),
            output: {
              type: field?.outputType.type as string,
              required: !field?.isNullable,
              list: field?.outputType.isList,
            },
          });
          break;
        }
      }
    });
    return ops;
  }

  getModels(dmmf: DMMFDocument): MGModel[] {
    return dmmf.datamodel.models.map((model) => {
      return {
        name: model.name,
        documentation: (model as any).documentation as string, // TODO: Open issue for generator helper
        directives: this.getModelDirective(model),
        fields: this.getModelFields(model),
        operations: this.getModelOperations(
          model,
          dmmf.mappings.find((map) => map.model === model.name),
          dmmf.schema
        ),
      };
    });
  }

  getData(d: DMMFDocument) {
    return {
      models: this.getModels(d),
    };
  }
}
