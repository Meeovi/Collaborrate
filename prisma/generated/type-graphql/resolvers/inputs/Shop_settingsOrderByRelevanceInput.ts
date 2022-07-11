import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Shop_settingsOrderByRelevanceFieldEnum } from "../../enums/Shop_settingsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Shop_settingsOrderByRelevanceInput", {
  isAbstract: true
})
export class Shop_settingsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Shop_settingsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"store_name" | "store_phone" | "store_hours" | "country" | "region" | "zipcode" | "city" | "address" | "address_two" | "vat_number" | "allow_state" | "state_required_for" | "allow_countries" | "default_country" | "optional_zip" | "european_union_countries" | "top_destinations" | "base_currency" | "default_currency" | "allowed_currency">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
