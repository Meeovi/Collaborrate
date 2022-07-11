import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AccountsWhereUniqueInput } from "../../../inputs/AccountsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneAccountsArgs {
  @TypeGraphQL.Field(_type => AccountsWhereUniqueInput, {
    nullable: false
  })
  where!: AccountsWhereUniqueInput;
}
