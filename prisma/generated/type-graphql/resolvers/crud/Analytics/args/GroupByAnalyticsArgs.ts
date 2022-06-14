import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticsOrderByWithAggregationInput } from "../../../inputs/AnalyticsOrderByWithAggregationInput";
import { AnalyticsScalarWhereWithAggregatesInput } from "../../../inputs/AnalyticsScalarWhereWithAggregatesInput";
import { AnalyticsWhereInput } from "../../../inputs/AnalyticsWhereInput";
import { AnalyticsScalarFieldEnum } from "../../../../enums/AnalyticsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAnalyticsArgs {
  @TypeGraphQL.Field(_type => AnalyticsWhereInput, {
    nullable: true
  })
  where?: AnalyticsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AnalyticsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AnalyticsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnalyticsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "country" | "share_data" | "website_name" | "client_id" | "client_secret" | "tracking_id" | "property_name" | "url" | "default_view" | "category" | "property_hit" | "tracking_code" | "data_collection" | "data_retention" | "search_analytics">;

  @TypeGraphQL.Field(_type => AnalyticsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AnalyticsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
