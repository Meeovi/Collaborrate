import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AccountsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/AccountsOrderByWithRelationAndSearchRelevanceInput";
import { AccountsWhereInput } from "../../../inputs/AccountsWhereInput";
import { AccountsWhereUniqueInput } from "../../../inputs/AccountsWhereUniqueInput";
import { AccountsScalarFieldEnum } from "../../../../enums/AccountsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAccountsArgs {
  @TypeGraphQL.Field(_type => AccountsWhereInput, {
    nullable: true
  })
  where?: AccountsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AccountsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: AccountsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [AccountsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "website" | "office_phone" | "fax" | "email" | "address" | "postalcode" | "city" | "state" | "country" | "assigned_to" | "alt_address" | "alt_postalcode" | "alt_city" | "alt_state" | "alt_country" | "type" | "industry" | "employees" | "annual_revenue" | "member_of" | "campaign"> | undefined;
}
