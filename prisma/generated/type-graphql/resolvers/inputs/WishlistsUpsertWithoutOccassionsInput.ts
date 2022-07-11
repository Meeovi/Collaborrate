import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistsCreateWithoutOccassionsInput } from "../inputs/WishlistsCreateWithoutOccassionsInput";
import { WishlistsUpdateWithoutOccassionsInput } from "../inputs/WishlistsUpdateWithoutOccassionsInput";

@TypeGraphQL.InputType("WishlistsUpsertWithoutOccassionsInput", {
  isAbstract: true
})
export class WishlistsUpsertWithoutOccassionsInput {
  @TypeGraphQL.Field(_type => WishlistsUpdateWithoutOccassionsInput, {
    nullable: false
  })
  update!: WishlistsUpdateWithoutOccassionsInput;

  @TypeGraphQL.Field(_type => WishlistsCreateWithoutOccassionsInput, {
    nullable: false
  })
  create!: WishlistsCreateWithoutOccassionsInput;
}
