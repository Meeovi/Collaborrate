import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailsCreateInput } from "../../../inputs/EmailsCreateInput";
import { EmailsUpdateInput } from "../../../inputs/EmailsUpdateInput";
import { EmailsWhereUniqueInput } from "../../../inputs/EmailsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertEmailsArgs {
  @TypeGraphQL.Field(_type => EmailsWhereUniqueInput, {
    nullable: false
  })
  where!: EmailsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmailsCreateInput, {
    nullable: false
  })
  create!: EmailsCreateInput;

  @TypeGraphQL.Field(_type => EmailsUpdateInput, {
    nullable: false
  })
  update!: EmailsUpdateInput;
}
