import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_ruleCreateInput } from "../../../inputs/Tax_ruleCreateInput";
import { Tax_ruleUpdateInput } from "../../../inputs/Tax_ruleUpdateInput";
import { Tax_ruleWhereUniqueInput } from "../../../inputs/Tax_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTax_ruleArgs {
  @TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_ruleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Tax_ruleCreateInput, {
    nullable: false
  })
  create!: Tax_ruleCreateInput;

  @TypeGraphQL.Field(_type => Tax_ruleUpdateInput, {
    nullable: false
  })
  update!: Tax_ruleUpdateInput;
}
