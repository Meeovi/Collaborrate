import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhooksCreateInput } from "../../../inputs/WebhooksCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWebhooksArgs {
  @TypeGraphQL.Field(_type => WebhooksCreateInput, {
    nullable: false
  })
  data!: WebhooksCreateInput;
}
