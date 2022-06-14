import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Email_templatesUpdateInput } from "../../../inputs/Email_templatesUpdateInput";
import { Email_templatesWhereUniqueInput } from "../../../inputs/Email_templatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateEmail_templatesArgs {
  @TypeGraphQL.Field(_type => Email_templatesUpdateInput, {
    nullable: false
  })
  data!: Email_templatesUpdateInput;

  @TypeGraphQL.Field(_type => Email_templatesWhereUniqueInput, {
    nullable: false
  })
  where!: Email_templatesWhereUniqueInput;
}
