import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_ruleCreateInput } from "../../../inputs/Tax_ruleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTax_ruleArgs {
  @TypeGraphQL.Field(_type => Tax_ruleCreateInput, {
    nullable: false
  })
  data!: Tax_ruleCreateInput;
}
