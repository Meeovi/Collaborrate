import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistsCreateWithoutOccassionsInput } from "../inputs/WishlistsCreateWithoutOccassionsInput";
import { WishlistsWhereUniqueInput } from "../inputs/WishlistsWhereUniqueInput";

@TypeGraphQL.InputType("WishlistsCreateOrConnectWithoutOccassionsInput", {
  isAbstract: true
})
export class WishlistsCreateOrConnectWithoutOccassionsInput {
  @TypeGraphQL.Field(_type => WishlistsWhereUniqueInput, {
    nullable: false
  })
  where!: WishlistsWhereUniqueInput;

  @TypeGraphQL.Field(_type => WishlistsCreateWithoutOccassionsInput, {
    nullable: false
  })
  create!: WishlistsCreateWithoutOccassionsInput;
}
