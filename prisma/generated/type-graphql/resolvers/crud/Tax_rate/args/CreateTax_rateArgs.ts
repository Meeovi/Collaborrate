import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rateCreateInput } from "../../../inputs/Tax_rateCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTax_rateArgs {
  @TypeGraphQL.Field(_type => Tax_rateCreateInput, {
    nullable: false
  })
  data!: Tax_rateCreateInput;
}
