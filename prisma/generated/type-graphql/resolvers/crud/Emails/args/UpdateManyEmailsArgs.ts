import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailsUpdateManyMutationInput } from "../../../inputs/EmailsUpdateManyMutationInput";
import { EmailsWhereInput } from "../../../inputs/EmailsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEmailsArgs {
  @TypeGraphQL.Field(_type => EmailsUpdateManyMutationInput, {
    nullable: false
  })
  data!: EmailsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EmailsWhereInput, {
    nullable: true
  })
  where?: EmailsWhereInput | undefined;
}
