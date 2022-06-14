import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistsCreateInput } from "../../../inputs/WishlistsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateWishlistsArgs {
  @TypeGraphQL.Field(_type => WishlistsCreateInput, {
    nullable: false
  })
  data!: WishlistsCreateInput;
}
