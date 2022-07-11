import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shop_settingsOrderByWithAggregationInput } from "../../../inputs/Shop_settingsOrderByWithAggregationInput";
import { Shop_settingsScalarWhereWithAggregatesInput } from "../../../inputs/Shop_settingsScalarWhereWithAggregatesInput";
import { Shop_settingsWhereInput } from "../../../inputs/Shop_settingsWhereInput";
import { Shop_settingsScalarFieldEnum } from "../../../../enums/Shop_settingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByShop_settingsArgs {
  @TypeGraphQL.Field(_type => Shop_settingsWhereInput, {
    nullable: true
  })
  where?: Shop_settingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Shop_settingsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Shop_settingsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Shop_settingsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "store_name" | "store_phone" | "store_hours" | "country" | "region" | "zipcode" | "city" | "address" | "address_two" | "vat_number" | "allow_state" | "state_required_for" | "allow_countries" | "default_country" | "optional_zip" | "european_union_countries" | "top_destinations" | "base_currency" | "default_currency" | "allowed_currency">;

  @TypeGraphQL.Field(_type => Shop_settingsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Shop_settingsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
