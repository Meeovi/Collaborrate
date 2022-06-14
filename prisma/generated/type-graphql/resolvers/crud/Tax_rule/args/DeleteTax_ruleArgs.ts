import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_ruleWhereUniqueInput } from "../../../inputs/Tax_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTax_ruleArgs {
  @TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_ruleWhereUniqueInput;
}
