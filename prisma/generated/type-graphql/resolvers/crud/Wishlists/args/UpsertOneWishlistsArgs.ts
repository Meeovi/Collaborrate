import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistsCreateInput } from "../../../inputs/WishlistsCreateInput";
import { WishlistsUpdateInput } from "../../../inputs/WishlistsUpdateInput";
import { WishlistsWhereUniqueInput } from "../../../inputs/WishlistsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWishlistsArgs {
  @TypeGraphQL.Field(_type => WishlistsWhereUniqueInput, {
    nullable: false
  })
  where!: WishlistsWhereUniqueInput;

  @TypeGraphQL.Field(_type => WishlistsCreateInput, {
    nullable: false
  })
  create!: WishlistsCreateInput;

  @TypeGraphQL.Field(_type => WishlistsUpdateInput, {
    nullable: false
  })
  update!: WishlistsUpdateInput;
}
