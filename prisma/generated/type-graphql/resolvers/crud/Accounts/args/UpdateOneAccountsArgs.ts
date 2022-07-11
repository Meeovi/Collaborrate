import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AccountsUpdateInput } from "../../../inputs/AccountsUpdateInput";
import { AccountsWhereUniqueInput } from "../../../inputs/AccountsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAccountsArgs {
  @TypeGraphQL.Field(_type => AccountsUpdateInput, {
    nullable: false
  })
  data!: AccountsUpdateInput;

  @TypeGraphQL.Field(_type => AccountsWhereUniqueInput, {
    nullable: false
  })
  where!: AccountsWhereUniqueInput;
}
