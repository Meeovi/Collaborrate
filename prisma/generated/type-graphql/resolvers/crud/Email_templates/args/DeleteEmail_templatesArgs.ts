import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Email_templatesWhereUniqueInput } from "../../../inputs/Email_templatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteEmail_templatesArgs {
  @TypeGraphQL.Field(_type => Email_templatesWhereUniqueInput, {
    nullable: false
  })
  where!: Email_templatesWhereUniqueInput;
}
