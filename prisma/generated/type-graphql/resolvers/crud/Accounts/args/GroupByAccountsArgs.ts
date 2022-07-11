import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AccountsOrderByWithAggregationInput } from "../../../inputs/AccountsOrderByWithAggregationInput";
import { AccountsScalarWhereWithAggregatesInput } from "../../../inputs/AccountsScalarWhereWithAggregatesInput";
import { AccountsWhereInput } from "../../../inputs/AccountsWhereInput";
import { AccountsScalarFieldEnum } from "../../../../enums/AccountsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAccountsArgs {
  @TypeGraphQL.Field(_type => AccountsWhereInput, {
    nullable: true
  })
  where?: AccountsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AccountsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AccountsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AccountsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "website" | "office_phone" | "fax" | "email" | "address" | "postalcode" | "city" | "state" | "country" | "assigned_to" | "alt_address" | "alt_postalcode" | "alt_city" | "alt_state" | "alt_country" | "type" | "industry" | "employees" | "annual_revenue" | "member_of" | "campaign">;

  @TypeGraphQL.Field(_type => AccountsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AccountsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
