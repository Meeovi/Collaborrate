import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistsWhereInput } from "../../../inputs/WishlistsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWishlistsArgs {
  @TypeGraphQL.Field(_type => WishlistsWhereInput, {
    nullable: true
  })
  where?: WishlistsWhereInput | undefined;
}
