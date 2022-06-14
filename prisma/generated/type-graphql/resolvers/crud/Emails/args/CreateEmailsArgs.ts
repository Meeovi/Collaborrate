import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailsCreateInput } from "../../../inputs/EmailsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateEmailsArgs {
  @TypeGraphQL.Field(_type => EmailsCreateInput, {
    nullable: false
  })
  data!: EmailsCreateInput;
}
