import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhooksOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/WebhooksOrderByWithRelationAndSearchRelevanceInput";
import { WebhooksWhereInput } from "../../../inputs/WebhooksWhereInput";
import { WebhooksWhereUniqueInput } from "../../../inputs/WebhooksWhereUniqueInput";
import { WebhooksScalarFieldEnum } from "../../../../enums/WebhooksScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyWebhooksArgs {
  @TypeGraphQL.Field(_type => WebhooksWhereInput, {
    nullable: true
  })
  where?: WebhooksWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WebhooksOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: WebhooksOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => WebhooksWhereUniqueInput, {
    nullable: true
  })
  cursor?: WebhooksWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [WebhooksScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "url" | "headers" | "create" | "retrieve" | "update" | "delete" | "publish" | "unpublish"> | undefined;
}
