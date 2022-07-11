import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistsOrderByWithAggregationInput } from "../../../inputs/WishlistsOrderByWithAggregationInput";
import { WishlistsScalarWhereWithAggregatesInput } from "../../../inputs/WishlistsScalarWhereWithAggregatesInput";
import { WishlistsWhereInput } from "../../../inputs/WishlistsWhereInput";
import { WishlistsScalarFieldEnum } from "../../../../enums/WishlistsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWishlistsArgs {
  @TypeGraphQL.Field(_type => WishlistsWhereInput, {
    nullable: true
  })
  where?: WishlistsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WishlistsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: WishlistsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [WishlistsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "customers" | "visibility" | "products" | "quantity">;

  @TypeGraphQL.Field(_type => WishlistsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: WishlistsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
