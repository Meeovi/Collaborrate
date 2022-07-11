import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhooksOrderByWithAggregationInput } from "../../../inputs/WebhooksOrderByWithAggregationInput";
import { WebhooksScalarWhereWithAggregatesInput } from "../../../inputs/WebhooksScalarWhereWithAggregatesInput";
import { WebhooksWhereInput } from "../../../inputs/WebhooksWhereInput";
import { WebhooksScalarFieldEnum } from "../../../../enums/WebhooksScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWebhooksArgs {
  @TypeGraphQL.Field(_type => WebhooksWhereInput, {
    nullable: true
  })
  where?: WebhooksWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WebhooksOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: WebhooksOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [WebhooksScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "url" | "headers" | "create" | "retrieve" | "update" | "delete" | "publish" | "unpublish">;

  @TypeGraphQL.Field(_type => WebhooksScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: WebhooksScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
