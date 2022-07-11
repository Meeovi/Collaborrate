import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AccountsCreateInput } from "../../../inputs/AccountsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAccountsArgs {
  @TypeGraphQL.Field(_type => AccountsCreateInput, {
    nullable: false
  })
  data!: AccountsCreateInput;
}
