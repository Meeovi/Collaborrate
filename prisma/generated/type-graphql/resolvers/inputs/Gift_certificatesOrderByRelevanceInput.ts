import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Gift_certificatesOrderByRelevanceFieldEnum } from "../../enums/Gift_certificatesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Gift_certificatesOrderByRelevanceInput", {
  isAbstract: true
})
export class Gift_certificatesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Gift_certificatesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "excerpt" | "discount" | "image" | "special_offers" | "rewards" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users" | "type">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
