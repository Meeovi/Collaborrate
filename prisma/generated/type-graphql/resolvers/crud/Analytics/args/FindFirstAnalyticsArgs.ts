import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticsOrderByWithRelationInput } from "../../../inputs/AnalyticsOrderByWithRelationInput";
import { AnalyticsWhereInput } from "../../../inputs/AnalyticsWhereInput";
import { AnalyticsWhereUniqueInput } from "../../../inputs/AnalyticsWhereUniqueInput";
import { AnalyticsScalarFieldEnum } from "../../../../enums/AnalyticsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAnalyticsArgs {
  @TypeGraphQL.Field(_type => AnalyticsWhereInput, {
    nullable: true
  })
  where?: AnalyticsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AnalyticsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AnalyticsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AnalyticsWhereUniqueInput, {
    nullable: true
  })
  cursor?: AnalyticsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AnalyticsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "country" | "share_data" | "website_name" | "client_id" | "client_secret" | "tracking_id" | "property_name" | "url" | "default_view" | "category" | "property_hit" | "tracking_code" | "data_collection" | "data_retention" | "search_analytics"> | undefined;
}
