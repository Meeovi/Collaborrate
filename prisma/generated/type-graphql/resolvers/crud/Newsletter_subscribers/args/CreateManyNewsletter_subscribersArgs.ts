import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_subscribersCreateManyInput } from "../../../inputs/Newsletter_subscribersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNewsletter_subscribersArgs {
  @TypeGraphQL.Field(_type => [Newsletter_subscribersCreateManyInput], {
    nullable: false
  })
  data!: Newsletter_subscribersCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
