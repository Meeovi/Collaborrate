import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_ruleOrderByWithAggregationInput } from "../../../inputs/Tax_ruleOrderByWithAggregationInput";
import { Tax_ruleScalarWhereWithAggregatesInput } from "../../../inputs/Tax_ruleScalarWhereWithAggregatesInput";
import { Tax_ruleWhereInput } from "../../../inputs/Tax_ruleWhereInput";
import { Tax_ruleScalarFieldEnum } from "../../../../enums/Tax_ruleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTax_ruleArgs {
  @TypeGraphQL.Field(_type => Tax_ruleWhereInput, {
    nullable: true
  })
  where?: Tax_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Tax_ruleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "tax_rate" | "prod_id">;

  @TypeGraphQL.Field(_type => Tax_ruleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Tax_ruleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
