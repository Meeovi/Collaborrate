import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Special_discountsOrderByWithAggregationInput } from "../../../inputs/Special_discountsOrderByWithAggregationInput";
import { Special_discountsScalarWhereWithAggregatesInput } from "../../../inputs/Special_discountsScalarWhereWithAggregatesInput";
import { Special_discountsWhereInput } from "../../../inputs/Special_discountsWhereInput";
import { Special_discountsScalarFieldEnum } from "../../../../enums/Special_discountsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySpecial_discountsArgs {
  @TypeGraphQL.Field(_type => Special_discountsWhereInput, {
    nullable: true
  })
  where?: Special_discountsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Special_discountsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Special_discountsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Special_discountsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "rewards" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users">;

  @TypeGraphQL.Field(_type => Special_discountsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Special_discountsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
