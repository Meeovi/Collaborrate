import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistsWhereInput } from "../inputs/WishlistsWhereInput";

@TypeGraphQL.InputType("WishlistsRelationFilter", {
  isAbstract: true
})
export class WishlistsRelationFilter {
  @TypeGraphQL.Field(_type => WishlistsWhereInput, {
    nullable: true
  })
  is?: WishlistsWhereInput | undefined;

  @TypeGraphQL.Field(_type => WishlistsWhereInput, {
    nullable: true
  })
  isNot?: WishlistsWhereInput | undefined;
}
