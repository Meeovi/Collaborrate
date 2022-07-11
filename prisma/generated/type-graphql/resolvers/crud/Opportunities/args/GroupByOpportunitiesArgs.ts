import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OpportunitiesOrderByWithAggregationInput } from "../../../inputs/OpportunitiesOrderByWithAggregationInput";
import { OpportunitiesScalarWhereWithAggregatesInput } from "../../../inputs/OpportunitiesScalarWhereWithAggregatesInput";
import { OpportunitiesWhereInput } from "../../../inputs/OpportunitiesWhereInput";
import { OpportunitiesScalarFieldEnum } from "../../../../enums/OpportunitiesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOpportunitiesArgs {
  @TypeGraphQL.Field(_type => OpportunitiesWhereInput, {
    nullable: true
  })
  where?: OpportunitiesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OpportunitiesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OpportunitiesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OpportunitiesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "amount" | "sales_stage" | "currency" | "probability" | "next_step" | "description" | "assigned_to" | "lead_source" | "campaign" | "type" | "account_name" | "expected_close_date">;

  @TypeGraphQL.Field(_type => OpportunitiesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OpportunitiesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
