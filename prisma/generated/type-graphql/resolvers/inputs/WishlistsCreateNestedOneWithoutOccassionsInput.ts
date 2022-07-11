import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistsCreateOrConnectWithoutOccassionsInput } from "../inputs/WishlistsCreateOrConnectWithoutOccassionsInput";
import { WishlistsCreateWithoutOccassionsInput } from "../inputs/WishlistsCreateWithoutOccassionsInput";
import { WishlistsWhereUniqueInput } from "../inputs/WishlistsWhereUniqueInput";

@TypeGraphQL.InputType("WishlistsCreateNestedOneWithoutOccassionsInput", {
  isAbstract: true
})
export class WishlistsCreateNestedOneWithoutOccassionsInput {
  @TypeGraphQL.Field(_type => WishlistsCreateWithoutOccassionsInput, {
    nullable: true
  })
  create?: WishlistsCreateWithoutOccassionsInput | undefined;

  @TypeGraphQL.Field(_type => WishlistsCreateOrConnectWithoutOccassionsInput, {
    nullable: true
  })
  connectOrCreate?: WishlistsCreateOrConnectWithoutOccassionsInput | undefined;

  @TypeGraphQL.Field(_type => WishlistsWhereUniqueInput, {
    nullable: true
  })
  connect?: WishlistsWhereUniqueInput | undefined;
}
