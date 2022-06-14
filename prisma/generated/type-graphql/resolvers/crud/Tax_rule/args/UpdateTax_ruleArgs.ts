import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_ruleUpdateInput } from "../../../inputs/Tax_ruleUpdateInput";
import { Tax_ruleWhereUniqueInput } from "../../../inputs/Tax_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTax_ruleArgs {
  @TypeGraphQL.Field(_type => Tax_ruleUpdateInput, {
    nullable: false
  })
  data!: Tax_ruleUpdateInput;

  @TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_ruleWhereUniqueInput;
}
