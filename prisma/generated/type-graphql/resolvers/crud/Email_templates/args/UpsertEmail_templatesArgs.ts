import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Email_templatesCreateInput } from "../../../inputs/Email_templatesCreateInput";
import { Email_templatesUpdateInput } from "../../../inputs/Email_templatesUpdateInput";
import { Email_templatesWhereUniqueInput } from "../../../inputs/Email_templatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertEmail_templatesArgs {
  @TypeGraphQL.Field(_type => Email_templatesWhereUniqueInput, {
    nullable: false
  })
  where!: Email_templatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Email_templatesCreateInput, {
    nullable: false
  })
  create!: Email_templatesCreateInput;

  @TypeGraphQL.Field(_type => Email_templatesUpdateInput, {
    nullable: false
  })
  update!: Email_templatesUpdateInput;
}
