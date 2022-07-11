import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhooksCreateInput } from "../../../inputs/WebhooksCreateInput";
import { WebhooksUpdateInput } from "../../../inputs/WebhooksUpdateInput";
import { WebhooksWhereUniqueInput } from "../../../inputs/WebhooksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWebhooksArgs {
  @TypeGraphQL.Field(_type => WebhooksWhereUniqueInput, {
    nullable: false
  })
  where!: WebhooksWhereUniqueInput;

  @TypeGraphQL.Field(_type => WebhooksCreateInput, {
    nullable: false
  })
  create!: WebhooksCreateInput;

  @TypeGraphQL.Field(_type => WebhooksUpdateInput, {
    nullable: false
  })
  update!: WebhooksUpdateInput;
}
