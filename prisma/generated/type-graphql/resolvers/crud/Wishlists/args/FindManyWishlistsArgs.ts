import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/WishlistsOrderByWithRelationAndSearchRelevanceInput";
import { WishlistsWhereInput } from "../../../inputs/WishlistsWhereInput";
import { WishlistsWhereUniqueInput } from "../../../inputs/WishlistsWhereUniqueInput";
import { WishlistsScalarFieldEnum } from "../../../../enums/WishlistsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyWishlistsArgs {
  @TypeGraphQL.Field(_type => WishlistsWhereInput, {
    nullable: true
  })
  where?: WishlistsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WishlistsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: WishlistsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => WishlistsWhereUniqueInput, {
    nullable: true
  })
  cursor?: WishlistsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [WishlistsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "customers" | "visibility" | "products" | "quantity"> | undefined;
}
