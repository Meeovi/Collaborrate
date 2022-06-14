import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AccountsWhereInput } from "../../../inputs/AccountsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAccountsArgs {
  @TypeGraphQL.Field(_type => AccountsWhereInput, {
    nullable: true
  })
  where?: AccountsWhereInput | undefined;
}
