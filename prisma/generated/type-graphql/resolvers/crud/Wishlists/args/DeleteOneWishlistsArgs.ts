import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistsWhereUniqueInput } from "../../../inputs/WishlistsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneWishlistsArgs {
  @TypeGraphQL.Field(_type => WishlistsWhereUniqueInput, {
    nullable: false
  })
  where!: WishlistsWhereUniqueInput;
}
