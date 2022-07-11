import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistsUpdateInput } from "../../../inputs/WishlistsUpdateInput";
import { WishlistsWhereUniqueInput } from "../../../inputs/WishlistsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWishlistsArgs {
  @TypeGraphQL.Field(_type => WishlistsUpdateInput, {
    nullable: false
  })
  data!: WishlistsUpdateInput;

  @TypeGraphQL.Field(_type => WishlistsWhereUniqueInput, {
    nullable: false
  })
  where!: WishlistsWhereUniqueInput;
}
