import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistsCreateManyInput } from "../../../inputs/WishlistsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWishlistsArgs {
  @TypeGraphQL.Field(_type => [WishlistsCreateManyInput], {
    nullable: false
  })
  data!: WishlistsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
