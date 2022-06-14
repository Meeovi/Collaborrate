import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AccountsOrderByWithRelationInput } from "../../../inputs/AccountsOrderByWithRelationInput";
import { AccountsWhereInput } from "../../../inputs/AccountsWhereInput";
import { AccountsWhereUniqueInput } from "../../../inputs/AccountsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAccountsArgs {
  @TypeGraphQL.Field(_type => AccountsWhereInput, {
    nullable: true
  })
  where?: AccountsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AccountsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AccountsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AccountsWhereUniqueInput, {
    nullable: true
  })
  cursor?: AccountsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
