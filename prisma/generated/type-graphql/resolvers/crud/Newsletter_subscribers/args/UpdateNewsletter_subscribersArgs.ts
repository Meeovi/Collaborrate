import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_subscribersUpdateInput } from "../../../inputs/Newsletter_subscribersUpdateInput";
import { Newsletter_subscribersWhereUniqueInput } from "../../../inputs/Newsletter_subscribersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateNewsletter_subscribersArgs {
  @TypeGraphQL.Field(_type => Newsletter_subscribersUpdateInput, {
    nullable: false
  })
  data!: Newsletter_subscribersUpdateInput;

  @TypeGraphQL.Field(_type => Newsletter_subscribersWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_subscribersWhereUniqueInput;
}
