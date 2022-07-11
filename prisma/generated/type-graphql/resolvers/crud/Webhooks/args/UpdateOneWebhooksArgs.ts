import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhooksUpdateInput } from "../../../inputs/WebhooksUpdateInput";
import { WebhooksWhereUniqueInput } from "../../../inputs/WebhooksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWebhooksArgs {
  @TypeGraphQL.Field(_type => WebhooksUpdateInput, {
    nullable: false
  })
  data!: WebhooksUpdateInput;

  @TypeGraphQL.Field(_type => WebhooksWhereUniqueInput, {
    nullable: false
  })
  where!: WebhooksWhereUniqueInput;
}
