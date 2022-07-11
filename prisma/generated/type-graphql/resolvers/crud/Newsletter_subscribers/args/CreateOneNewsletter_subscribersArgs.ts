import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_subscribersCreateInput } from "../../../inputs/Newsletter_subscribersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneNewsletter_subscribersArgs {
  @TypeGraphQL.Field(_type => Newsletter_subscribersCreateInput, {
    nullable: false
  })
  data!: Newsletter_subscribersCreateInput;
}
