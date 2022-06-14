import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_ruleUpdateManyMutationInput } from "../../../inputs/Tax_ruleUpdateManyMutationInput";
import { Tax_ruleWhereInput } from "../../../inputs/Tax_ruleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTax_ruleArgs {
  @TypeGraphQL.Field(_type => Tax_ruleUpdateManyMutationInput, {
    nullable: false
  })
  data!: Tax_ruleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Tax_ruleWhereInput, {
    nullable: true
  })
  where?: Tax_ruleWhereInput | undefined;
}
