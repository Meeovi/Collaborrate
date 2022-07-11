import * as TypeGraphQL from "type-graphql";

export enum SCHEMAScalarFieldEnum {
  className = "className",
  schema = "schema",
  isParseClass = "isParseClass"
}
TypeGraphQL.registerEnumType(SCHEMAScalarFieldEnum, {
  name: "SCHEMAScalarFieldEnum",
  description: undefined,
});
