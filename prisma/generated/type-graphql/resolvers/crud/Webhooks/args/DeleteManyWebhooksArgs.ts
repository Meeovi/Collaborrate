import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhooksWhereInput } from "../../../inputs/WebhooksWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWebhooksArgs {
  @TypeGraphQL.Field(_type => WebhooksWhereInput, {
    nullable: true
  })
  where?: WebhooksWhereInput | undefined;
}
