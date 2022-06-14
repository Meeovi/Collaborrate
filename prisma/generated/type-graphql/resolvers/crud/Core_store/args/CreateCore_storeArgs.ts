import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Core_storeCreateInput } from "../../../inputs/Core_storeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCore_storeArgs {
  @TypeGraphQL.Field(_type => Core_storeCreateInput, {
    nullable: false
  })
  data!: Core_storeCreateInput;
}
