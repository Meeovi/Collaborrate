import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhooksWhereUniqueInput } from "../../../inputs/WebhooksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneWebhooksArgs {
  @TypeGraphQL.Field(_type => WebhooksWhereUniqueInput, {
    nullable: false
  })
  where!: WebhooksWhereUniqueInput;
}
