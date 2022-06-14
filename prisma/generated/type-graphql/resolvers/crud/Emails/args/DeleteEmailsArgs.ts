import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailsWhereUniqueInput } from "../../../inputs/EmailsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteEmailsArgs {
  @TypeGraphQL.Field(_type => EmailsWhereUniqueInput, {
    nullable: false
  })
  where!: EmailsWhereUniqueInput;
}
