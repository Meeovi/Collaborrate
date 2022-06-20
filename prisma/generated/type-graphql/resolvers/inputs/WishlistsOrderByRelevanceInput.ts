import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { WishlistsOrderByRelevanceFieldEnum } from "../../enums/WishlistsOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("WishlistsOrderByRelevanceInput", {
  isAbstract: true
})
export class WishlistsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [WishlistsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "customers" | "visibility" | "products" | "quantity">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
