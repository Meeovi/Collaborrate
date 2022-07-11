import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistsUpdateManyMutationInput } from "../../../inputs/WishlistsUpdateManyMutationInput";
import { WishlistsWhereInput } from "../../../inputs/WishlistsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWishlistsArgs {
  @TypeGraphQL.Field(_type => WishlistsUpdateManyMutationInput, {
    nullable: false
  })
  data!: WishlistsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => WishlistsWhereInput, {
    nullable: true
  })
  where?: WishlistsWhereInput | undefined;
}
