import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attribute_setOrderByRelevanceFieldEnum } from "../../enums/Product_attribute_setOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_attribute_setOrderByRelevanceInput", {
  isAbstract: true
})
export class Product_attribute_setOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_attribute_setOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "based_on">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
