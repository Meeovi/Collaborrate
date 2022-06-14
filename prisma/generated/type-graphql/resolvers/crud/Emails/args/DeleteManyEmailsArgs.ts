import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailsWhereInput } from "../../../inputs/EmailsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEmailsArgs {
  @TypeGraphQL.Field(_type => EmailsWhereInput, {
    nullable: true
  })
  where?: EmailsWhereInput | undefined;
}
