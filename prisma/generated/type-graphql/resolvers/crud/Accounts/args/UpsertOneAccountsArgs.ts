import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AccountsCreateInput } from "../../../inputs/AccountsCreateInput";
import { AccountsUpdateInput } from "../../../inputs/AccountsUpdateInput";
import { AccountsWhereUniqueInput } from "../../../inputs/AccountsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAccountsArgs {
  @TypeGraphQL.Field(_type => AccountsWhereUniqueInput, {
    nullable: false
  })
  where!: AccountsWhereUniqueInput;

  @TypeGraphQL.Field(_type => AccountsCreateInput, {
    nullable: false
  })
  create!: AccountsCreateInput;

  @TypeGraphQL.Field(_type => AccountsUpdateInput, {
    nullable: false
  })
  update!: AccountsUpdateInput;
}
