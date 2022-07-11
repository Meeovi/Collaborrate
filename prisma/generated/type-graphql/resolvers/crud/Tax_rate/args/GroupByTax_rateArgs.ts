import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rateOrderByWithAggregationInput } from "../../../inputs/Tax_rateOrderByWithAggregationInput";
import { Tax_rateScalarWhereWithAggregatesInput } from "../../../inputs/Tax_rateScalarWhereWithAggregatesInput";
import { Tax_rateWhereInput } from "../../../inputs/Tax_rateWhereInput";
import { Tax_rateScalarFieldEnum } from "../../../../enums/Tax_rateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTax_rateArgs {
  @TypeGraphQL.Field(_type => Tax_rateWhereInput, {
    nullable: true
  })
  where?: Tax_rateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Tax_rateOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Tax_rateOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_rateScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "tax_identifier" | "zip_post_is_range" | "postcode" | "state" | "country" | "rate_percent" | "default_store_view" | "prod_id">;

  @TypeGraphQL.Field(_type => Tax_rateScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Tax_rateScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
