import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhooksCreateManyInput } from "../../../inputs/WebhooksCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWebhooksArgs {
  @TypeGraphQL.Field(_type => [WebhooksCreateManyInput], {
    nullable: false
  })
  data!: WebhooksCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
