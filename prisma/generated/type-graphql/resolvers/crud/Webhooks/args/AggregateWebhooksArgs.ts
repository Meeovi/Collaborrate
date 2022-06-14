import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhooksOrderByWithRelationInput } from "../../../inputs/WebhooksOrderByWithRelationInput";
import { WebhooksWhereInput } from "../../../inputs/WebhooksWhereInput";
import { WebhooksWhereUniqueInput } from "../../../inputs/WebhooksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateWebhooksArgs {
  @TypeGraphQL.Field(_type => WebhooksWhereInput, {
    nullable: true
  })
  where?: WebhooksWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WebhooksOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: WebhooksOrderByWithRelationInput[] | undefined;

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
