import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailsUpdateInput } from "../../../inputs/EmailsUpdateInput";
import { EmailsWhereUniqueInput } from "../../../inputs/EmailsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateEmailsArgs {
  @TypeGraphQL.Field(_type => EmailsUpdateInput, {
    nullable: false
  })
  data!: EmailsUpdateInput;

  @TypeGraphQL.Field(_type => EmailsWhereUniqueInput, {
    nullable: false
  })
  where!: EmailsWhereUniqueInput;
}
