import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Email_templatesCreateInput } from "../../../inputs/Email_templatesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateEmail_templatesArgs {
  @TypeGraphQL.Field(_type => Email_templatesCreateInput, {
    nullable: false
  })
  data!: Email_templatesCreateInput;
}
