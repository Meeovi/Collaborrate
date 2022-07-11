import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_categoryCreateInput } from "../../../inputs/Tax_categoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTax_categoryArgs {
  @TypeGraphQL.Field(_type => Tax_categoryCreateInput, {
    nullable: false
  })
  data!: Tax_categoryCreateInput;
}
