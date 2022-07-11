import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_ruleWhereInput } from "../../../inputs/Tax_ruleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTax_ruleArgs {
  @TypeGraphQL.Field(_type => Tax_ruleWhereInput, {
    nullable: true
  })
  where?: Tax_ruleWhereInput | undefined;
}
