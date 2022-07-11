import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AccountsUpdateManyMutationInput } from "../../../inputs/AccountsUpdateManyMutationInput";
import { AccountsWhereInput } from "../../../inputs/AccountsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAccountsArgs {
  @TypeGraphQL.Field(_type => AccountsUpdateManyMutationInput, {
    nullable: false
  })
  data!: AccountsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AccountsWhereInput, {
    nullable: true
  })
  where?: AccountsWhereInput | undefined;
}
