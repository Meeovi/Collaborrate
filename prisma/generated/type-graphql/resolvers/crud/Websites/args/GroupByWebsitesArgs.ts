import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsitesOrderByWithAggregationInput } from "../../../inputs/WebsitesOrderByWithAggregationInput";
import { WebsitesScalarWhereWithAggregatesInput } from "../../../inputs/WebsitesScalarWhereWithAggregatesInput";
import { WebsitesWhereInput } from "../../../inputs/WebsitesWhereInput";
import { WebsitesScalarFieldEnum } from "../../../../enums/WebsitesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWebsitesArgs {
  @TypeGraphQL.Field(_type => WebsitesWhereInput, {
    nullable: true
  })
  where?: WebsitesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WebsitesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: WebsitesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [WebsitesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "url" | "shop" | "store">;

  @TypeGraphQL.Field(_type => WebsitesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: WebsitesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
