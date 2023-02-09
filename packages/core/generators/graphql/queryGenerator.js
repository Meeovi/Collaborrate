#! /usr/bin/env node
const {
  readFileSync,
  appendFileSync,
  mkdirSync,
  existsSync,
  writeFileSync,
} = require("fs");
const { buildSchema, Source } = require("graphql");
const yargs = require("yargs");

const usage =
  "\nUsage: gqlgenerator -i <input path to schema.gql> -o <output path>";
const options = yargs
  .usage(usage)
  .option("i", {
    alias: "input",
    describe: "schema input dir",
    default: "./schema.gql",
    type: "string",
    demandOption: false,
  })
  .option("o", {
    alias: "output",
    describe: "output dir",
    default: ".",
    type: "string",
    demandOption: false,
  })
  .option("d", {
    alias: "depth",
    describe: "depth of input output params",
    default: 6,
    type: "number",
    demandOption: false,
  })
  .help(true).argv;

const GqlTypes = [
  "Int",
  "Float",
  "String",
  "Boolean",
  "DateTime",
  "ID",
  "JSONObject",
];

const typeDef = readFileSync(options.input).toString("utf-8");
const source = new Source(typeDef);
const gqlSchema = buildSchema(source);

const queries = gqlSchema.getQueryType().getFields();

function createFoldersIfDontExists() {
  ["query"].forEach((folderName) => {
    if (!existsSync(`${options.output}/${folderName}`)) {
      mkdirSync(`${options.output}/${folderName}`, { recursive: true });
    }
  });
}

function cleanFile(folder, fileName) {
  writeFileSync(`${options.output}/${folder}/${fileName}.gql`, "");
}

function writeToFile(text, folder, fileName) {
  appendFileSync(
    `${options.output}/${folder}/${fileName}.gql`,
    `${text}\n`,
    function (err) {
      if (err) throw err;
    }
  );
}

function isGqlType(type) {
  return GqlTypes.includes(type);
}

function isEnum(kind) {
  return kind === "EnumTypeDefinition";
}

function isUnion(kind) {
  return kind === "UnionTypeDefinition";
}

function isJson(kind) {
  return kind === "ScalarTypeDefinition";
}

function getType(arg) {
  return JSON.stringify(arg["type"]).replace('"', "").replace('"', "");
}

function cleanType(type) {
  return type
    .replace("[", "")
    .replace("]", "")
    .replace("!", "")
    .replace("!", "");
}

function getKind(Ctype) {
  return gqlSchema.getType(Ctype)["astNode"]["kind"];
}

function getInput(field, indent, folder, fileName) {
  for (let index = 0; index < field.length; index++) {
    const arg = field[index];
    const type = getType(arg);
    const Ctype = cleanType(type);

    if (
      isGqlType(Ctype) ||
      isEnum(getKind(Ctype)) ||
      isUnion(getKind(Ctype)) ||
      isJson(getKind(Ctype)) ||
      indent > options.depth
    ) {
      writeToFile(
        `    ${" ".repeat(2 * indent)}${arg["name"]}: ${type}`,
        folder,
        fileName
      );
    } else {
      writeToFile(
        `    ${" ".repeat(2 * indent)}${arg["name"]}: {`,
        folder,
        fileName
      );
      getInput(
        Object.values(gqlSchema.getType(Ctype)["_fields"]),
        indent + 1,
        folder,
        fileName
      );
      writeToFile(`    ${" ".repeat(2 * indent)}}`, folder, fileName);
    }
  }
}

function getOutput(field, indent, folder, fileName) {
  for (let index = 0; index < field.length; index++) {
    const arg = field[index];
    const type = getType(arg);
    const Ctype = cleanType(type);

    if (
      isGqlType(Ctype) ||
      isEnum(getKind(Ctype)) ||
      isUnion(getKind(Ctype)) ||
      isJson(getKind(Ctype)) ||
      indent > options.depth
    ) {
      writeToFile(
        `    ${" ".repeat(2 * indent)}${arg["name"]}`,
        folder,
        fileName
      );
    } else {
      writeToFile(
        `    ${" ".repeat(2 * indent)}${arg["name"]} {`,
        folder,
        fileName
      );
      getOutput(
        Object.values(gqlSchema.getType(Ctype)["_fields"]),
        indent + 1,
        folder,
        fileName
      );
      writeToFile(`    ${" ".repeat(2 * indent)}}`, folder, fileName);
    }
  }
}

function generate(queryType, queryName) {
  for (let index = 0; index < Object.keys(queryType).length; index++) {
    const query = Object.keys(queryType)[index];
    const outputType = cleanType(getType(queryType[query]));
    const inputArgs = queryType[query].args;
    const isInput = inputArgs.length >= 1;
    const isOutput = !isGqlType(outputType);

    cleanFile(queryName, query);

    writeToFile(`${queryName} {`, queryName, query);

    // input
    if (isInput) {
      writeToFile(`  ${query} `, queryName, query);
      //getInput(inputArgs, 0, queryName, query);
      if (isOutput) {
        writeToFile(" {", queryName, query);
      } else {
        writeToFile("  )", queryName, query);
      }
    } else {
      if (isOutput) {
        writeToFile(`  ${query} {`, queryName, query);
      } else {
        writeToFile(`  ${query}`, queryName, query);
      }
    }

    // output
    if (isOutput) {
      getOutput(
        Object.values(
          gqlSchema.getType(cleanType(getType(queryType[query])))["_fields"]
        ),
        0,
        queryName,
        query
      );
      writeToFile("  }", queryName, query);
    }

    // close
    writeToFile("}", queryName, query);
  }
}

createFoldersIfDontExists();
generate(queries, "query");