import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shop_settingsOrderByWithRelationInput } from "../../../inputs/Shop_settingsOrderByWithRelationInput";
import { Shop_settingsWhereInput } from "../../../inputs/Shop_settingsWhereInput";
import { Shop_settingsWhereUniqueInput } from "../../../inputs/Shop_settingsWhereUniqueInput";
import { Shop_settingsScalarFieldEnum } from "../../../../enums/Shop_settingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyShop_settingsArgs {
  @TypeGraphQL.Field(_type => Shop_settingsWhereInput, {
    nullable: true
  })
  where?: Shop_settingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Shop_settingsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Shop_settingsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Shop_settingsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Shop_settingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Shop_settingsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "store_name" | "store_phone" | "store_hours" | "country" | "region" | "zipcode" | "city" | "address" | "address_two" | "vat_number" | "allow_state" | "state_required_for" | "allow_countries" | "default_country" | "optional_zip" | "european_union_countries" | "top_destinations" | "base_currency" | "default_currency" | "allowed_currency"> | undefined;
}
