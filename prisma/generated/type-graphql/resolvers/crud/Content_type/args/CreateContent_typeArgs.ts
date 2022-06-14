import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Content_typeCreateInput } from "../../../inputs/Content_typeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateContent_typeArgs {
  @TypeGraphQL.Field(_type => Content_typeCreateInput, {
    nullable: false
  })
  data!: Content_typeCreateInput;
}
