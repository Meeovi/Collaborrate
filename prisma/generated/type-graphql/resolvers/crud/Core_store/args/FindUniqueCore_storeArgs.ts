import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Core_storeWhereUniqueInput } from "../../../inputs/Core_storeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCore_storeArgs {
  @TypeGraphQL.Field(_type => Core_storeWhereUniqueInput, {
    nullable: false
  })
  where!: Core_storeWhereUniqueInput;
}
