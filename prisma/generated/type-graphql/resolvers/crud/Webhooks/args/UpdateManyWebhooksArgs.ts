import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhooksUpdateManyMutationInput } from "../../../inputs/WebhooksUpdateManyMutationInput";
import { WebhooksWhereInput } from "../../../inputs/WebhooksWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWebhooksArgs {
  @TypeGraphQL.Field(_type => WebhooksUpdateManyMutationInput, {
    nullable: false
  })
  data!: WebhooksUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => WebhooksWhereInput, {
    nullable: true
  })
  where?: WebhooksWhereInput | undefined;
}
