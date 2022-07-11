import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CouponsOrderByRelevanceFieldEnum } from "../../enums/CouponsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CouponsOrderByRelevanceInput", {
  isAbstract: true
})
export class CouponsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [CouponsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "excerpt" | "discount" | "image" | "expiration" | "categories" | "articles" | "products" | "customers" | "users">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
