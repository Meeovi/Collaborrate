import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AccountsCreateManyInput } from "../../../inputs/AccountsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAccountsArgs {
  @TypeGraphQL.Field(_type => [AccountsCreateManyInput], {
    nullable: false
  })
  data!: AccountsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
