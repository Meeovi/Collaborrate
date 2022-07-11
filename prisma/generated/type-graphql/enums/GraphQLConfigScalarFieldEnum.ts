import * as TypeGraphQL from "type-graphql";

export enum GraphQLConfigScalarFieldEnum {
  objectId = "objectId",
  config = "config"
}
TypeGraphQL.registerEnumType(GraphQLConfigScalarFieldEnum, {
  name: "GraphQLConfigScalarFieldEnum",
  description: undefined,
});
