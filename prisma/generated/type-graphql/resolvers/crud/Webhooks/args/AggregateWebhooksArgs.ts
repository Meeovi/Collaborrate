import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhooksOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/WebhooksOrderByWithRelationAndSearchRelevanceInput";
import { WebhooksWhereInput } from "../../../inputs/WebhooksWhereInput";
import { WebhooksWhereUniqueInput } from "../../../inputs/WebhooksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateWebhooksArgs {
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
}