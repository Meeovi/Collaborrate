import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_subscribersCreateInput } from "../../../inputs/Newsletter_subscribersCreateInput";
import { Newsletter_subscribersUpdateInput } from "../../../inputs/Newsletter_subscribersUpdateInput";
import { Newsletter_subscribersWhereUniqueInput } from "../../../inputs/Newsletter_subscribersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertNewsletter_subscribersArgs {
  @TypeGraphQL.Field(_type => Newsletter_subscribersWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_subscribersWhereUniqueInput;

  @TypeGraphQL.Field(_type => Newsletter_subscribersCreateInput, {
    nullable: false
  })
  create!: Newsletter_subscribersCreateInput;

  @TypeGraphQL.Field(_type => Newsletter_subscribersUpdateInput, {
    nullable: false
  })
  update!: Newsletter_subscribersUpdateInput;
}
